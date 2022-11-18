import { ComponentPropsWithoutRef, ReactNode } from "react"

export interface FrameProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode
}
