import React, { ChangeEvent, FormEvent } from "react"
import { Form } from "./Form"

export const FormContainer = () => {
    const [titleValue, setTitleValue] = React.useState("")
    const [bodyValue, setBodyValue] = React.useState("")
    const [dateValue, setDateValue] = React.useState("")

    const getTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value)
    }

    const getBodyValue = (e: ChangeEvent<HTMLInputElement>) => {
        setBodyValue(e.target.value)
    }

    const getDateValue = (e: ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.target.value)
    }

    const sendOnServer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Form
            titleInput={{
                value: titleValue,
                onChange: getTitleValue
            }}
            bodyInput={{
                value: bodyValue,
                onChange: getBodyValue
            }}
            dateInput={{
                value: dateValue,
                onChange: getDateValue
            }}
            onSubmit={sendOnServer}
        />
    )
}

