import React from 'react'
import RecoverForm from '.';
import PasswordChange from "./passwordChange"

import { storiesOf } from "@storybook/react";

const token = "aksjdkasjhdkahdkashdkasjdhaskjdhakjdhksjhda"


storiesOf("Components/Recover", module)
  .add("recover", () => <RecoverForm />)


  storiesOf("Components/Recover", module)
  .add("confirmed email", () => <PasswordChange token={token}/>)
