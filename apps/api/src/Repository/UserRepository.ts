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

  async createUser(
    email: string,
    rawPassword: string,
    artist: ArtistInfo,
    curriculum: UploadedFile,
    profilePicture: UploadedFile
  ) {
    const hashedPwd = await this.generateHash(rawPassword);

    //criando varios idiomas do usuário para cada string no array
    const Idioms = artist.technical.idiom?.map(async (idiom) => {
      const createdIdiom = new Idiom();
      createdIdiom.name = idiom.name;
      return this.save(createdIdiom);
    });

    //Neste caso só temos uma area porém é possível criar varias areas a associar ao technical
    const createdArea = new Area();
    createdArea.name = artist.technical.areas?.[0]?.name ?? "";
    createdArea.started_year = artist.technical.areas?.[0]?.started_year ?? "";
    createdArea.technical_formation =
      artist.technical.areas?.[0]?.technical_formation ?? TechFormation.AUTO;
    createdArea.describe = artist.technical.areas?.[0]?.describe ?? "";

    //criando varios certificados de acordo com area mesmo caso do idioma 
    const certicates = artist.technical.areas?.[0]?.certificate?.map(
      async (certficate) => {
        const createdCertificate = new Certificate();
        createdCertificate.name = certficate.name;
        createdCertificate.area = createdArea;
        return this.save(createdCertificate);
      }
    );
    //pegando o erro quando for salvar o certificado
    try {
      createdArea.certificate = await Promise.all(certicates ?? []);
    } catch (error) {
      console.log(error);
      throw Error("Error creating certificates!!");
    }
    //mesmo caso com areas
    try {
      const areaRepo = getRepository(Area)
      await areaRepo.save(createdArea);
    } catch (error) {
      console.log(error);
      throw Error("Error creating area!!");
    }

    //criamos uma ficha tecnica ela que possui idiomas e areas 
    const createdTech = new Technical();
    createdTech.formation = artist.technical.formation;
    createdTech.is_ceac = artist.technical.is_ceac;
    createdTech.is_cnpj = artist.technical.is_cnpj;
    createdTech.is_drt = artist.technical.is_drt;

    //criamos associamos a ficha tecnicas seus idiomas 
    try {
      createdTech.idiom = await Promise.all(Idioms ?? []);
    } catch (error) {
      console.log(error);
      throw Error("Error creating idiom!!");
    }

    //mesmo para area neste caso só temos uma area
    createdTech.area = [createdArea]


    try {
      const techRepo = getRepository(Technical)
      await techRepo.save(createdTech);
    } catch (error) {
      console.log(error);
      throw Error("Error creating techinical!!");
    }

    //contato é um a um com artista então todo artista tem um contato e todo contato tem um artista
    const createdContact = new Contact();
    createdContact.facebook = artist.contact.facebook ?? null;
    createdContact.instagram = artist.contact.instagram ?? null;
    createdContact.linkedin = artist.contact.linkedin ?? null;
    createdContact.tiktok = artist.contact.tiktok ?? null;
    createdContact.twitter = artist.contact.twitter ?? null;
    createdContact.whatsapp = artist.contact.whatsapp ?? null;
    createdContact.youtube = artist.contact.youtube ?? null;

    try {
      const contactRepo = getRepository(Contact)
      await contactRepo.save(createdContact);
    } catch (error) {
      console.log(error);
      throw Error("Error creating contact !!");
    }

    //mesmo caso do contato aplica para endereço um a um artista <=> endereço
    const createdAddress = new Address();
    createdAddress.cep = artist.address.cep;
    createdAddress.city = artist.address.city;
    createdAddress.complement = artist.address.complement;
    createdAddress.neighbourhood = artist.address.neighbourhood;
    createdAddress.number = artist.address.number;
    createdAddress.residency = artist.address.residency;
    
    try {
      const addrRepo = getRepository(Address)
      await addrRepo.save(createdAddress);
    } catch (error) {
      console.log(error);
      throw Error("Error creating address !!");
    }

    //finalmente criamos o artista ela um tipo de instância do usuário da plataforma e nela tem uma
    // relação de um para um com o usuário, ou seja para cada usuário possui um artista
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


    try {
      const artistRepo = getRepository(Artist)
      await artistRepo.save(createdArtist);
    } catch (error) {
      console.log(error);
      throw Error("Error creating artist !!");
    }

    //colocamos as associações um para um do artista 
    createdAddress.artist = createdArtist;
    createdContact.artist = createdArtist;

    //criamos um usuário e associamos ele com artista 
    const createdUser = new User()
    createdUser.email = email
    createdUser.password = hashedPwd
    createdUser.active = false
    createdUser.isVerified = false
    createdUser.banned = false
    createdUser.artist = createdArtist
    

    createdArtist.user = createdUser;

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
