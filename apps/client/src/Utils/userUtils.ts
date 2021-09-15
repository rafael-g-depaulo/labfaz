import { User } from 'Context/LoggedUserToken'

export const getUserName = ({ artist }: User) => 
  artist.show_name === "nome artistico" ? artist.artistic_name ?? artist.name :
  artist.show_name === "nome social" ? artist.social_name ?? artist.name : 
  artist.name
