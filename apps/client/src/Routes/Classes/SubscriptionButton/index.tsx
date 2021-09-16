import React, { FC } from "react";
import { subscribeToCourse, checkSubscription } from "Api/Courses";
import { useCurrentUserToken } from "Context/LoggedUserToken";

import { ButtonStyled, Link } from "./styles";
import { useState } from "react";
import { useEffect } from "react";

import { useHistory } from "react-router-dom";

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

  const [isLoading, setIsLoading] = useState(true);
  const [request, setRequest] = useState<SubscriptionDeps>();

  useEffect(() => {
    checkSubscription(courseId, user?.token).then((res) => {
      setRequest(res);
    });
    setIsLoading(false);
  }, [user, courseId]);

  const handleClick = () => {
    if (user.isLoggedIn) {
      subscribeToCourse(courseId, user?.token);
    } else {
      history.push("/login");
    }
  };

  if (isLoading) {
    return <ButtonStyled>Loading...</ButtonStyled>;
  }

  if (!isAvailabe) {
    return <ButtonStyled disabled>INSCREVA-SE</ButtonStyled>;
  }

  if (request?.data?.exists && request.data.request.status !== "accepted") {
    const key = request.data.request.status;
    return <ButtonStyled disabled>{status[key]}</ButtonStyled>;
  }

  if (!hasSubscription ||  (request?.data?.exists && request?.data?.request.status === "accepted")) {
    return (
      <>
        <Link href={tratedLink} target="_blank" rel="noopener noreferrer">
          ENTRAR NO CURSO
        </Link>
      </>
    );
  }

  return (
    <>
      <ButtonStyled onClick={handleClick}>INSCREVA-SE</ButtonStyled>
    </>
  );
};

export default Button;
