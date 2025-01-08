import { BreadCrumb } from "@/components/common";
import { ProductDetails, SimilarProducts } from "@/components/product";
import { getSingleProduct } from "@/services/productServices";
import { notFound } from "next/navigation";

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
      <BreadCrumb title="Jacket" subTitle="Products" subTitleLink="/products" />
      <ProductDetails product={productResponse.data} />
      <SimilarProducts />
    </>
  );
}
