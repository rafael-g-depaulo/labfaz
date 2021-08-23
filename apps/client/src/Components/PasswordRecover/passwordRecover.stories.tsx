import React from 'react'
import RecoverForm from '.';
import PasswordChange from "./passwordChange"

import { storiesOf } from "@storybook/react";


storiesOf("Components/Recover", module)
  .add("recover", () => <RecoverForm />)


  storiesOf("Components/Recover", module)
  .add("confirmed email", () => <PasswordChange />)
