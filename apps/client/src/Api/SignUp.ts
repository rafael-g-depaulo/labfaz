import { api, SuccessObject } from "Api"

const bodyFormParse = (values: any) => {

  const formData = new FormData()

  formData.append('email', values.email)
  formData.append('password', values.password)

  formData.append('profilePicture', values.profilePicture)
  formData.append('curriculum', values.curriculum)

  formData.append('artist[name]', values.artist.name)
  formData.append('artist[show_name]', values.artist.show_name)
  formData.append('artist[social_name]', values.artist.social_name)
  formData.append('artist[artistic_name]', values.artist.artistic_name)

  formData.append('artist[gender]', values.artist.gender)
  formData.append('artist[cpf]', values.artist.cpf)
  formData.append('artist[birthday]', values.artist.birthday)
  formData.append('artist[rg]', values.artist.rg)
  formData.append('artist[expedition_department]', values.artist.expedition_department)

  formData.append('artist[is_trans]', values.artist.is_trans)
  formData.append('artist[sexual_orientation]', values.sexual_orientation)
  formData.append('artist[race]', values.artist.race)

  formData.append('artist[address][city]', values.address?.city)
  formData.append('artist[address][cep]', values.address?.cep)
  formData.append('artist[address][neighbourhood]', values.address?.neighbourhood)
  formData.append('artist[address][number]', values.address?.number)
  formData.append('artist[address][complement]', values.address?.complement)
  formData.append('artist[address][residency]', values.address?.residency)
  formData.append('artist[address][state]', values.address?.state)

  formData.append('artist[technical][is_drt]', values.technical?.is_drt)
  formData.append('artist[technical][drt]', '123456')
  
  formData.append('artist[technical][is_ceac]', values.technical?.is_ceac)
  formData.append('artist[technical][ceac]', '123456')

  formData.append('artist[technical][formation]', values.technical?.formation)
  formData.append('artist[technical][profession]', '123456')
  
  formData.append('artist[technical][is_cnpj]', values.technical?.is_cnpj)
  formData.append('artist[technical][cnpj]', '123456')
  formData.append('artist[technical][cnpj_type]', '123456')
  formData.append('artist[technical][name_enterprise]', '123456')


  formData.append('artist[technical][areas][0][name]', values.technical?.areas.name)
  formData.append('artist[technical][areas][0][technical_formation]', values.technical?.areas.technical_formation)
  formData.append('artist[technical][areas][0][describe]', values.technical?.areas.describe)  
  formData.append('artist[technical][areas][0][started_year]', values.technical?.areas.started_year)

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

  // console.log(formParsed.get(''))

  // console.log(formParsed.get('profilePicture'))

  // for (var pair of formParsed.entries()) {
  //   console.log(pair[0]+ ', ' + pair[1]); 
  // }

  // return api.post<SuccessObject>('/user/create', formParsed, {
  //   headers
  // }).then(res => {
  //   console.log(res)

  //   return res
  // }).catch(err => {
  //   console.log(err)  

  //   throw err
  // })

}
