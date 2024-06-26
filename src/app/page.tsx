
import Link from "next/link";
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { prisma } from '@/lib/db/prisma';


export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {id: "desc"},
  });

  return (

    <div>
      <div className='hero rounded-xl bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <Image
          src={products[0].imageurl}
          alt={products[0].name}
          width={400}
          height={800}
          className='w-full max-w-sm rounded-lg shadow-2xl'
          priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className='py-6'>{products[0].description}</p>
            <Link
            href={"/products/" + products[0].id}
            className="btn-primary btn"
            >
              check it out
            </Link>
          </div>

        </div>

      </div>

      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.slice(1).map((products) =>(
          <ProductCard Product={products} key={products.id} />
        ))}
      </div>
    </div>
  );
}