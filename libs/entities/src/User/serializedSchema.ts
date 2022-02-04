import { Asserts, object } from "yup"

import { email, id, role, profilePictureUrl, formation, is_drt, drt, is_ceac, ceac, is_cnpj, cnpj, cnpj_type, profession, name_enterprise, areas, idiom, city, cep, neighbourhood, house_number, complement, residency, state, whatsapp, twitter, facebook, instagram, linkedin, tiktok, youtube, name, social_name, artistic_name, show_name, gender, cpf, birthday, rg, expedition_department, gender_specific, sexual_orientation, race } from "./schemaFields"

// user personal info
export interface SerializedArtist extends Asserts<typeof artistSchema> {}
export const artistSchema = object({
  name: name.required(),
  social_name,
  artistic_name,
  show_name,
  gender,
  cpf: cpf.required(),
  birthday,
  rg: rg.required(),
  expedition_department: expedition_department.required(),
  gender_specific,
  sexual_orientation,
  race,
  address: object({
    city: city.required(),
    cep: cep.required(),
    neighbourhood,
    number: house_number,
    complement,
    residency: residency.required(),
    state: state.required(),
  }).required(),
  contact: object({
    whatsapp,
    twitter,
    facebook,
    instagram,
    linkedin,
    tiktok,
    youtube,
  }).required(),
  technical: object({
    formation: formation.required(),
    is_drt: is_drt.required(),
    drt,
    is_ceac: is_ceac.required(),
    ceac,
    is_cnpj: is_cnpj.required(),
    cnpj,
    cnpj_type,
    profession,
    name_enterprise,
    areas,
    idiom,
  })
})

// serialized user
export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = object({
  id: id.required(),
  email: email.required(),
  role: role.required(),
  profilePictureUrl,
  artist: artistSchema.required(),
})
