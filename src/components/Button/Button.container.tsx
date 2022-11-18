import React, { FC } from "react"
import { Button } from "./Button"
import { ButtonContainerProps } from "./Button.container"

export const ButtonContainer: FC<ButtonContainerProps> = ({ inputValues, ...props }) => {

    const isOk = (values: Record<string, string>) => {
        const array = Object.values(values).map(value => !!(value as string).trim().length)
        return array.includes(false)
    }

    return <Button isDisabled={isOk(inputValues)} {...props}/>
}

