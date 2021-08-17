import  * as yup from "yup"
import { Race, ShowName } from "Entities/Artist"

export const userSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  artist: yup.object({
    photo_url: yup.string().required().url(),
    name: yup.string().required(),
    social_name: yup.string(),
    artistic_name: yup.string().min(4).max(10),
    gender: yup.string().required(),
    cpf: yup.string().required().matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/),
    birthday: yup.date().required(),
    rg: yup.string().required(),
    expedition_department: yup.string().required(),
    is_trans: yup.boolean().required(),
    race: yup.mixed<Race>().required().oneOf(Object.values(Race)),
    show_name: yup.mixed<ShowName>().required().oneOf(Object.values(ShowName)),
  }),
})

export interface UserInfo extends yup.Asserts<typeof userSchema> {}

export default userSchema
