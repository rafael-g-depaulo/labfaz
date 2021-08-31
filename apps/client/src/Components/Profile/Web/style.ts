import { Text } from 'Components/Typography/Text'
import { Title } from 'Components/Typography/Title'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  
  margin: 5.9rem auto 8.77rem auto;

  width: 90vw;
`

export const ProfileContentContainer = styled.div`
  display: flex;

  margin: auto;


  overflow-x: hidden;
  border-radius: 150px 15px 15px 15px;
`

export const Aside = styled.aside`
  width: 16.6rem;
  background-color: #111010;
  position: relative;

  hr {
    width: 7.7rem;
    margin: 3.3rem auto;
    border: 0;
    border-top: 2px solid #282828;
  }

  .sideDivider {
    border: 0;
    border-left: 1px solid #090909;
    height: 100rem;
    left: 17rem;
    top: 6rem;
  
    position: absolute;
  }
`

export const AsideHeader = styled.div`
  margin-bottom: 2.65rem;
`

export const UserPhoto = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #A3A3A3;
  margin-bottom: 1.22rem;

  img {
    width: 100%;
    height: 256px;
    border-radius: 50%;
  }
`

export const NickName = styled(Title)`
  margin-left: 2.2rem;
  font-size: var(--font-size-title);
  font-weight: 600;
  color: #FAFAFA;
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
    
    div {
      width: 9.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 24px;
      height: 24px;

      margin-right: 0.94rem;

      color: #6C6C6C;
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

  .downloadCurriculum {
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
  width: 64.16rem;
  background-color: #111010;

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
    }
  }

  span {
    font-weight: 600;
    display: block;
    

    display: flex;
    align-items: center;

    svg {
      color: #6C6C6C;
      margin-right: 1.2rem;

      width: 22px;
      height: 22px;
    }
  }

  .profileInformation {
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
  } 

  .socialContacts {

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 7.5rem;

    color: #FAFAFA;

    height: 12rem;

    svg {
      margin-right: 0.83rem;
      width: 28px;
      height: 28px;
      color: #6C6C6C;
    }

    span {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }
  }
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
  font-size: var(--font-size-title-smaller);
  color: #FAFAFA;
  font-weight: 400;
  line-height: 2.39rem;
`
