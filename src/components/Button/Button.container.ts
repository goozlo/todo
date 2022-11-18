import { ComponentPropsWithoutRef } from "react"

export interface ButtonContainerProps extends ComponentPropsWithoutRef<"button"> {
    inputValues: {
        title: string
        body: string
        date: string
    }
}
