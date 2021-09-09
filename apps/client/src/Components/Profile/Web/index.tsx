import React, { FC } from 'react'
import { MdEmail } from 'react-icons/md'
import { SiTiktok } from 'react-icons/si'
import { IoMdCloudDownload } from 'react-icons/io'
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
  Aside,
  Content,
  UserPhoto,
  AsideHeader,
  UserName,
  UserLocation,
  SocialMedias,
  ButtonContainer,
  NickName,
  ContentHeader,
  ContentTitle,
  ContentText,
} from './style'

import icaroIMG from './Icaro_Rodrigues.jpg'

interface ProfileProps {
  data: object
}

const currentYear = new Date().getFullYear()

const Web: FC<ProfileProps> = ({ data }) => {

  return (
    <Container>
      <ProfileContentContainer>
        <Aside>
          <AsideHeader>
            <UserPhoto>
              <img src="" alt="User Photo" />
            </UserPhoto>
            <NickName level={1}>{data.artist?.show_name}</NickName>
            <UserName level={2}>{data.artist?.name}</UserName>
          </AsideHeader>

          <UserLocation>
            {data.artist.address.city}, {data.artist.address.state}
          </UserLocation>

          <hr />

          <SocialMedias>
            <li>
              <MdEmail />
              <div>{data.email}</div>
            </li>

            {data.artist.contact.facebook && (
              <li>
                <FaFacebookSquare />
                <div>{data.artist.contact.facebook}</div>
              </li>
            )}

            {data.artist.contact.instagram && (
              <li>
                <FaInstagramSquare />
                <div>{data.artist.contact.instagram}</div>
              </li>
            )}

            {data.artist.contact.twitter && (
              <li>
                <FaTwitterSquare />
                <div>{data.artist.contact.twitter}</div>
              </li>
            )}

            {data.artist.contact.tiktok && (
              <li>
                <SiTiktok />
                <div>{data.artist.contact.tiktok}</div>
              </li>
            )}

            {data.artist.contact.youtube && (
              <li>
                <FaYoutubeSquare />
                <div>{data.artist.contact.youtube}</div>
              </li>
            )}

            {data.artist.contact.linkedin && (
              <li>
                <FaLinkedin />
                <div>{data.artist.contact.linkedin}</div>
              </li>
            )}
          </SocialMedias>

          <hr />

          <ButtonContainer>
            {data.curriculum && (
              <button type="button" className="downloadCurriculum">
                <GoGear /> BAIXAR CV
              </button>
            )}

            <button type="button" className="editProfile">
              <IoMdCloudDownload /> EDITAR PERFIL
            </button>
          </ButtonContainer>

          <hr className="sideDivider" />
        </Aside>

        <Content>
          <ContentHeader>
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
            {/* <a href="#CNPJ">
              CNPJ
              <hr />
            </a> */}
            <a href="#Contato">Contato</a>
          </ContentHeader>

          <div className="profileInformation">
            <ContentTitle level={1}>Sobre</ContentTitle>

            <div>
              <ContentText>
                {data.artist.technical.areas[0].describe}
              </ContentText>
              <ul>
                <li>{data.artist.technical.areas[0].name}</li>
                <li>ENGENHARIA DE SOM</li>
                <li>EXPERIENCIA: {currentYear - data.artist.technical.areas[0].started_year} ANOS</li>
                <li>{data.artist.technical.areas[0].technical_formation}</li>
                <li>{data.artist.technical.cnpj_type}</li>
              </ul>
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
                      <img src={idiom_icon} alt="" /> {idiom.name}
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

          {/* <div className="profileInformation" id="CNPJ">
            <ContentTitle level={1}>CNPJ</ContentTitle>

            <div>
              <span>Lorem Ipsum LTDA - Servicos Gerais</span>
              <ul>
                <li>PEQUENA EMPRESA</li>
              </ul>
            </div>
          </div> */}

          <div className="profileInformation" id="Contato">
            <ContentTitle level={1}>Contato</ContentTitle>

            <div className="socialContacts">
              <div>
                {data.email && (
                  <span>
                    <MdEmail />
                    {data.email}
                  </span>
                )}

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
              </div>

              <div>
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

                {data.artist.contact.youtube && (
                  <span>
                    <FaLinkedin />
                    {data.artist.contact.linkedin}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Content>
      </ProfileContentContainer>
    </Container>
  )
}

export default Web
