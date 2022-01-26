import { array, boolean, mixed, object, string, number, date } from "yup"
import { MixedSchema } from "yup/lib/mixed"
import { AnyObject } from "yup/lib/types"

import { Roles } from "@labfaz/permissions"

import { maxProfilePictureSize, maxCurriculumSize } from "./constants"
import { CNPJ, TechFormation, Formation, Residency } from "./enums"
import { GenderSpecific, Race, SexualOrientation, ShowName } from "."

// fields
export const id = string().required().min(10).max(10) //.uuid()
export const email = string().required().email()
export const password = string().required().min(6)
export const role = mixed<Roles>().required().oneOf(Object.values(Roles))
export const passwordConfirmation = string().required().test('passwords-match', 'Senhas não são iguais', function(value) {
  return this.parent.password === value
})

export const profilePictureFile: MixedSchema<File | undefined, AnyObject, File | undefined> = mixed<File>()
  .test("fileSize", "File too Large", (value?: File) => (value?.size ?? 0) <= maxProfilePictureSize)
  .optional()
export const profilePictureUrl = string().optional().url()

export const curriculumFile: MixedSchema<File | undefined, AnyObject, File | undefined> = mixed<File>()
  .test("fileSize", "File too Large", (value?: File) => (value?.size ?? 0) <= maxCurriculumSize)
  .optional()
export const curriculumUrl = string().optional().url()

// technical info
export const formation = mixed<Formation>()
  .oneOf(Object.values(Formation))
export const is_drt = boolean().required()
export const drt = string()
export const is_ceac = boolean().required()
export const ceac = string()
export const is_cnpj = boolean().required()
export const cnpj = string()
export const cnpj_type = mixed<CNPJ>().oneOf(Object.values(CNPJ))
export const name_enterprise = string()
export const profession = string()
export const areas = array()
  .ensure()
  .of(
    object({
      technical_formation: mixed<TechFormation>()
        .oneOf(Object.values(TechFormation)),
      name: string(),
      describe: string(),
      started_year: string(),
      certificate: array()
        .ensure()
        .of(
          object({
            name: string().required(),
          })
        ),
    })
  )
export const idiom = array()
  .ensure()
  .of(
    object({
      name: string().required(),
    })
  )

// addess info
export const city = string().required()
export const cep = string()
export const neighbourhood = string()
export const house_number = number().integer()
export const complement = string()
export const residency = mixed<Residency>()
  .required()
  .oneOf(Object.values(Residency))
export const state = string()

// social media info
export const whatsapp = string()
export const twitter = string()
export const facebook = string()
export const instagram = string()
export const linkedin = string()
export const tiktok = string()
export const youtube = string()

// artist info
export const name = string().required()
export const social_name = string()
export const artistic_name = string()
export const show_name = mixed<ShowName>().required().oneOf(Object.values(ShowName))
export const gender = string().required()
export const cpf = string().matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/)
export const birthday = date().required()
export const rg = string()
export const expedition_department = string()
export const gender_specific = mixed<GenderSpecific>()
  .required()
  .oneOf(Object.values(GenderSpecific))
export const sexual_orientation = mixed<SexualOrientation>()
  .required()
  .oneOf(Object.values(SexualOrientation))
export const race = mixed<Race>()
  .required()
  .oneOf(Object.values(Race))
