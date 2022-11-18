import React from "react"
import styled from "styled-components"
import { Form, Frame, TodoList } from "../../components"

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Home = () => {
    return (
        <StyledHome>
            <Frame>
                <Form/>
                <hr style={{ margin: "20px 0" }}/>
                <TodoList/>
            </Frame>
        </StyledHome>
    )
}

