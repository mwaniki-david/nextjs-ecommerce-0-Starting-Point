"use server";
import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(ProductId: string, quantity: number) {
    const cart = (await getCart()) ?? (await createCart());

    const articleInCart = cart.items.find((item) => item.ProductId === ProductId);

    if (quantity === 0){
        if (articleInCart){
            await prisma.cartItem.delete({
                where: { id: articleInCart.id },
                
            })    
        }
    } else {
        if (articleInCart) {
            await prisma.cartItem.update({
                where: { id: articleInCart.id },
                data: {quantity}
            })
        } else{
            await prisma.cartItem.create({
                data: {
                    cartId: cart.id,
                    ProductId,
                    quantity,
                }
            })
        }
    }
    revalidatePath("/cart");
}