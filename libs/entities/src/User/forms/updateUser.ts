import { Asserts, object } from "yup"
import * as Field from "../schemaFields"

import { curriculumFile, email, password, passwordConfirmation, profilePictureFile } from "../schemaFields"
import { SerializedUser } from "../serializedSchema"

export interface UpdateUserArtist extends Asserts<typeof updateUserArtistSchema> {}
export const updateUserArtistSchema =  object({
  name: Field.name,
  social_name: Field.social_name,
  artistic_name: Field.artistic_name,
  show_name: Field.show_name,
  gender: Field.gender,
  cpf: Field.cpf,
  birthday: Field.birthday,
  rg: Field.rg,
  expedition_department: Field.expedition_department,
  gender_specific: Field.gender_specific,
  sexual_orientation: Field.sexual_orientation,
  race: Field.race,
  address: object({
    city: Field.city,
    cep: Field.cep,
    neighbourhood: Field.neighbourhood,
    number: Field.house_number,
    complement: Field.complement,
    residency: Field.residency,
    state: Field.state,
  }),
  contact: object({
    whatsapp: Field.whatsapp,
    twitter: Field.twitter,
    facebook: Field.facebook,
    instagram: Field.instagram,
    linkedin: Field.linkedin,
    tiktok: Field.tiktok,
    youtube: Field.youtube,
  }),
  technical: object({
    formation: Field.formation,
    is_drt: Field.is_drt,
    drt: Field.drt,
    is_ceac: Field.is_ceac,
    ceac: Field.ceac,
    is_cnpj: Field.is_cnpj,
    cnpj: Field.cnpj,
    cnpj_type: Field.cnpj_type,
    profession: Field.profession,
    name_enterprise: Field.name_enterprise,
    areas: Field.areas,
    idiom: Field.idiom,
  }),
})

export interface UpdateUser extends Asserts<typeof updateUserSchema> {}
export const updateUserSchema = object({
  email,
  password,
  oldpassword: password,
  passwordConfirmation,
  profilePicture: profilePictureFile,
  curriculum: curriculumFile,
  artist: updateUserArtistSchema,
})

export interface UpdateUserReturn extends SerializedUser {}
