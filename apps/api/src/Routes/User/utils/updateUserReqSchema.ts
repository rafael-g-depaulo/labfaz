import * as yup from "yup";
import { Race, ShowName } from "Entities/Artist";
import { Residency } from "Entities/Address";
import { Formation } from "Entities/Technical";
import { TechFormation } from "Entities/Area";
import { userArtistSchema, userContactSchema } from "./userReqSchema"

export const userUpdateTechnicalSchema = yup.object().required().shape({
  formation: yup
    .mixed<Formation>()
    .oneOf(Object.values(Formation)),
  is_drt: yup.boolean(),
  is_ceac: yup.boolean(),
  is_cnpj: yup.boolean(),
  areas: yup
    .array()
    .ensure()
    .of(
      yup.object({
        technical_formation: yup
          .mixed<TechFormation>()
          .oneOf(Object.values(TechFormation)),
        name: yup.string(),
        describe: yup.string(),
        started_year: yup.string(),
        curriculum: yup
          .array()
          .ensure()
          .of(
            yup.object({
              url: yup.string().url(),
            })
          ),
        certificate: yup
          .array()
          .ensure()
          .of(
            yup.object({
              name: yup.string(),
            })
          ),
      })
    ),
  idiom: yup
    .array()
    .ensure()
    .of(
      yup.object({
        name: yup.string(),
      })
    ),
})

export const addressSUpdateSchema = yup.object().shape({
  city: yup.string(),
  cep: yup.string(),
  neighbourhood: yup.string(),
  number: yup.number().integer().positive().min(1),
  complement: yup.string(),
  residency: yup
    .mixed<Residency>()
    .oneOf(Object.values(Residency)),
})

export const userUpdateArtistSchema = yup.object().shape({
  name: yup.string(),
  social_name: yup.string(),
  artistic_name: yup.string(),
  show_name: yup.mixed<ShowName>().oneOf(Object.values(ShowName)),
  gender: yup.string(),
  cpf: yup
    .string()
    .matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/),
  birthday: yup.date(),
  rg: yup.string(),
  expedition_department: yup.string(),
  is_trans: yup.boolean(),
  race: yup.mixed<Race>().oneOf(Object.values(Race)),
  address: addressSUpdateSchema,
  contact: userContactSchema,
  technical: userUpdateTechnicalSchema,
})

export const userUpdateSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6),
  artist: userUpdateArtistSchema,
});


export interface UpdateInfo extends yup.Asserts<typeof userUpdateSchema> {}

export interface ArtistUpddateInfo extends yup.Asserts<typeof userArtistSchema> {}

export default userUpdateSchema;