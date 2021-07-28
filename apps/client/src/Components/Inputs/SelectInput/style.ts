import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall } from "Utils/breakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  .divider {
    position: absolute;
    width: 1px;
    height: 22px;
    background-color: #C4C4C4;

    right: 3.03rem;
    top: 25%;

    z-index: 1;

    ${DesktopSmall(css`
      height: 18px;
      right: 2rem;
    `)}
  }

  select {
    width: 12.4rem;
    height: 2.55rem;
    appearance: none;
    border: 0;
    padding-left: 0.83rem;
    padding-right: 0.83rem;
    color: #C4C4C4;

    ${DesktopSmall(css`
      width: 8.33rem;
      height: 1.8rem;
      font-size: var(--font-size-short);
    `)}
    
    &:hover {
      cursor: pointer;
    }

    option {
      color: black;

      ${DesktopSmall(css`
        font-size: var(--font-size-short);
      `)}
    }
  }

  img {
    position: absolute;
    z-index: 1;
    width: 24px;
    height: 24px;

    right: 0.64rem;
    top: 25%;

    pointer-events: none;

    ${DesktopSmall(css`
      width: 16px;
      height: 16px;
    `)}
  }
`

export const Input = styled(Field)``
