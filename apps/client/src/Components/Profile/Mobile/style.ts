import { Text } from 'Components/Typography/Text'
import { Title } from 'Components/Typography/Title'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  

  margin-bottom: 5.5rem;
`

export const ProfileContentContainer = styled.div`
  display: flex;

  flex-direction: column; 


  padding-top: 2rem;
`

export const Header = styled.div`

  position: relative;

  background-color: black;

  svg {
    position: absolute;
    color: #FC0061;

    top: 0;
    right: 1.72rem;

    width: 25px;
    height: 25px;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    border: 0;
    background-color: inherit;
  }
`

export const UserPhotoContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`

export const UserBasicInformation = styled.div`
  
  padding: 0 2rem;

  .container {
    display: flex;
    align-items: center;

    justify-content: space-between;

    margin-bottom: 1.35rem;
    
    svg {
      color: #FC0061;

      width: 28px;
      height: 28px;
    }

    .downloadCurriculum {
      display: flex;
      /* display: inline-flex; */
      flex-direction: column;
      align-items: center;
      justify-content: center;


      top: 0;
      right: 0;

      background-color: inherit;

      color: #FFEC99;

      border: 0;
    
      padding: 0;
      margin: 0;
    }
  }
`

export const UserVerified = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.8rem;

  color: #FAFAFA;
  font-size: var(--font-size-default);
  
  img {
    width: 22px;
    height: 22px;
  }
`

export const UserTechnicalInformation = styled.div`
  padding: 0 2rem;

  margin-bottom: 3.4rem;

  ul {
    margin: 0;
    padding: 0;

    list-style-type: none;

    display: flex;
    flex-wrap: wrap;

    li {
      width: fit-content;

      margin-top: 1.5rem;
      margin-right: 0.5rem;
      padding: 0.2rem 1rem;

      background-color: #fff;
      border-radius: 100px;

      font-size: var(--font-size-short);
      font-weight: bold;
    }
  }
`

export const UserInformation = styled.div`
  /* width: 100%; */

  .Header {
    display: flex;

    flex-wrap: wrap;

    color: #fafafa;

    padding: 0 2rem;

    border-bottom: 1px solid #282828;

    margin-bottom: 3.4rem;

    a {
      margin-right: 1.2rem;
      margin-bottom: 0.4rem;
      font-size: var(--font-size-large);
      font-weight: 700;
    }
  }

  .profileInformation {

    padding: 0 2rem;

    margin-bottom: 2.9rem;

    div {
      margin-top: 3.6rem;
      margin-left: 0.5rem;
      
      color: #fafafa;
    }

    span {
      display: flex;
      align-items: center;

      padding-left: 2.5rem;

      font-size: var(--font-size-large);

      position: relative;

      line-height: 18px;

      svg {
        width: 24px;
        height: 24px;

        position: absolute;

        left: 0;

        &:hover {
          cursor: pointer;
        }
      }


      margin-bottom: 1.5rem;
    }

    ul {
      margin: 0;
      padding: 0;

      list-style-type: none;

      display: flex;
      flex-wrap: wrap;

      li {
        width: fit-content;

        margin-top: 1.5rem;
        margin-right: 0.5rem;
        padding: 0.2rem 2rem;

        background-color: #fff;
        border-radius: 100px;

        font-size: var(--font-size-short);
        font-weight: bold;

        color: black;

        color: black;
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        img {
          position: absolute;
          left: 0.17rem;
        }

        position: relative;

        img {
          position: absolute;
          left: 0.17rem;
          width: 25px;
          height: 25px;
        }
      }
    }

    .socialContainer {
      display: flex;
      justify-content: center;

      .socialContacts {
        margin-top: 0;

        span {
          display: flex;
          align-items: baseline;

          span {
            overflow-wrap: anywhere;
          }
        }
      }
    }
  }
`

export const UserPhoto = styled.div`
  width: 217px;
  height: 217px;
  border-radius: 50%;
  background-color: #FC0061;

  img {
    width: 217px;
    height: 217px;
    border-radius: 50%;
    object-fit: cover;

    margin-left: 0.1rem;
    margin-top: 0.1rem;
  }
`

export const NickName = styled(Title)`
  font-size: var(--font-size-title-medium);
  font-weight: 600;
  color: #FAFAFA;
`

export const UserName = styled(Title)`
  font-size: var(--font-size-default);
  font-weight: 600;
  color: #FAFAFA;
`

export const UserLocation = styled(Text)`
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
    
    div {
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

  button {
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
    }

    &:hover {
      cursor: pointer;
    }
  }
  
  .editProfile {
    background-color: inherit;
    color: #FC0061;

    border-bottom: 1px solid #FC0061;;
  }

`

export const Content = styled.section`

  

  span {
    font-weight: 600;
    display: block;
    

    display: flex;
    align-items: center;

    svg {
      color: #FC0061;
      margin-right: 1.2rem;

      width: 22px;
      height: 22px;
    }
  }

  /* .profileInformation {
    width: 47.8rem;

    padding-left: 5.88rem;
    margin-bottom: 4.11rem;    

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
  }  */

  
`

export const ContentHeader = styled.div`
  display: flex;

  color: #FAFAFA;
  
  border-bottom: 2px solid #282828;
  box-shadow: 0px 3px 5px #0B0B0B;

  padding: 1.16rem 0rem 0.77rem 5.88rem;

  margin-bottom: 2.94rem;

  a {

    font-weight: 700;

    display: flex;
    align-items: center;

    hr {
      border: 0;
      border-right: 1px solid #282828;
      height: 0.5rem;

      margin: 0rem 3.3rem;
    }
  }
`

export const ContentTitle = styled(Title)`
  font-size: var(--font-size-title-medium);
  color: #FAFAFA;

  border-bottom: 2px solid #282828;
`

export const ContentText = styled(Text)`
  font-size: var(--font-size-default);
  color: #FAFAFA;
  font-weight: 400;
  line-height: 1.8rem;
`
