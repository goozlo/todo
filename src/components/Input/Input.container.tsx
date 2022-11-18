import React, { FC } from "react"
import { Input } from "./Input"
import { InputProps } from "./Input.props"

export const InputContainer: FC<Omit<InputProps, "isError">> = ({ ...props }) => {
    const [isError, setIsError] = React.useState(false)
    const ref = React.useRef(true)
    const { value } = props

    React.useEffect(() => {
        if (!ref.current) {
            const isError = !(value as string).trim().length
            setIsError(isError)
        }
        ref.current = false
    }, [value])

    return <Input isError={isError} {...props}/>
}

