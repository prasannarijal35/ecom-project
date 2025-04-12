import { BreadCrumb } from "@/components/common";
import { ProductDetails, SimilarProducts } from "@/components/product";
import { getSingleProduct } from "@/services/productServices";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Generated using nextjs",
};

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  let productResponse;
  try {
    productResponse = await getSingleProduct(slug);
  } catch (error) {
    console.error(error);
  }
  if (productResponse?.status !== 200) {
    return notFound();
  }
  return (
    <>
      <BreadCrumb
        title={productResponse.data.name}
        subTitle="Products"
        subTitleLink="/products"
      />
      <ProductDetails product={productResponse.data} />
      <SimilarProducts product={productResponse.data} />
    </>
  );
}
