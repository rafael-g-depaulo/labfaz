import React, { FC } from 'react'
import { MdEmail } from 'react-icons/md'
import { SiTiktok } from 'react-icons/si'
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
  EditProfile,
  Button,
  NickName,
  ContentHeader,
  ContentTitle,
  ContentText,
} from './style'

const Profile: FC = () => {
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

          <EditProfile>
            <Button type="button">EDITAR PERFIL </Button>
          </EditProfile>
        </Aside>

        <Content>
          <ContentHeader>
            <a href="#Sobre">Sobre</a>
            <a href="#Formacao">Formação</a>
            <a href="#Certificacoes">Certificações</a>
            <a href="#CNPJ">CNPJ</a>
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
                <li>INGLES</li>
                <li>ESPANHOL</li>
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

export default Profile
