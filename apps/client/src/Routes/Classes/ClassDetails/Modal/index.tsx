import React, { FC, useState, useRef } from "react";

import { Container, LinkModal, Button, Notification } from "./styles";

import { format } from "date-fns";
import { timeDifference } from "Utils/formatPostDate";

export interface Props {
  available: boolean;
  has_subscription: boolean;
  start_date: string;
  link: string;
}

export const ClassModal: FC<Props> = ({
  available,
  has_subscription,
  start_date,
  link,
}) => {
  const modalRef = useRef<HTMLInputElement | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const date = new Date(start_date);
  const actualDate = new Date();
  const difference = timeDifference(date, actualDate);
  const classOpen =
    !has_subscription && available && difference === 0 ? true : false;

  return (
    <Container isOpen={openModal}>
      <LinkModal ref={modalRef} isOpen={openModal}>
        <div className="confirmEmailContainer">
          <h1>Seu link de acesso</h1>

          <div className="contact">
            <p>
              {classOpen
                ? "Clique no link abaixo para a acessar sua atividade."
                : "O link de acesso para a sua atividade está indisponível."}
            </p>
            {classOpen ? (
              <Button href={link}>Aula online</Button>
            ) : (
              <button type="button" disabled>
                Aula online
              </button>
            )}
            {classOpen ? (
              <></>
            ) : (
              <Notification>
                <p>Disponível em:</p>
                <p>
                  {format(start_date, "DD-MM-YYYY")
                    .replace("-", "/")
                    .replace("-", "/")}
                </p>
              </Notification>
            )}
            <button type="button" onClick={() => setOpenModal(false)}>
              voltar
            </button>
          </div>
        </div>
      </LinkModal>
    </Container>
  );
};

export default ClassModal;
