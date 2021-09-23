import { Text } from 'Components/Typography/Text'
import { Title } from 'Components/Typography/Title'
import styled, { css } from 'styled-components'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
  
  margin: 5.9rem auto 8.77rem auto;
  

  max-width: 90vw;
  width: 78.5rem;
`

export const ProfileContentContainer = styled.div`
  display: flex;

  width: 100%;

  min-height: 90rem;
`

export const Aside = styled.aside`
  width: 16.6rem;
  background-color: #111010;
  position: relative;

  border-radius: 150px 0px 0px 15px;

  hr {
    width: 7.7rem;
    margin: 3.3rem auto;
    border: 0;
    border-top: 2px solid #282828;
  }

  .sideDivider {
    border: 0;
    border-left: 1px solid #090909;
    height: 85%;
    left: 17rem;
    top: 6rem;
  
    position: absolute;

    ${DesktopSmall(css`
      left: 14rem;
    `)}
  }

  ${DesktopSmall(css`
    width: 13rem;
  `)}

`

export const AsideHeader = styled.div`
  margin-bottom: 2.65rem;
`

export const UserPhoto = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #FC0061;
  margin-bottom: 1.22rem;


  ${DesktopSmall(css`
    width: 240px;
    height: 240px;
  `)}

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;

    margin-left: 0.1rem;
    margin-top: 0.1rem;

    ${DesktopSmall(css`
      width: 240px;
      height: 240px;
    `)}
  }
`

export const NickName = styled(Title)`
  margin-left: 2.2rem;
  font-size: var(--font-size-title);
  font-weight: 600;
  color: #FAFAFA;
`

export const UserVerified = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.8rem;

  color: #FAFAFA;
  margin-left: 2.2rem;
  font-size: var(--font-size-default);
  
  img {
    width: 22px;
    height: 22px;
  }
`

export const UserName = styled(Title)`
  margin-left: 2.2rem;
  font-size: var(--font-size-title-smaller);
  font-weight: 600;
  color: #FAFAFA;
`

export const UserLocation = styled(Text)`
  margin-left: 2.2rem;
  color: #FAFAFA;
`

export const SocialMedias = styled.ul`
  list-style-type: none;
  margin: 0;
  color: #FAFAFA;

  justify-content: center;

  margin-top: 3.1rem;

  li {
    display: flex;
    align-items: center;
    
    span {
      width: 9.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 24px;
      height: 24px;

      margin-right: 0.94rem;

      color: #FC0061;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  
  row-gap: 3.5rem;

  button, .downloadCurriculum {
    width: 13.3rem;
    height: 2.37rem;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    border: 0;

    font-weight: 700;
    font-size: var(--font-size-large);

    margin-top: 2.16rem;

    svg {
      position: absolute;
      left: 1.3rem;

      ${DesktopSmall(css`
        left: 0.5rem;
      `)}
    }

    &:hover {
      cursor: pointer;
    }
    
    ${DesktopSmall(css`
      width: 10rem;
      height: 2rem;
    `)}
  }

  .downloadCurriculum {
    display: inline-flex;
    background-color: #FC0061;
    color: #FFEC99;

    filter: drop-shadow(3px 3px 4px rgba(130, 0, 50, 0.5));
    border-radius: 1px;
  }

  .editProfile {
    background-color: inherit;
    color: #FC0061;

    border-bottom: 1px solid #FC0061;;
  }

`

export const Button = styled.button`
  width: 9.72rem;
  height: 2.37rem;

  background-color: #fff;
  border: 0;

  font-weight: 700;
  font-size: var(--font-size-large);

  margin-top: 2.16rem;

  &:hover {
    cursor: pointer;
  }
`

export const Content = styled.section`
  max-width: 95vw;
  width: 64.16rem;
  background-color: #111010;

  border-radius: 0px 15px 15px 0px;

  ul {
    margin: 0;
    padding: 0;

    list-style-type: none;

    display: flex;
    flex-wrap: wrap;

    li {
      margin-top: 1.5rem;
      margin-right: 2rem;
      padding: 0.2rem 2.3rem;

      background-color: #fff;
      border-radius: 100px;

      white-space: nowrap;

      font-size: var(--font-size-large);
      font-weight: bold;

      ${DesktopSmall(css`
        font-size: var(--font-size-medium);
      `)}
    }
  }

  span {
    font-weight: 600;
    display: block;
    
    display: flex;
    align-items: center;

    ${DesktopSmall(css`
      font-size: var(--font-size-medium);
      line-height: 18px;
      margin-bottom: 1rem;
    `)}
    
    svg {
      color: #FC0061;
      margin-right: 1.2rem;

      width: 22px;
      height: 22px;

      ${DesktopSmall(css`
        width: 18px;
        height: 18px;
      `)}
    }
  }

  .profileInformation {
    max-width: 60vw;
    width: 47.8rem;

    /* ${DesktopSmall(css`
      font-size: var(--font-size-default);
      width: 35rem;
      max-width: 95vw;
    `)} */

    padding-left: 5.88rem;
    margin-bottom: 4.11rem;    

    svg {
      height: 22px;
      width: 22px;
    }

    span {
      display: flex;
      align-items: center;

      padding-left: 2rem;

      font-size: var(--font-size-default);

      position: relative;

      line-height: 18px;

      svg {
        width: 22px;
        height: 22px;

        position: absolute;

        left: 0;
      }

      margin-bottom: 1.5rem;
    }

    div {
      margin-top: 3.6rem;
      margin-left: 1.3rem;
      
      color: #fafafa;

      li {
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        img {
          position: absolute;
          left: 0.17rem;
        }
      }
    }
  } 

  .socialContacts {

    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    column-gap: 5rem;

    width: 29.5rem;
    max-width: 80%;
    height: 10rem;

    color: #FAFAFA;


    ${DesktopSmall(css`
      height: 20rem;
    `)}
    
    li {
      margin-bottom: 0.9rem;
      /* display: flex; */
      /* align-items: center; */
      /* padding-left: 2.5rem; */
      text-decoration: none;
      list-style-type: none;

      width: fit-content;
      height: fit-content;
      
      span {
        padding: 0;
        margin: 0;
        color: #fafafa;
      }

      svg {
        margin-right: 0.83rem;
        width: 28px;
        height: 28px;
        color: #FC0061;

        ${DesktopSmall(css`
          width: 22px;
          height: 22px;
        `)}
      }
    }

    div {
      margin-top: 0;
    }
  }
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%; 

  color: #FAFAFA;
  
  border-bottom: 2px solid #282828;
  box-shadow: 0px 3px 5px #0B0B0B;

  padding: 1.5rem 0rem 1.5rem 5.88rem;

  margin-bottom: 2.94rem;

  a {

    font-weight: 700;

    display: flex;
    align-items: center;
    
    height: 1rem;

    /* border-right: 1px solid white; */

    /* hr {
      border: 0;
      border-right: 1px solid #282828;
      height: 0.5rem;
      margin: 0rem 3.3rem;
    } */
  }

  ${DesktopSmall(css`
    padding: 1.16rem 0rem 0.77rem 0rem;

    a {
      font-size: var(--font-size-medium);
    }
  `)}
`

export const ContentTitle = styled(Title)`
  font-size: var(--font-size-title-medium);
  color: #FAFAFA;

  border-bottom: 2px solid #282828;
`

export const ContentText = styled(Text)`
  font-size: var(--font-size-title-smaller);
  color: #FAFAFA;
  font-weight: 400;
  line-height: 2.39rem;

  ${DesktopSmall(css`
    font-size: var(--font-size-default);
  `)}
`
