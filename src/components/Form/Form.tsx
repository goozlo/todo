import React, { FC } from "react"
import { Input, Button } from ".."
import { FormProps } from "./Form.props"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Form: FC<FormProps> = ({ titleInput, bodyInput, dateInput, ...props }) => {

    const values = {
        title: titleInput.value,
        body: bodyInput.value,
        date: dateInput.value
    }

    return (
        <form {...props}>
            <Container>
                <Input style={{ marginRight: "10px", width: "280px" }} {...titleInput}/>
                <Button children='Добавить todo' style={{ width: "220px" }} inputValues={values}/>
            </Container>
            <Container style={{ marginTop: "10px" }}>
                <Input style={{ marginRight: "10px", width: "360px" }} {...bodyInput}/>
                <Input type="date" width='140px' {...dateInput}/>
            </Container>
        </form>
    )
}

