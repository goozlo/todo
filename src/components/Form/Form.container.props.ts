import { ChangeEvent } from "react"

export interface FormContainerProps {
    titleInput: [string, (e: ChangeEvent<HTMLInputElement>) => void]
    bodyInput: [string, (e: ChangeEvent<HTMLInputElement>) => void]
}
