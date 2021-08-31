import React, { FC } from 'react'
import { MdEmail } from 'react-icons/md'
import { SiTiktok } from 'react-icons/si'
import { IoMdCloudDownload } from 'react-icons/io'
import { MdContactPhone } from 'react-icons/md'
import { GoGear } from 'react-icons/go'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaCheckCircle,
  FaCheckSquare,
} from 'react-icons/fa'

import {
  Container,
  ProfileContentContainer,
  UserBasicInformation,
  UserTechnicalInformation,
  Content,
  UserPhoto,
  UserName,
  UserLocation,
  SocialMedias,
  NickName,
  ContentHeader,
  ContentTitle,
  ContentText,
  Header,
  UserPhotoContainer,
  UserInformation,
} from './style'

const Mobile: FC = () => {
  return (
    <Container>
      <ProfileContentContainer>
        <Header>
          <UserPhotoContainer>
            <UserPhoto />
          </UserPhotoContainer>
          <GoGear />
        </Header>
        <Content>
          <UserBasicInformation>
            <div className="container">
              <div>
                <NickName>Nickname</NickName>
                <UserName>Name</UserName>
              </div>

              <button className="downloadCurriculum">
                <IoMdCloudDownload />
                CV
              </button>
            </div>
            <div className="container">
              <div>
                <UserLocation>Formosa, Entorno DF</UserLocation>
              </div>

              <MdContactPhone />
            </div>
          </UserBasicInformation>
          <UserTechnicalInformation>
            <ul>
              <li>AUDIOVISUAL</li>
              <li>EXPERIENCIA: 7 ANOS</li>
              <li>ENGENHARIA DE SOM</li>
              <li>ESPANHOL</li>
              <li>MEI</li>
              <li>FORMACAO TECNICA</li>
            </ul>
          </UserTechnicalInformation>
          <UserInformation>
            <div className="Header">
              <a href="#Sobre">
                Sobre
                {/* <hr /> */}
              </a>
              <a href="#Formacao">
                Formação
                {/* <hr /> */}
              </a>
              <a href="#Certificacoes">
                Certificações
                {/* <hr /> */}
              </a>
              <a href="#CNPJ">
                CNPJ
                {/* <hr /> */}
              </a>
              <a href="#Contato">Contato</a>
            </div>

            <div className="profileInformation" id="Sobre">
              <ContentTitle level={1}>Sobre</ContentTitle>

              <div>
                <ContentText>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus.
                </ContentText>
              </div>
            </div>

            <div className="profileInformation" id="Formacao">
              <ContentTitle level={1}>Formação</ContentTitle>

              <div>
                <span>
                  <FaCheckCircle />
                  Ensino Médio em curso técnico profissionalizante
                </span>
                <ul>
                  <li>
                    <img alt="" /> INGLES
                  </li>
                  <li>
                    <img alt="" /> ESPANHOL
                  </li>
                </ul>
              </div>
            </div>

            <div className="profileInformation" id="Certificacoes">
              <ContentTitle level={1}>Certificações</ContentTitle>

              <div>
                <span>
                  <FaCheckSquare />
                  NR 05 – Comissão Interna de Prevenção de Acidentes
                </span>
                <span>
                  <FaCheckSquare />
                  NR 12 – Segurança no Trabalho em Máquinas e Equipamentos
                </span>
                <span>
                  <FaCheckSquare />
                  NR 35 – Trabalho em Altura
                </span>
                <ul>
                  <li>CEAC</li>
                  <li>DRT</li>
                </ul>
              </div>
            </div>

            <div className="profileInformation" id="CNPJ">
              <ContentTitle level={1}>CNPJ</ContentTitle>

              <div>
                <span>Lorem Ipsum LTDA - Servicos Gerais</span>
                <ul>
                  <li>PEQUENA EMPRESA</li>
                </ul>
              </div>
            </div>

            <div className="profileInformation" id="Contato">
              <ContentTitle level={1}>Contato</ContentTitle>

              <div className="socialContainer">
                <div className="socialContacts">
                  <span>
                    <MdEmail />
                    email@email.com
                  </span>
                  <span>
                    <FaFacebookSquare />
                    fb.nickname
                  </span>
                  <span>
                    <FaInstagramSquare />
                    insta.nickname
                  </span>
                  <span>
                    <FaTwitterSquare />
                    twitter.nickname
                  </span>
                  <span>
                    <SiTiktok />
                    tiktok.nickname
                  </span>
                  <span>
                    <FaYoutubeSquare />
                    yt.nickname
                  </span>
                  <span>
                    <FaLinkedin />
                    linkedin.nickname
                  </span>
                </div>
              </div>
            </div>
          </UserInformation>
        </Content>
      </ProfileContentContainer>
    </Container>
  )
}

export default Mobile
