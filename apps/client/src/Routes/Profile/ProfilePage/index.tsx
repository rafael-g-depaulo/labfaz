import React, { FC } from 'react'

import Display from './Display'

export const ProfilePage: FC = () => {

  const userInfo = {
    email: 'email@email.com',
    curriculum: 'meu curriculo',
    artist: {
      name: 'Icaro',
      show_name: 'Icaro',
      technical: {
        areas: [{
          name: 'AUDIOVISUAL',
          started_year: '2010',
          describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
          technical_formation: 'TÉCNICO',
          certificate: [{name: 'NR 05 – Comissão Interna de Prevenção de Acidentes'}, {name: 'NR 12 – Segurança no Trabalho em Máquinas e Equipamentos'}, {name: 'NR 35 – Trabalho em Altura'}]
        }],
        idiom: [{ name: 'INGLÊS' }, { name: 'ESPANHOL' }, {name: 'ITALIANO'}, {name: 'OUTRO IDIOMA'}],
        is_drt: true,
        is_ceac: true,
        is_cnpj: true,
        name_enterprise: 'Lorem Ipsum LTDA',
        cnpj_type: 'PEQUENA EMPRESA',
        formation: 'Ensino Médio completo'
      },
      address: {
        city: 'Formosa',
        state: 'Entorno DF'
      },
      contact: {
        facebook: 'icaro facebook',
        twitter: 'icaro twitter',
        tiktok: 'icaro tiktok',
        instagram: 'icaro instagram',
        youtube: 'icaro youtube',
        linkedin: 'icaro linkedin'
      }
    }
  }

  return <Display data={userInfo} />
}

export default ProfilePage
