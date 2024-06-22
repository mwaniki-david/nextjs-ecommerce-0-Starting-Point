import { Product } from "@prisma/client";
import Pricetag from "./OriceTag";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    Product: Product;

}

export default function ProductCard({Product}: ProductCardProps){
    const isNew = Date.now() - new Date(Product.createdAt).getTime() < 1000 * 60 * 60 *24 * 7;


    return(
        <Link
         href={"/products/" + Product.id}
        className="card w-full bg-base-100 hover:shadow-xl transition"
        >
            <figure>
                <Image
                src={Product.imageurl}
                alt={Product.name}
                width={800}
                height={400}
                className="h-48 object-cover"

                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {Product.name}
                </h2>
                {isNew && <div className="badge badge-secondary">NEW</div>}
                <p>{Product.description}</p>
                <Pricetag price={Product.price}/>
            </div>
        </Link>
    )

}