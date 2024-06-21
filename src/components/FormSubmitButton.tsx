"use client";

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormsubmitButtonPros = {
    children: React.ReactNode,
    className?: string,

} & ComponentProps<"button">


export default function FormsubmitButtonPros(
    {children, className,
    ...props 
}: FormsubmitButtonPros
) {
    const { pending } = useFormStatus();
    return(
        <button
        {...props}
        className={'btn btn-primary btn-block ${className}'}
        type="submit"
        disabled={pending}
        >
            {pending && <span className="loading loading-spinner" />}
            {children}
            </button>
    )
}