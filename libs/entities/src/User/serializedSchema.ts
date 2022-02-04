import { Asserts, object } from "yup"

import * as Field from "./schemaFields"

// user personal info
export interface SerializedArtist extends Asserts<typeof artistSchema> {}
export const artistSchema = object({
  name: Field.name.required(),
  social_name: Field.social_name,
  artistic_name: Field.artistic_name,
  show_name: Field.show_name,
  gender: Field.gender,
  cpf: Field.cpf.required(),
  birthday: Field.birthday,
  rg: Field.rg.required(),
  expedition_department: Field.expedition_department.required(),
  gender_specific: Field.gender_specific,
  sexual_orientation: Field.sexual_orientation,
  race: Field.race,
  address: object({
    city: Field.city.required(),
    cep: Field.cep.required(),
    neighbourhood: Field.neighbourhood,
    number: Field.house_number,
    complement: Field.complement,
    residency: Field.residency.required(),
    state: Field.state.required(),
  }).required(),
  contact: object({
    whatsapp: Field.whatsapp,
    twitter: Field.twitter,
    facebook: Field.facebook,
    instagram: Field.instagram,
    linkedin: Field.linkedin,
    tiktok: Field.tiktok,
    youtube: Field.youtube,
  }).required(),
  technical: object({
    formation: Field.formation.required(),
    is_drt: Field.is_drt.required(),
    drt: Field.drt,
    is_ceac: Field.is_ceac.required(),
    ceac: Field.ceac,
    is_cnpj: Field.is_cnpj.required(),
    cnpj: Field.cnpj,
    cnpj_type: Field.cnpj_type,
    profession: Field.profession,
    name_enterprise: Field.name_enterprise,
    areas: Field.areas,
    idiom: Field.idiom,
  })
})

// serialized user
export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = object({
  id: Field.id.required(),
  email: Field.email.required(),
  role: Field.role.required(),
  profilePictureUrl: Field.profilePictureUrl,
  artist: artistSchema.required(),
})
