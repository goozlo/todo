import { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    isError: boolean
}
