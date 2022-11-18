import React, { ComponentProps, FC } from "react"
import { InputProps } from "./Input.props"
import styled from "styled-components"

const Container = styled.div<ComponentProps<"div"> & { isError: boolean }>`
  width: 100%;
  //min-width: 400px;
  background: var(--white);
  outline: ${props => props.isError && "1px solid pink"};
  border-radius: var(--border-radius);
  padding: 0 20px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  background: transparent;
  border: none;
  outline: none;
`

export const Input: FC<InputProps> = ({ style, width, isError, ...props }) => {
    return (
        <Container style={{ width, ...style }} isError={isError}>
            <StyledInput {...props}/>
        </Container>
    )
}


