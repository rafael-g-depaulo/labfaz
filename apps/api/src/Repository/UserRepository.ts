import { EntityRepository, Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

import User from "Entities/User";
import authConfig from "Config/auth";
import { ArtistInfo } from "Routes/User/utils/userReqSchema";
import Artist from "Entities/Artist";

import { UploadedFile } from "Utils/awsConfig";
import Address from "Entities/Address";
import Certificate from "Entities/Certificate";
import Contact from "Entities/Contact";
import Technical from "Entities/Technical";
import Area, { TechFormation } from "Entities/Area";
import Idiom from "Entities/Idiom";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string) {
    return this.findOne({
      where: { email },
    });
  }

  findByIdWithAll(id: string) {
    return this.findOne({
      where: { id },
      relations: [
        "artist",
        "contact",
        "address",
        "technical",
        "idiom",
        "area",
        "curriculum",
        "certificate",
      ],
    });
  }

  async createUser(
    email: string,
    rawPassword: string,
    artist: ArtistInfo,
    curriculum: UploadedFile,
    profilePicture: UploadedFile
  ) {
    // TODO: have a try-catch for every await (or one encompassing the entire function)
    const hashedPwd = await this.generateHash(rawPassword);

    const Idioms = artist.technical.idiom?.map(async (idiom) => {
      const createdIdiom = new Idiom();
      createdIdiom.name = idiom.name;
      await this.save(createdIdiom);
      return createdIdiom;
    });

    const createdArea = new Area();
    createdArea.name = artist.technical.areas?.[0].name ?? "";
    createdArea.started_year = artist.technical.areas?.[0].started_year ?? "";
    createdArea.technical_formation =
      artist.technical.areas?.[0].technical_formation ?? TechFormation.AUTO;
    createdArea.describe = artist.technical.areas?.[0].describe ?? "";

    const certicates = artist.technical.areas?.[0].certificate?.map(
      async (certficate) => {
        const createdCertificate = new Certificate();
        createdCertificate.name = certficate.name;
        createdCertificate.area = createdArea;
        await this.save(createdCertificate);
        return createdCertificate;
      }
    );
    createdArea.certificate = await Promise.all(certicates ?? []);

    const createdTech = new Technical();
    createdTech.formation = artist.technical.formation;
    createdTech.is_affiliated = artist.technical.is_affiliated;
    createdTech.is_ceac = artist.technical.is_ceac;
    createdTech.is_cnpj = artist.technical.is_cnpj;
    createdTech.is_drt = artist.technical.is_drt;
    createdTech.want_be_affiliated = artist.technical.want_be_affiliated;
    createdTech.idiom = await Promise.all(Idioms ?? []);

    const createdContact = new Contact();
    createdContact.facebook = artist.contact.facebook ?? null;
    createdContact.instagram = artist.contact.instagram ?? null;
    createdContact.linkedin = artist.contact.linkedin ?? null;
    createdContact.tiktok = artist.contact.tiktok ?? null;
    createdContact.twitter = artist.contact.twitter ?? null;
    createdContact.whatsapp = artist.contact.whatsapp ?? null;
    createdContact.youtube = artist.contact.youtube ?? null;

    const createdAddress = new Address();
    createdAddress.cep = artist.address.cep;
    createdAddress.city = artist.address.city;
    createdAddress.complement = artist.address.complement;
    createdAddress.neighbourhood = artist.address.neighbourhood;
    createdAddress.number = artist.address.number;
    createdAddress.residency = artist.address.residency;

    const createdArtist = new Artist();
    createdArtist.artistic_name = artist.artistic_name;
    createdArtist.birthday = artist.birthday;
    createdArtist.cpf = artist.cpf;
    createdArtist.expedition_department = artist.expedition_department;
    createdArtist.gender = artist.gender;
    createdArtist.is_trans = artist.is_trans;
    createdArtist.name = artist.name;
    createdArtist.race = artist.race;
    createdArtist.rg = artist.rg;
    createdArtist.photo_url = profilePicture.url;
    createdArtist.curriculum = curriculum.url;

    createdArtist.address = createdAddress;
    createdArtist.contact = createdContact;

    createdAddress.artist = createdArtist;
    createdContact.artist = createdArtist;

    const createdUser = this.create({
      email,
      password: hashedPwd,
      active: false,
      isVerified: false,
      banned: false,
      artist: createdArtist,
    });

    await createdUser.save();

    return createdUser;
  }

  findById(id: string) {
    return this.findOne({
      where: { id },
    });
  }

  generateHash(password: string) {
    return hash(password, 8);
  }

  compareHash(password: string, userPassword: string) {
    return compare(password, userPassword);
  }

  async generateToken(email: string) {
    const { secret, expiresIn } = authConfig.jwt;

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user.id }, secret, { expiresIn });
    return token;
  }

  async generateResetPasswordToken(email: string) {
    const { secret, expiresIn } = authConfig.token;

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user.id }, secret, { expiresIn });
    return token;
  }
}

export default UserRepository;
