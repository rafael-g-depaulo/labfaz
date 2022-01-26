import { Asserts, object } from "yup"

import { email, id, role, profilePictureUrl, formation, is_drt, drt, is_ceac, ceac, is_cnpj, cnpj, cnpj_type, profession, name_enterprise, areas, idiom, city, cep, neighbourhood, house_number, complement, residency, state, whatsapp, twitter, facebook, instagram, linkedin, tiktok, youtube, name, social_name, artistic_name, show_name, gender, cpf, birthday, rg, expedition_department, gender_specific, sexual_orientation, race } from "./schemaFields"

// user technical information
export interface SerializedTechnical extends Asserts<typeof technicalSchema> {}
const technicalSchema = object({
  formation,
  is_drt,
  drt,
  is_ceac,
  ceac,
  is_cnpj,
  cnpj,
  cnpj_type,
  profession,
  name_enterprise,
  areas,
  idiom,
})

// user address
export interface SerializedAddress extends Asserts<typeof addressSchema> {}
export const addressSchema = object({
  city,
  cep,
  neighbourhood,
  number: house_number,
  complement,
  residency,
  state,
})

// user contact
export interface SerializedContact extends Asserts<typeof contactSchema> {}
export const contactSchema = object({
  whatsapp,
  twitter,
  facebook,
  instagram,
  linkedin,
  tiktok,
  youtube,
})

// user personal info
export interface SerializedArtist extends Asserts<typeof artistSchema> {}
export const artistSchema = object({
  name,
  social_name,
  artistic_name,
  show_name,
  gender,
  cpf,
  birthday,
  rg,
  expedition_department,
  gender_specific,
  sexual_orientation,
  race,
  address: addressSchema.required(),
  contact: contactSchema.required(),
  technical: technicalSchema.required(),
})

// serialized user
export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = object({
  id,
  email,
  role,
  profilePictureUrl,
  artist: artistSchema.required(),
})
