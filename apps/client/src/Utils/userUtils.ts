import { User } from 'Context/LoggedUserToken'
import { facebookUserRegex, instagramUserRegex, linkedinUserRegex, tiktokUserRegex, twitterUserRegex, youtubeUserRegex } from './regex'

export const getUserName = ({ artist }: User) => 
  artist.show_name === "nome artistico" ? artist.artistic_name ?? artist.name :
  artist.show_name === "nome social" ? artist.social_name ?? artist.name : 
  artist.name

const badInputLink = (media: string, input: string) => {
  console.error(`tried to get ${media} link from string, but invalid format given. input:`, input)
  return ""
}

const getHandle = (mediaName: string, regex: RegExp, groupNames: string[]) => (linkOrHandle: string) => {
  const regexResults = regex.exec(linkOrHandle)
  if (!regexResults) return badInputLink(mediaName, linkOrHandle)
  
  const { groups } = regexResults
  if (!groups) return badInputLink(mediaName, linkOrHandle)

  for (const groupName of groupNames) {
    const handle = groups[groupName]
    // hardcoded fix for youtube id
    if (groupName === "channelId" && !!handle) return `youtube`
    if (!!handle) return handle
  }
  return badInputLink(mediaName, linkOrHandle)
}

export const getTwitterHandle = getHandle("twitter", twitterUserRegex, ["rawHandle", "linkHandle"])
export const getTwitterLink = (linkOrHandle: string) => `https://www.twitter.com/${getTwitterHandle(linkOrHandle)}`

export const getLinkedinHandle = getHandle("linkedin", linkedinUserRegex, ["rawHandle", "linkHandle"])
export const getLinkedinLink = (linkOrHandle: string) => `https://www.linkedin.com/in/${getLinkedinHandle(linkOrHandle)}`

export const getTiktokHandle = getHandle("linkedin", tiktokUserRegex, ["rawHandle", "linkHandle"])
export const getTiktokLink = (linkOrHandle: string) => `https://www.tiktok.com/@${getTiktokHandle(linkOrHandle)}`

export const getInstagramHandle = getHandle("instagram", instagramUserRegex, ["rawHandle", "linkHandle"])
export const getInstagramLink = (linkOrHandle: string) => `https://www.instagram.com/${getInstagramHandle(linkOrHandle)}`

export const getYoutubeHandle = getHandle("youtube", youtubeUserRegex, ["rawHandle", "channelId", "channelName"])
export const getYoutubeLink = (linkOrHandle: string) => {
  const handle = getYoutubeHandle(linkOrHandle)
  if (/youtubeId (.+)/.test(handle)) return `https://www.youtube.com/channel/${linkOrHandle}`
  return `https://www.youtube.com/${handle}`
}

export const getFacebookHandle = getHandle("facebook", facebookUserRegex, ["rawHandle", "username"])
export const getFacebookLink = (linkOrHandle: string) => `https://www.facebook.com/${getFacebookHandle(linkOrHandle)}`

export const profilePictureMaxSize = 15 * 1024 * 1024
export const curriculumMaxSize = 20 * 1024 * 1024
