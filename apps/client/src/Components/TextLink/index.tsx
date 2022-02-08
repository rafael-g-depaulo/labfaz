import { FC } from "react";
import { HtmlLink } from "./HtmlLink";
import { YoutubePlayer } from "Components/YoutubePlayer";

export interface Props {
  href: string;
  value: string;
}

export const Link: FC<Props> = ({ href, value }) => {
  let isYoutube = false;

  let ready = false;

  if (href.substring(0, 4) === "http") {
    ready = true;
  }

  let address = ready ? href : "https://" + href;

  if (
    address.match(
      /^(?:https?:\/\/)?(?:(?:www\.)?youtube.com\/watch\?v=|youtu.be\/)(\w+)$/
    )
  ) {
    isYoutube = true;
  } else if (address.substr(0, 15) === "http://youtu.be") {
    isYoutube = true;
  } else if (address.substr(0, 29) === "https://www.youtube.com/embed") {
    isYoutube = true;
  }

  return isYoutube ? (
    <YoutubePlayer href={href} />
  ) : (
    <HtmlLink href={href} value={value} />
  );
};

export default Link;
