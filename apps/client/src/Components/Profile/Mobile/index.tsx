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

interface MobileProps {
  data: object
}

const currentYear = new Date().getFullYear()

const Mobile: FC<MobileProps> = ({ data }) => {
  return (
    <Container>
      <ProfileContentContainer>
        <Header>
          <UserPhotoContainer>
            <UserPhoto>
              <img src="" alt="user photo" />
            </UserPhoto>
          </UserPhotoContainer>
          <GoGear />
        </Header>
        <Content>
          <UserBasicInformation>
            <div className="container">
              <div>
                <NickName>{data.artist.show_name}</NickName>
                <UserName>{data.artist.name}</UserName>
              </div>

              {data.curriculum && (
                <button className="downloadCurriculum">
                  <IoMdCloudDownload />
                  CV
                </button>
              )}
            </div>
            <div className="container">
              <div>
                <UserLocation>
                  {data.artist.address.city}, {data.artist.address.state}
                </UserLocation>
              </div>

              <MdContactPhone />
            </div>
          </UserBasicInformation>
          <UserTechnicalInformation>
            <ul>
              <li>{data.artist.technical.areas[0].name}</li>
              <li>
                EXPERIENCIA:
                {currentYear - data.artist.technical.areas[0].started_year} ANOS
              </li>
              <li>ENGENHARIA DE SOM</li>
              <li>{data.artist.technical.cnpj_type}</li>
              <li>FORMACAO TECNICA</li>
            </ul>
          </UserTechnicalInformation>
          <UserInformation>
            <div className="Header">
              <a href="#Sobre">Sobre</a>
              <a href="#Formacao">Formação</a>
              <a href="#Certificacoes">Certificações</a>

              <a href="#Contato">Contato</a>
            </div>

            <div className="profileInformation" id="Sobre">
              <ContentTitle level={1}>Sobre</ContentTitle>

              <div>
                <ContentText>
                  {data.artist.technical.areas[0].describe}
                </ContentText>
              </div>
            </div>

            <div className="profileInformation" id="Formacao">
              <ContentTitle level={1}>Formação</ContentTitle>

              <div>
                <span>
                  <FaCheckCircle />
                  {data.artist.technical.formation}
                </span>
                <ul>
                  {data.artist.technical.idiom &&
                    data.artist.technical.idiom.map((idiom, index) => (
                      <li key={index}>
                        <img alt="" /> {idiom.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="profileInformation" id="Certificacoes">
              <ContentTitle level={1}>Certificações</ContentTitle>

              <div>
                {data.artist.technical.areas[0].certificate &&
                  data.artist.technical.areas[0].certificate.map(
                    (certificate, index) => (
                      <span key={index}>
                        <FaCheckSquare />
                        {certificate.name}
                      </span>
                    )
                  )}
                <ul>
                  {data.artist.technical.is_ceac && <li>CEAC</li>}
                  {data.artist.technical.is_drt && <li>DRT</li>}
                  {data.artist.technical.is_cnpj && <li>CNPJ</li>}
                </ul>
              </div>
            </div>

            <div className="profileInformation" id="Contato">
              <ContentTitle level={1}>Contato</ContentTitle>

              <div className="socialContainer">
                <div className="socialContacts">
                  <span>
                    <MdEmail />
                    {data.email}
                  </span>
                  {data.artist.contact.facebook && (
                    <span>
                      <FaFacebookSquare />
                      {data.artist.contact.facebook}
                    </span>
                  )}

                  {data.artist.contact.instagram && (
                    <span>
                      <FaInstagramSquare />
                      {data.artist.contact.instagram}
                    </span>
                  )}

                  {data.artist.contact.twitter && (
                    <span>
                      <FaTwitterSquare />
                      {data.artist.contact.twitter}
                    </span>
                  )}

                  {data.artist.contact.tiktok && (
                    <span>
                      <SiTiktok />
                      {data.artist.contact.tiktok}
                    </span>
                  )}

                  {data.artist.contact.youtube && (
                    <span>
                      <FaYoutubeSquare />
                      {data.artist.contact.youtube}
                    </span>
                  )}

                  {data.artist.contact.linkedin && (
                    <span>
                      <FaLinkedin />
                      {data.artist.contact.linkedin}
                    </span>
                  )}
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
