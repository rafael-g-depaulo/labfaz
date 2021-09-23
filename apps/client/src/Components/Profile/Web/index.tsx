import React, { FC } from 'react'
import { IoMdCloudDownload } from 'react-icons/io'
import { GoGear } from 'react-icons/go'

import { User } from 'Context/LoggedUserToken'

import {
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
  // UserName,
  UserLocation,
  SocialMedias,
  ButtonContainer,
  NickName,
  ContentHeader,
  ContentTitle,
  ContentText,
  UserVerified,
} from './style'

import idiom_icon from '../idiomIcon.svg'
import isVerified from '../isVerified.svg'
import { getUserName } from 'Utils/userUtils'
import { SocialMediaLinks } from '../SocialMediaLink'
import { useHistory } from 'react-router'
import { showEditProfile } from 'FeatureFlags'

interface ProfileProps {
  data: User
  personalProfilePage: boolean
}

const currentYear = new Date().getFullYear()

const Web: FC<ProfileProps> = ({ data, personalProfilePage }) => {
  const history = useHistory()

  const handleRedirectToEditProfile = () => {
    history.push('/edit-profile')
  }

  return (
    <Container>
      <ProfileContentContainer>
        <Aside>
          <AsideHeader>
            <UserPhoto>
              {data.artist.photo_url && (
                <img src={data.artist.photo_url} alt="User avatar" />
              )}
            </UserPhoto>
            <NickName level={1}>{getUserName(data)}</NickName>
            {/* <UserName level={2}>{data.artist?.name}</UserName> */}
            {data.isVerified && (
              <UserVerified>
                Verificado Backstage
                <img src={isVerified} alt="isVerify" />
              </UserVerified>
            )}
          </AsideHeader>

          <UserLocation>
            {data.artist.address.city}, {data.artist.address.state}
          </UserLocation>

          <hr />

          <SocialMedias>
            <SocialMediaLinks user={data} ContainerElement="li" />
          </SocialMedias>

          <hr />

          <ButtonContainer>
            {data.artist.curriculum && (
              <a className="downloadCurriculum" href={data.artist.curriculum} download>
                <IoMdCloudDownload /> BAIXAR CV
              </a>
            )}

            {showEditProfile && personalProfilePage && (
              <button
                type="button"
                className="editProfile"
                onClick={() => handleRedirectToEditProfile()}
              >
                <GoGear /> EDITAR PERFIL
              </button>
            )}
          </ButtonContainer>

          <hr className="sideDivider" />
        </Aside>

        <Content>
          <ContentHeader>
            <a href="#Sobre">Sobre</a>
            <a href="#Formacao">Formação</a>
            <a href="#Certificacoes">Certificações</a>
            <a href="#Contato">Contato</a>
          </ContentHeader>

          <div className="profileInformation">
            <ContentTitle level={1}>Sobre</ContentTitle>

            <div>
              <ContentText>
                {data.artist.technical.area[0].describe}
              </ContentText>
              <ul>
                <li>{data.artist.technical.area[0].name.toUpperCase()}</li>
                <li>
                  EXPERIENCIA :
                  {` ${
                    currentYear -
                    parseInt(data.artist.technical.area[0].started_year)
                  } `}
                  ANOS
                </li>
                <li>
                  {data.artist.technical.area[0].technical_formation.toUpperCase()}
                </li>

                {data.artist.technical.cnpj_type !== 'Nenhum' && (
                  <li>{data.artist.technical.cnpj_type.toUpperCase()}</li>
                )}
              </ul>
            </div>
          </div>

          <div className="profileInformation" id="Formacao">
            <ContentTitle level={1}>Formação</ContentTitle>

            <div>
              <span>
                <FaCheckCircle />
                {data.artist.technical.formation !== 'não tem' &&
                  data.artist.technical.formation}
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
              {data.artist.technical.area[0].certificate &&
                data.artist.technical.area[0].certificate.map(
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

            <div className="socialContacts">
              <SocialMediaLinks user={data} ContainerElement="li" />
            </div>
          </div>
        </Content>
      </ProfileContentContainer>
    </Container>
  )
}

export default Web
