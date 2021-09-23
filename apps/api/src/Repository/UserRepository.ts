import { EntityRepository, getRepository, Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

import User from "Entities/User";
import authConfig from "Config/auth";
import { ArtistInfo } from "Routes/User/utils/userReqSchema";
import { ArtistUpdateInfo } from "Routes/User/utils/updateUserReqSchema";
import Artist, { ShowName } from "Entities/Artist";

import { UploadedFile } from "Utils/awsConfig";
import Address from "Entities/Address";
import Certificate from "Entities/Certificate";
import Contact from "Entities/Contact";
import Technical, { Formation } from "Entities/Technical";
import Area, { TechFormation } from "Entities/Area";
import Idiom from "Entities/Idiom";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string) {
    return this.findOne({
      where: { email },
      relations: ["artist"],
    });
  }

  findByIdWithAll(id: string) {
    return this.findOne({
      where: { id },
      relations: [
        "artist",
        "artist.contact",
        "artist.address",
        "artist.technical",
        "artist.technical.area",
        "artist.technical.idiom",
        "artist.technical.area.certificate",
      ],
    });
  }

  async createUser(
    email: string,
    rawPassword: string,
    artist: ArtistInfo,
    curriculum: UploadedFile | undefined,
    profilePicture: UploadedFile
  ) {
    const hashedPwd = await this.generateHash(rawPassword);

    //criando varios idiomas do usuário para cada string no array
    const Idioms = artist.technical.idiom?.map(async (idiom) => {
      const createdIdiom = new Idiom();
      createdIdiom.name = idiom.name;
      const idiomRepo = getRepository(Idiom);
      return idiomRepo.save(createdIdiom);
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
        const certRepo = getRepository(Certificate);
        return certRepo.save(createdCertificate);
      }
    );

    //pegando o erro quando for salvar o certificado
    createdArea.certificate = await Promise.all(certicates ?? []);

    //mesmo caso com areas
    const areaRepo = getRepository(Area);
    await areaRepo.save(createdArea);

    //criamos uma ficha tecnica ela que possui idiomas e areas
    const createdTech = new Technical();
    createdTech.formation = artist.technical.formation ?? Formation.NO;
    createdTech.profession = artist.technical.profession
    createdTech.is_ceac = artist.technical.is_ceac;
    if (artist.technical.is_ceac && artist.technical.ceac) {
      createdTech.ceac = artist.technical.ceac;
    }
    createdTech.is_cnpj = artist.technical.is_cnpj;
    if (artist.technical.is_cnpj && artist.technical.cnpj) {
      createdTech.cnpj = artist.technical.cnpj;
      if (artist.technical.name_enterprise) {
        createdTech.name_enterprise = artist.technical.name_enterprise;
      }
      if (artist.technical.cnpj_type) {
        createdTech.cnpj_type = artist.technical.cnpj_type;
      }
    }
    createdTech.is_drt = artist.technical.is_drt;
    if (createdTech.is_drt && artist.technical.drt) {
      createdTech.drt = artist.technical.drt;
    }

    //criamos associamos a ficha tecnicas seus idiomas
    createdTech.idiom = await Promise.all(Idioms ?? []);

    //mesmo para area neste caso só temos uma area
    createdTech.area = [createdArea];
    const techRepo = getRepository(Technical);
    await techRepo.save(createdTech);

    //contato é um a um com artista então todo artista tem um contato e todo contato tem um artista
    const createdContact = new Contact();
    createdContact.facebook = artist.contact.facebook ?? null;
    createdContact.instagram = artist.contact.instagram ?? null;
    createdContact.linkedin = artist.contact.linkedin ?? null;
    createdContact.tiktok = artist.contact.tiktok ?? null;
    createdContact.twitter = artist.contact.twitter ?? null;
    createdContact.whatsapp = artist.contact.whatsapp ?? null;
    createdContact.youtube = artist.contact.youtube ?? null;

    const contactRepo = getRepository(Contact);
    await contactRepo.save(createdContact);

    //mesmo caso do contato aplica para endereço um a um artista <=> endereço
    const createdAddress = new Address();
    createdAddress.cep = artist.address.cep;
    createdAddress.city = artist.address.city;
    createdAddress.complement = artist.address.complement;
    createdAddress.neighbourhood = artist.address.neighbourhood;
    createdAddress.number = artist.address.number;
    createdAddress.residency = artist.address.residency;
    if (artist.address.state) {
      createdAddress.state = artist.address.state;
    }

    const addrRepo = getRepository(Address);
    await addrRepo.save(createdAddress);

    //finalmente criamos o artista ela um tipo de instância do usuário da plataforma e nela tem uma
    // relação de um para um com o usuário, ou seja para cada usuário possui um artista
    const createdArtist = new Artist();
    createdArtist.artistic_name = artist.artistic_name;
    createdArtist.birthday = artist.birthday;
    createdArtist.cpf = artist.cpf;
    createdArtist.expedition_department = artist.expedition_department;
    createdArtist.gender = artist.gender;
    createdArtist.gender_specifics = artist.gender_specific;
    createdArtist.sexual_orientation = artist.sexual_orientation;
    createdArtist.name = artist.name;
    createdArtist.show_name = artist.show_name ?? ShowName.NAME;
    createdArtist.social_name = artist.social_name;
    createdArtist.artistic_name = artist.artistic_name;
    createdArtist.race = artist.race;
    createdArtist.rg = artist.rg;
    createdArtist.photo_url = profilePicture.url;
    if (curriculum)
      createdArtist.curriculum = curriculum.url;

    createdArtist.address = createdAddress;
    createdArtist.contact = createdContact;
    createdArtist.technical = createdTech;
    const artistRepo = getRepository(Artist);
    await artistRepo.save(createdArtist);

    //colocamos as associações um para um do artista
    createdAddress.artist = createdArtist;
    createdContact.artist = createdArtist;
    createdTech.artist = createdArtist;

    //criamos um usuário e associamos ele com artista
    const createdUser = new User();
    createdUser.email = email;
    createdUser.password = hashedPwd;
    createdUser.active = false;
    createdUser.isVerified = false;
    createdUser.banned = false;
    createdUser.artist = createdArtist;

    createdArtist.user = createdUser;

    return createdUser.save().then(() => createdUser);
  }

  async updateUser(
    user: User,
    artist?: ArtistUpdateInfo,
    password?: string,
    curriculum?: UploadedFile,
    profilePicture?: UploadedFile
  ) {
    if (password) {
      user.password = await this.generateHash(password);
    }

    if (artist) {
      if (artist.address) {
        if (artist.address.cep) {
          user.artist.address.cep = artist.address.cep;
        }
        if (artist.address.city) {
          user.artist.address.city = artist.address.city;
        }
        if (artist.address.complement) {
          user.artist.address.complement = artist.address.complement;
        }
        if (artist.address.neighbourhood) {
          user.artist.address.neighbourhood = artist.address.neighbourhood;
        }
        if (artist.address.number) {
          user.artist.address.number = artist.address.number;
        }
        if (artist.address.residency) {
          user.artist.address.residency = artist.address.residency;
        }
        if (artist.address.state) {
          user.artist.address.state = artist.address.state;
        }
      }

      if (artist.contact) {
        if (artist.contact.facebook || artist.contact.facebook === "") {
          user.artist.contact.facebook = artist.contact.facebook;
        }
        if (artist.contact.instagram || artist.contact.instagram === "") {
          user.artist.contact.instagram = artist.contact.instagram;
        }
        if (artist.contact.linkedin || artist.contact.linkedin === "") {
          user.artist.contact.linkedin = artist.contact.linkedin;
        }
        if (artist.contact.tiktok || artist.contact.tiktok === "") {
          user.artist.contact.tiktok = artist.contact.tiktok;
        }
        if (artist.contact.twitter || artist.contact.twitter === "") {
          user.artist.contact.twitter = artist.contact.twitter;
        }
        if (artist.contact.whatsapp || artist.contact.whatsapp === "") {
          user.artist.contact.whatsapp = artist.contact.whatsapp;
        }
        if (artist.contact.youtube || artist.contact.youtube === "") {
          user.artist.contact.youtube = artist.contact.youtube;
        }
      }

      if (artist.technical) {
        if (artist.technical.areas && artist.technical.areas.length == 1) {
          if (
            artist.technical.areas[0].certificate &&
            artist.technical.areas[0].certificate.length >= 0
          ) {
            //Não ta salvando aqui estamo acreditando irá salvar por cascade
            user.artist.technical.area[0].certificate = artist.technical.areas[0].certificate.map(
              (certificate) => {
                let newCertificate = new Certificate();
                if (certificate.name) {
                  newCertificate.name = certificate.name;
                }
                newCertificate.area = user.artist.technical.area[0];
                return newCertificate;
              }
            );
          }
          if (artist.technical.areas[0].describe) {
            user.artist.technical.area[0].describe =
              artist.technical.areas[0].describe;
          }
          if (artist.technical.areas[0].name) {
            user.artist.technical.area[0].name = artist.technical.areas[0].name;
          }
          if (artist.technical.areas[0].started_year) {
            user.artist.technical.area[0].started_year =
              artist.technical.areas[0].started_year;
          }
          if (artist.technical.areas[0].technical_formation) {
            user.artist.technical.area[0].technical_formation =
              artist.technical.areas[0].technical_formation;
          }
        }

        if (artist.technical.idiom && artist.technical.idiom.length >= 0) {
          user.artist.technical.idiom = artist.technical.idiom.map((idiom) => {
            let newIdiom = new Idiom();
            if (idiom.name) {
              newIdiom.name = idiom.name;
            }
            newIdiom.technical = user.artist.technical;
            return newIdiom;
          });
        }

        if (artist.technical.formation) {
          user.artist.technical.formation = artist.technical.formation;
        }

        if (artist.technical.profession || artist.technical.profession === "") {
          user.artist.technical.profession = artist.technical.profession;
        }

        if (artist.technical.is_ceac !== undefined) {
          user.artist.technical.is_ceac = artist.technical.is_ceac;
        }
        if (artist.technical.ceac || artist.technical.ceac === "") {
          user.artist.technical.ceac = artist.technical.ceac;
        }

        if (artist.technical.is_cnpj !== undefined) {

          user.artist.technical.is_cnpj = artist.technical.is_cnpj;
        }
        
        if (artist.technical.cnpj || artist.technical.cnpj === "") {
          user.artist.technical.cnpj = artist.technical.cnpj;
        }
        if (artist.technical.name_enterprise) {
          user.artist.technical.name_enterprise =
            artist.technical.name_enterprise;
        }

        if (artist.technical.cnpj_type) {
          user.artist.technical.cnpj_type = artist.technical.cnpj_type;
        }

        if (artist.technical.is_drt !== undefined) {
          user.artist.technical.is_drt = artist.technical.is_drt;
          if (artist.technical.drt || artist.technical.drt === "") {
            user.artist.technical.drt = artist.technical.drt;
          }
        }
      }

      if (artist.artistic_name || artist.artistic_name === "") {
        user.artist.artistic_name = artist.artistic_name;
      }

      if (artist.birthday) {
        user.artist.birthday = artist.birthday;
      }

      if (artist.cpf) {
        user.artist.cpf = artist.cpf;
      }

      if (artist.expedition_department) {
        user.artist.expedition_department = artist.expedition_department;
      }

      if (artist.gender) {
        user.artist.gender = artist.gender;
      }

      if (artist.gender_specific) {
        user.artist.gender_specifics = artist.gender_specific;
      }

      if(artist.sexual_orientation){
        user.artist.sexual_orientation = artist.sexual_orientation;
      }

      if (artist.name) {
        user.artist.name = artist.name;
      }

      if (artist.race) {
        user.artist.race = artist.race;
      }

      if (artist.rg) {
        user.artist.rg = artist.rg;
      }

      if (artist.show_name) {
        user.artist.show_name = artist.show_name;
      }

      if (artist.social_name || artist.social_name === "") {
        user.artist.social_name = artist.social_name;
      }
    }

    if (curriculum) {
      user.artist.curriculum = curriculum.url;
    }

    if (profilePicture) {
      user.artist.photo_url = profilePicture.url;
    }

    return user.save().then(() => user);
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
