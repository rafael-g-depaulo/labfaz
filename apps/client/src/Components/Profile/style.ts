import { Text } from 'Components/Typography/Text'
import { Title } from 'Components/Typography/Title'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  justify-content: space-around;

  margin-top: 5.83rem;
  margin-bottom: 5.77rem;
`

export const ProfileContentContainer = styled.div`
  display: flex;

  width: 90%;
  min-width: 60rem;

  overflow-x: hidden;
`

export const Aside = styled.aside`
  width: 14.27rem;
  background-color: #CECECE;
`

export const AsideHeader = styled.div`
  margin-bottom: 2.65rem;
`

export const UserPhoto = styled.div`
  width: 256px;
  height: 256px;
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
  margin-left: 1.2rem;
  font-size: var(--font-size-title);
  font-weight: 600;
`

export const UserName = styled(Title)`
  font-size: var(--font-size-title-smaller);
  margin-left: 1.2rem;
  font-weight: 600;
`

export const UserLocation = styled(Text)`
  margin-left: 1.2rem;
`

export const SocialMedias = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1.2rem;

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

export const EditProfile = styled.div`
  border-top: 0.5px solid #000000;
;
  margin-top: 8.04rem;
  display: flex;
  justify-content: center;
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
  background-color: #E5E5E5;

  ul {
    margin: 0;
    padding: 0;

    list-style-type: none;

    display: flex;
    flex-wrap: wrap;

    li {
      margin-top: 1.5rem;
      margin-right: 2rem;
      padding: 0.2rem 1.5rem;

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
    width: 39.1rem;

    padding-left: 5.88rem;
    margin-bottom: 4.11rem;
 

    div {
      margin-top: 3.6rem;
      margin-left: 1.3rem;
    }
  } 

  .socialContacts {

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 7.5rem;

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


  border-bottom: 0.5px solid #000000;

  padding: 1.16rem 0rem 0.77rem 5.88rem;

  margin-bottom: 2.94rem;

  a {
    font-weight: 700;
    margin-right: 5rem;
  }
`

export const ContentTitle = styled(Title)`
  font-size: var(--font-size-title-medium);
`

export const ContentText = styled(Text)`
  font-size: var(--font-size-title-smaller);
`
