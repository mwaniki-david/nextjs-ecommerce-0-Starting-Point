import React from "react";
import { prisma } from '@/lib/db/prisma';
import FormsubmitButtonPros from "@/components/FormSubmitButton";
import { redirect } from "next/navigation";


export const metadata = {
    title: "Add product - My Duka"
}
async function addProduct(formData: FormData){
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageurl = formData.get("imageurl")?.toString();
    const price =Number (formData.get("price") || 0);

    if (!name || !description || !imageurl || !price){
       throw Error("missing required fields");
    }

    await prisma.product.create({
        data: { name, description, imageurl, price },
    });
    redirect ('/');
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">add product</h1>
      <form action={addProduct}>
        <input
        required
        name="name"
        placeholder="Product name"
        className="input input-bordered mb-3 w-full"
        />
        <textarea
        required
        name="description"
        placeholder="description"
        className="textarea textarea-bordered mb-3 w-full"
        />
        <input
        required
        name="imageurl"
        placeholder="image URL"
        type="url"
        className="input input-bordered mb-3 w-full"
        />
        <input
        required
        name="price"
        placeholder="Price"
        type="number"
        className="input input-bordered mb-3 w-full"
        />
        <FormsubmitButtonPros className=" btn-block ">
            add product
        </FormsubmitButtonPros>
        
      </form>
    </div>
  );
};

export default AddProductPage;
