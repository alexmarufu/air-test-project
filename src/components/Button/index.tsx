import { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"

export const Button = (props: ComponentPropsWithoutRef<"button">) => {
    return (
        <button {...props} type="button" className={twMerge("bg-blue rounded-full text-white font-bold p-1 px-2", props.className)} />
    )
}