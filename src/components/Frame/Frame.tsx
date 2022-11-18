import React, { FC } from "react"
import styled from "styled-components"
import { FrameProps } from "./Frame.props"

const StyledFrame = styled.div`
  padding: 20px;
  border-radius: var(--border-radius);
  background: var(--main);
  box-shadow: var(--shadow);
`

export const Frame: FC<FrameProps> = ({ ...props }) => <StyledFrame {...props}/>


