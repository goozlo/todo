import React, { FC } from "react"
import { ButtonProps } from "./Button.props"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 100%;
  height: 32px;
  padding: 0 20px;
  background: var(--white);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
`

export const Button: FC<ButtonProps> = ({ isDisabled, ...props }) => {

    return <StyledButton disabled={isDisabled} {...props}/>
}




