import { ComponentPropsWithoutRef } from "react"

export interface TodoProps extends ComponentPropsWithoutRef<"div"> {
    todoId: number
    title: string
    body: string
    date: string
    isCompleted: boolean
    showDesc: boolean
    toggleDesc: () => void
}
