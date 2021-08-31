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

import idiom_icon from './idiomIcon.svg'

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

const Web: FC = () => {
  return (
    <Container>
      <ProfileContentContainer>
        <Aside>
          <AsideHeader>
            <UserPhoto />
            <NickName level={1}>Nickname</NickName>
            <UserName level={2}>Name</UserName>
          </AsideHeader>

          <UserLocation>Formosa, Entorno DF</UserLocation>

          <hr />

          <SocialMedias>
            <li>
              <MdEmail />
              <div>email@email.com</div>
            </li>
            <li>
              <FaFacebookSquare />
              <div>fb.nickname</div>
            </li>
            <li>
              <FaInstagramSquare />
              <div>insta.nickname</div>
            </li>
            <li>
              <FaTwitterSquare />
              <div>twitter.nickname</div>
            </li>
            <li>
              <SiTiktok />
              <div>tiktok.nickname</div>
            </li>
            <li>
              <FaYoutubeSquare />
              <div>yt.nickname</div>
            </li>
            <li>
              <FaLinkedin />
              <div>linkedin.nickname</div>
            </li>
          </SocialMedias>

          <hr />

          <ButtonContainer>
            <button type="button" className="downloadCurriculum">
              <GoGear /> BAIXAR CV
            </button>

            <button type="button" className="editProfile">
              <IoMdCloudDownload /> EDITAR PERFIL
            </button>
          </ButtonContainer>

          <hr className="sideDivider" />
        </Aside>

        <Content>
          <ContentHeader>
            <a href="#Sobre">
              Sobre <hr />
            </a>
            <a href="#Formacao">
              Formação <hr />
            </a>
            <a href="#Certificacoes">
              Certificações <hr />
            </a>
            <a href="#CNPJ">
              CNPJ <hr />
            </a>
            <a href="#Contato">Contato</a>
          </ContentHeader>

          <div className="profileInformation">
            <ContentTitle level={1}>Sobre</ContentTitle>

            <div>
              <ContentText>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </ContentText>
              <ul>
                <li>AUDIOVISUAL</li>
                <li>ENGENHARIA DE SOM</li>
                <li>EXPERIENCIA: 7 ANOS</li>
                <li>FORMACAO TECNICA</li>
              </ul>
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
                  <img src={idiom_icon} alt="" /> INGLES
                </li>
                <li>
                  <img src={idiom_icon} alt="" /> ESPANHOL
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
        </Content>
      </ProfileContentContainer>
    </Container>
  )
}

export default Web
