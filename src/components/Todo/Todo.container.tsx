import React, { FC } from "react"
import { Todo } from "./Todo"
import { TodoProps } from "./Todo.props"

export const TodoContainer: FC<Omit<TodoProps, "showDesc" | "toggleDesc">> = ({ todoId, isCompleted, ...props }) => {
    const [completed, setCompoeted] = React.useState(isCompleted)
    const [showDesc, setShowDesc] = React.useState(false)

    const toggleDesc = () => props.body.length && setShowDesc(prev => !prev)

    const toggleCompleted = () => setCompoeted(prev => !prev)


    return (
        <Todo
            isCompleted={completed}
            showDesc={showDesc}
            toggleDesc={toggleDesc}
            onClick={toggleCompleted}
            {...props}/>
    )
}

