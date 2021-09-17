import React, { FC, useCallback } from "react";

import { useSubscription, useSubscribeToCouse } from "Api/Courses";
import { useCurrentUserToken } from "Context/LoggedUserToken";

import { ButtonStyled, Link } from "./styles";

import { useHistory } from "react-router-dom";
import { navLinks } from "Utils/navLinks";

export interface ButtonProps {
  requestStatus?: "pending" | "accepted" | "denied" | undefined;
  courseId: string;
  isAvailabe?: boolean;
  hasSubscription?: boolean;
  link: string;
}

export interface SubscriptionDeps {
  status: string;
  code: number;
  data:
    | {
        exists: boolean;
        request: {
          id: string;
          status: "accepted" | "pending" | "denied";
        };
      }
    | undefined;
}

export const Button: FC<ButtonProps> = ({
  hasSubscription,
  isAvailabe,
  courseId,
  link,
}) => {
  const history = useHistory();
  const user = useCurrentUserToken();
  const status = {
    pending: "EM ANÁLISE",
    denied: "NÃO ACEITO",
  };

  const tratedLink = link?.startsWith("https") ? link : `https://${link}`;

  // TODO: USE DATA INVALIDATION AND REFETCHING HERE
  const { isLoading, error, data } = useSubscription(courseId, user.token)
  const { mutate } = useSubscribeToCouse(courseId, user.token)
  const handleClick = useCallback(() => {
    if (user.isLoggedIn) mutate()
    else history.push(navLinks.login.path)
  }, [mutate, user.isLoggedIn, history])

  if (error)
    return <ButtonStyled disabled>ERRO TENTE DE NOVO MAIS TARDE</ButtonStyled>;

  if (isLoading) {
    return <ButtonStyled>Loading...</ButtonStyled>;
  }

  if (!isAvailabe) {
    return <ButtonStyled disabled>INDISPONÍVEL</ButtonStyled>;
  }

  if ( data?.exists && data?.request.status !== "accepted") {
    const key = data.request.status;
    return <ButtonStyled disabled>{status[key]}</ButtonStyled>;
  }

  if (!hasSubscription || (data?.exists && data?.request.status === "accepted")) {
    return (
      <Link href={tratedLink} target="_blank" rel="noopener noreferrer">
        ENTRAR NO CURSO
      </Link>
    );
  }

  return (
    <ButtonStyled onClick={handleClick}>INSCREVA-SE</ButtonStyled>
  );
};

export default Button;
