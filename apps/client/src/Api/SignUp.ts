import { api, SuccessObject } from "Api"

const toNumString = (numStr: string) => isNaN(parseInt(numStr)) ? "" : `${parseInt(numStr)}`

const bodyFormParse = (values: any) => {

  const formData = new FormData()

  formData.append('email', values.email)
  formData.append('password', values.password)

  formData.append('profilePicture', values.profilePicture)
  formData.append('curriculum', values.curriculum)

  formData.append('artist[name]', values.artist?.name)
  formData.append('artist[show_name]', values.artist?.show_name)
  formData.append('artist[social_name]', values.artist?.social_name)
  formData.append('artist[artistic_name]', values.artist?.artistic_name)

  formData.append('artist[gender]', values.artist?.gender)
  formData.append('artist[gender_specific]', values.artist?.gender_specific)
  if (values.artist.cpf !== "") formData.append('artist[cpf]', values.artist.cpf)
  formData.append('artist[birthday]', values.artist?.birthday)
  formData.append('artist[rg]', values.artist?.rg)
  formData.append('artist[expedition_department]', values.artist?.expedition_department)

  formData.append('artist[is_trans]', values.artist.is_trans)
  formData.append('artist[sexual_orientation]', values.artist?.sexual_orientation)
  formData.append('artist[race]', values.artist.race)

  formData.append('artist[address][city]', values.artist?.address?.city)
  formData.append('artist[address][cep]', values.artist?.address?.cep)
  formData.append('artist[address][neighbourhood]', values.artist?.address?.neighbourhood)
  if (values.artist?.address?.number) formData.append('artist[address][number]', toNumString(values.artist?.address?.number))
  formData.append('artist[address][complement]', values.artist?.address?.complement)
  formData.append('artist[address][residency]', values.artist?.address?.residency)
  formData.append('artist[address][state]', values.artist?.address?.state)

  formData.append('artist[technical][is_drt]', values.artist?.technical?.is_drt )
  formData.append('artist[technical][drt]', values.artist?.technical?.drt)
  
  formData.append('artist[technical][is_ceac]', values.artist?.technical?.is_ceac)
  formData.append('artist[technical][ceac]', values.artist?.technical?.ceac)

  formData.append('artist[technical][formation]', values.artist?.technical?.formation)
  formData.append('artist[technical][profession]', values.artist?.technical?.profession)
  
  formData.append('artist[technical][is_cnpj]', `${values.artist?.technical?.is_cnpj}`)
  formData.append('artist[technical][cnpj]', values.artist?.technical?.cnpj)
  formData.append('artist[technical][cnpj_type]', values.artist?.technical?.cnpj_type)
  // formData.append('artist[technical][name_enterprise]', values.artist?.technical?.name_enterprise)


  formData.append('artist[technical][areas][0][name]', values.artist?.technical?.areas.name)
  formData.append('artist[technical][areas][0][technical_formation]', values.artist?.technical?.areas.technical_formation)
  formData.append('artist[technical][areas][0][describe]', values.artist?.technical?.areas.describe)  
  formData.append('artist[technical][areas][0][started_year]', values.artist?.technical?.areas.started_year)

  if (values.artist?.technical?.areas?.certificate) {
    values.artist.technical.areas.certificate.forEach((certificate: string, index: number) => {
      formData.append(`artist[technical][areas][0][certificate][${index}][name]`, certificate)
    })
  }

  if (values.artist?.technical?.idiom) {
    values.artist.technical.idiom.forEach((name: string, index: number) => {
      formData.append(`artist[technical][idiom][${index}][name]`, name)
    })
  }

  formData.append('artist[contact][whatsapp]', values.artist.contact?.whatsapp)
  formData.append('artist[contact][facebook]', values.artist.contact?.facebook)
  formData.append('artist[contact][twitter]', values.artist.contact?.twitter)
  formData.append('artist[contact][tiktok]', values.artist.contact?.tiktok)
  formData.append('artist[contact][instagram]', values.artist.contact?.instagram)
  formData.append('artist[contact][youtube]', values.artist.contact?.youtube)
  formData.append('artist[contact][linkedin]', values.artist.contact?.linkedin)


  return formData
}

const headers = {
  "Content-Type": "multipart/form-data"
}

export const SignUp = async (values: any) => {

  const formParsed = bodyFormParse(values)

  // for (var pair of formParsed.entries()) {
  //   console.log(pair[0]+ ', ' + pair[1]); 
  // }

  return api.post<SuccessObject>('/user/create', formParsed, {
    headers
  })
  .then(res => {
    return res
  }).catch(err => Promise.reject(err.response.data))

}
