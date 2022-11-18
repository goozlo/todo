import React, { FC } from "react"
import { DescriptionProps } from "./Description.props"
import styled from "styled-components"

const StyledDescription = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  padding: 10px;
  border-radius: var(--border-radius);
  transform: translate(30px, 100%);
  background: var(--white);
  box-shadow: var(--shadow);
`

export const Description: FC<DescriptionProps> = ({ body, ...props }) => {

    return <StyledDescription children={body} {...props}/>
}

