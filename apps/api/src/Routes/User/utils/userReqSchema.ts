import * as yup from "yup";
import { Race, ShowName } from "Entities/Artist";
import { Residency } from "Entities/Address";
import { Formation } from "Entities/Technical";
import { TechFormation } from "Entities/Area";

export const userTechnicalSchema = yup.object().required().shape({
  formation: yup
    .mixed<Formation>()
    .required()
    .oneOf(Object.values(Formation)),
  is_drt: yup.boolean().required().default(false),
  is_ceac: yup.boolean().required().default(false),
  is_cnpj: yup.boolean().required().default(false),
  areas: yup
    .array()
    .ensure()
    .of(
      yup.object({
        technical_formation: yup
          .mixed<TechFormation>()
          .required()
          .oneOf(Object.values(TechFormation)),
        name: yup.string().required(),
        describe: yup.string().required(),
        started_year: yup.string().required(),
        curriculum: yup
          .array()
          .ensure()
          .of(
            yup.object({
              url: yup.string().required().url(),
            })
          ),
        certificate: yup
          .array()
          .ensure()
          .of(
            yup.object({
              name: yup.string().required(),
            })
          ),
      })
    ),
  idiom: yup
    .array()
    .ensure()
    .of(
      yup.object({
        name: yup.string().required(),
      })
    ),
})

export const addressSchema = yup.object().required().shape({
  city: yup.string().required(),
  cep: yup.string().required(),
  neighbourhood: yup.string().required(),
  number: yup.number().integer().positive().required().min(1),
  complement: yup.string(),
  residency: yup
    .mixed<Residency>()
    .required()
    .oneOf(Object.values(Residency)),
})

export const userContactSchema = yup.object().required().shape({
  whatsapp: yup.string(),
  twitter: yup.string(),
  facebook: yup.string(),
  instagram: yup.string(),
  linkedin: yup.string(),
  tiktok: yup.string(),
  youtube: yup.string(),
})

export const userArtistSchema = yup.object().required().shape({
  name: yup.string().required(),
  social_name: yup.string(),
  artistic_name: yup.string(),
  show_name: yup.mixed<ShowName>().required().oneOf(Object.values(ShowName)),
  gender: yup.string().required(),
  cpf: yup
    .string()
    .required()
    .matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/),
  birthday: yup.date().required(),
  rg: yup.string().required(),
  expedition_department: yup.string().required(),
  is_trans: yup.boolean().required(),
  race: yup.mixed<Race>().required().oneOf(Object.values(Race)),
  address: addressSchema,
  contact: userContactSchema,
  technical: userTechnicalSchema,
})

export const userSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  artist: userArtistSchema,
});


export interface UserInfo extends yup.Asserts<typeof userSchema> {}

export interface ArtistInfo extends yup.Asserts<typeof userArtistSchema> {}

export default userSchema;
