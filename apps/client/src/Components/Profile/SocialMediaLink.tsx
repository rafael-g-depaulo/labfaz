import React, { ElementType, FC } from "react"

import { IconType } from "react-icons"
import { MdEmail } from 'react-icons/md'
import { SiTiktok } from 'react-icons/si'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from 'react-icons/fa'

import { getFacebookLink, getInstagramLink, getLinkedinLink, getTiktokLink, getTwitterLink, getYoutubeLink } from 'Utils/userUtils'

import ExternalLink from "Components/ExternalLink"
import { User } from "Context/LoggedUserToken"

export interface SocialMediaLinkProps {
  label: string,
  labelToLink?: (label: string) => string,
  icon: IconType
  noAt?: boolean
  ContainerElement?: ElementType
}

export const SocialMediaLink: FC<SocialMediaLinkProps> = ({
  label,
  icon: Icon,
  labelToLink,
  noAt = false,
  ContainerElement = "span",
}) => {
  const labelWithAt = noAt || label.startsWith("@") ? label : `@${label}`

  if (!labelToLink) return (
    <ContainerElement><Icon />{labelWithAt}</ContainerElement>
  )

  return (
    <ExternalLink href={labelToLink(label)}>
      <ContainerElement><Icon />{labelWithAt}</ContainerElement>
    </ExternalLink>
  )
}

export const SocialMediaLinks: FC<{ user: User, ContainerElement?: ElementType }> = ({ user, ContainerElement }) => {
  const linksProps: SocialMediaLinkProps[] = [
    { ContainerElement, icon: MdEmail,           label: user.email, noAt: true },
    { ContainerElement, icon: FaFacebookSquare,  label: user.artist.contact.facebook,  labelToLink: getFacebookLink  },
    { ContainerElement, icon: FaInstagramSquare, label: user.artist.contact.instagram, labelToLink: getInstagramLink },
    { ContainerElement, icon: FaTwitterSquare,   label: user.artist.contact.twitter,   labelToLink: getTwitterLink   },
    { ContainerElement, icon: SiTiktok,          label: user.artist.contact.tiktok,    labelToLink: getTiktokLink    },
    { ContainerElement, icon: FaYoutubeSquare,   label: user.artist.contact.youtube,   labelToLink: getYoutubeLink   },
    { ContainerElement, icon: FaLinkedin,        label: user.artist.contact.linkedin,  labelToLink: getLinkedinLink  },
  ].filter(({ label }) => !!label && label !== "")

  return <>{linksProps.map(SocialMediaLink)}</>
}

export default SocialMediaLink
