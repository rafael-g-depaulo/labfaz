import React, { FC, useState } from 'react'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'

import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Step6 } from './Step6'
import { Step7 } from './Step7'
import { Step8 } from './Step8'
import { Step9 } from './Step9'
import { Step10 } from './Step10'

import {
  Container,
  FormTitle,
  FormContainer,
  NextButton,
  BackButton,
  RightSession,
  SessionContainer,
} from './style'

interface ButtonProps {
  buttonType: "button" | "submit" | "reset" | undefined
}

export const SignUp: FC<ButtonProps> = ({ buttonType }) => {
  return (
    <Container>
      <FormikStepper
        initialValues={{
          name: '',
          social_name: '',
          artistic_name: '',
          main_name: '',
          birthday: '',
          cpf: '',
          rg: '',
          expedition_department: '',
          activities_and_services: '',
          gender: '',
          OutroGenero: '',
          race: '',
          is_trans: '',
          whatsapp: '',
          twitter: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          tiktok: '',
          youtube: '',
          email: '',
          city: '',
          cep: '',
          address: '',
          neighbourhood: '',
          number: '',
          complement: '',
          formation: '',
          technical_formation: '',
          idiom: [],
          certification: [],
          is_drt: '',
          drt_number: '',
          is_ceac: '',
          ceac_number: '',
          is_cnpj: '',
          company_name: '',
          cnpj_number: '',
          residency: 'Distrito Federal',
          buttonType
        }}
        onSubmit={() => {}}
      >
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Step7 />
        <Step8 />
        <Step9 />
        <Step10 />
      </FormikStepper>
    </Container>
  )
}

function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues & ButtonProps>) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]

  function isLastStep() {
    return step === childrenArray.length - 1
  }
  
  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
          console.log(values)
        } else {
          setStep((currentStep) => currentStep + 1)
        }
      }}
    >
      <Form>
        <FormTitle level={1} children="Cadastre-se" />
        <SessionContainer>  
          <FormContainer>
            {currentChild}
            <RightSession currentStep={step}>
              <div className="sessionContainer">
                <div className="formSession" onClick={() => setStep(0)}></div>
                <div className="formSession" onClick={() => setStep(1)}></div>
                <div className="formSession" onClick={() => setStep(2)}></div>
                <div className="formSession" onClick={() => setStep(3)}></div>
                <div className="formSession" onClick={() => setStep(6)}></div>
                <div className="formSession" onClick={() => setStep(8)}></div>
              </div>
            </RightSession>
            {step > 0 ? (
              <BackButton
                type="button"
                onClick={() => setStep((currentStep) => currentStep - 1)}
              >
                VOLTAR
              </BackButton>
            ) : null}
            <NextButton type={isLastStep() ? props.initialValues.buttonType : "submit"}  >
              {isLastStep() ? 'FINALIZAR' : 'AVANÇAR'}
            </NextButton>
          </FormContainer>
        </SessionContainer>
      </Form>
    </Formik>
  )
}
