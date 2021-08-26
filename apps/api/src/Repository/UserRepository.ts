import { EntityRepository, getRepository, Repository } from "typeorm";
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a342ca (🚧 WIP: Problems with typescript and Promises)
  async createUser(
    email: string,
    rawPassword: string,
    artist: ArtistInfo,
    curriculum: UploadedFile,
    profilePicture: UploadedFile
  ) {
<<<<<<< HEAD
    // TODO: have a try-catch for every await (or one encompassing the entire function)
=======
>>>>>>> 6a342ca (🚧 WIP: Problems with typescript and Promises)
    const hashedPwd = await this.generateHash(rawPassword);

    const Idioms = artist.technical.idiom?.map(async (idiom) => {
      const createdIdiom = new Idiom();
      createdIdiom.name = idiom.name;
<<<<<<< HEAD
      return this.save(createdIdiom);
    });
    const createdArea = new Area();
    createdArea.name = artist.technical.areas?.[0]?.name ?? "";
    createdArea.started_year = artist.technical.areas?.[0]?.started_year ?? "";
    createdArea.technical_formation =
      artist.technical.areas?.[0]?.technical_formation ?? TechFormation.AUTO;
    createdArea.describe = artist.technical.areas?.[0]?.describe ?? "";

    const certicates = artist.technical.areas?.[0]?.certificate?.map(
      async (certficate) => {
        const createdCertificate = new Certificate();
        createdCertificate.name = certficate.name;
        createdCertificate.area = createdArea;
        return this.save(createdCertificate);
      }
    );
    try {
      createdArea.certificate = await Promise.all(certicates ?? []);
    } catch (error) {
      console.log(error);
      throw Error("Error creating certificates!!");
    }
    console.log("criei certificado");

    try {
      const areaRepo = getRepository(Area)
      await areaRepo.save(createdArea);
    } catch (error) {
      console.log(error);
      throw Error("Error creating area!!");
    }

    console.log("2")

    const createdTech = new Technical();
    createdTech.formation = artist.technical.formation;
    createdTech.is_ceac = artist.technical.is_ceac;
    createdTech.is_cnpj = artist.technical.is_cnpj;
    createdTech.is_drt = artist.technical.is_drt;
    try {
      console.log("22")
      createdTech.idiom = await Promise.all(Idioms ?? []);
      console.log("23")
    } catch (error) {
      console.log(error);
      throw Error("Error creating idiom!!");
    }
    console.log("31")
    createdTech.area = [createdArea]

    console.log("32")

    try {
      const techRepo = getRepository(Technical)
      await techRepo.save(createdTech);
    } catch (error) {
      console.log(error);
      throw Error("Error creating techinical!!");
    }

    const createdContact = new Contact();
    createdContact.facebook = artist.contact.facebook ?? null;
    createdContact.instagram = artist.contact.instagram ?? null;
    createdContact.linkedin = artist.contact.linkedin ?? null;
    createdContact.tiktok = artist.contact.tiktok ?? null;
    createdContact.twitter = artist.contact.twitter ?? null;
    createdContact.whatsapp = artist.contact.whatsapp ?? null;
    createdContact.youtube = artist.contact.youtube ?? null;

    console.log("4")

    try {
      const contactRepo = getRepository(Contact)
      await contactRepo.save(createdContact);
    } catch (error) {
      console.log(error);
      throw Error("Error creating contact !!");
    }

    const createdAddress = new Address();
    createdAddress.cep = artist.address.cep;
    createdAddress.city = artist.address.city;
    createdAddress.complement = artist.address.complement;
    createdAddress.neighbourhood = artist.address.neighbourhood;
    createdAddress.number = artist.address.number;
    createdAddress.residency = artist.address.residency;
    
    console.log("5")
    try {
      const addrRepo = getRepository(Address)
      await addrRepo.save(createdAddress);
    } catch (error) {
      console.log(error);
      throw Error("Error creating address !!");
    }
    console.log("6")

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

    console.log("7")

    try {
      const artistRepo = getRepository(Artist)
      await artistRepo.save(createdArtist);
    } catch (error) {
      console.log(error);
      throw Error("Error creating artist !!");
    }
    console.log("8")

    createdAddress.artist = createdArtist;
    createdContact.artist = createdArtist;

    const createdUser = new User()
    createdUser.email = email
    createdUser.password = hashedPwd
    createdUser.active = false
    createdUser.isVerified = false
    createdUser.banned = false
    createdUser.artist = createdArtist
    
    console.log("9")

    createdArtist.user = createdUser;

    await createdUser.save();
    console.log("10")

    return createdUser;
=======
  async createUser(email: string, rawPassword: string, artist: ArtistInfo) {
    const hashedPwd = await this.generateHash(rawPassword)
    
    const createdArtist = new Artist()
    createdArtist.artistic_name = artist.artistic_name
    createdArtist.birthday = artist.birthday
    createdArtist.cpf = artist.cpf
    createdArtist.expedition_department = artist.expedition_department
    createdArtist.gender = artist.gender
    createdArtist.is_trans = artist.is_trans
    createdArtist.name = artist.name
    createdArtist.race = artist.race
    createdArtist.rg = artist.rg
=======
      await this.save(createdIdiom);
      return createdIdiom;
    });
>>>>>>> 6a342ca (🚧 WIP: Problems with typescript and Promises)

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
    //TODO Remove Promise from certificates
    createdArea.certificate = certicates ?? [];

    const createdTech = new Technical();
    createdTech.formation = artist.technical.formation;
    createdTech.is_affiliated = artist.technical.is_affiliated;
    createdTech.is_ceac = artist.technical.is_ceac;
    createdTech.is_cnpj = artist.technical.is_cnpj;
    createdTech.is_drt = artist.technical.is_drt;
    createdTech.want_be_affiliated = artist.technical.want_be_affiliated;
    //TODO Remove Promise from certificates
    createdTech.idiom = Idioms

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

<<<<<<< HEAD
    return createdUser
>>>>>>> 5e26fac (🚧 WIP: Create User)
=======
    return createdUser;
>>>>>>> 6a342ca (🚧 WIP: Problems with typescript and Promises)
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
