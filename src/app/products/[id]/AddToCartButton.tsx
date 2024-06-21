"use client";

import { useState, useTransition } from "react";
import { incrementProductQuantity } from "./actions";

interface AddToCartButtonProps {
    productId: string,
    incrementProductQuantity: (productId: string) => Promise<void>
}

export default function AddToCartButton({productId}:AddToCartButtonProps ){
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);
    return (
        <div className="flex items-center gap-2">
            <button
            className="btn btn-primary"
            onClick={() => {
                setSuccess(false);
                startTransition(async () => {
                    await incrementProductQuantity(productId);
                    setSuccess(true);
                })
            }}
             >
                ADD TO CART
            </button>
            {isPending && <span className="loading loading-spinner loading-md"/>}
            {!isPending && success && (
                <span className="text-success">Added to Cart.</span>
            )}
        </div>
    );
}