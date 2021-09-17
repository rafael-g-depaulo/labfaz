const mergeFlags = (...regexes: RegExp[]) => regexes.map(r => r.flags).filter((f, i, a) => a.indexOf(f) === i).join("")

export const or = (...regexes: RegExp[]) => new RegExp(regexes.map(r => `${r.source}`).join("|"), mergeFlags(...regexes))

export const capture = (groupName: string, regex: RegExp) => new RegExp(`(?<${groupName}>${regex.source})`, regex.flags)

export const nonCapture = (regex: RegExp) => new RegExp(`(?:${regex.source})`, regex.flags)

// TODO: do the correct user extraction and transformation into link before sending this to the backend

// regexes for username or link to user page
export const twitterUserRegex = or(
  /^@?(?<rawHandle>[a-z0-9_]{1,25})$/i,
  /(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?<linkHandle>[a-z0-9_]{1,15})$/,
)

export const linkedinUserRegex = or(
  /^@?(?<rawHandle>[a-z0-9_-]{1,40})$/i,
  /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/(?<linkHandle>[a-z0-9_-]{1,25})$/,
)

export const tiktokUserRegex = or(
  /^@?(?<rawHandle>[a-z0-9_-]{1,40})$/i,
  /(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@(?<linkHandle>[a-z0-9_-]{1,25})$/,
)

export const instagramUserRegex = or(
  // eslint-disable-next-line
  /^@?(?<rawHandle>[a-z0-9_\-\.]{1,40})$/i,
  /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?<linkHandle>[a-z0-9_-]{1,25})$/,
)

export const youtubeUserRegex = or(
  /^@?(?<rawHandle>[\w-]{1,40})$/i,
  /^https?:\/\/(www\.)?youtube\.com\/(channel\/UC(?<channelId>[\w-]{21}[AQgw])|(c\/|user\/)?(?<channelName>[\w-]+))$/,
)

export const facebookUserRegex = or(
  /^@?(?<rawHandle>[a-z\d.]{5,})$/i,
  // eslint-disable-next-line
  /^(?:https?:\/\/)?(?:www\.|m\.|mobile\.|touch\.|mbasic\.)?(?:facebook\.com|fb(?:\.me|\.com))\/(?!$)(?:(?:\w)*#!\/)?(?:pages\/|pg\/)?(?:photo\.php\?fbid=)?(?:[\w\-]*\/)*?(?:\/)?(?:profile\.php\?id=)?(?<username>[^\/?&\s]*)(?:\/|&|\?)?.*/,
)
