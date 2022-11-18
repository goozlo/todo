import { ChangeEvent, ComponentPropsWithoutRef } from "react"

interface InputHook {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface FormProps extends ComponentPropsWithoutRef<"form"> {
    titleInput: InputHook
    bodyInput: InputHook
    dateInput: InputHook
}

