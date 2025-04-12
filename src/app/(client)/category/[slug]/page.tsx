import { BreadCrumb } from "@/components/common";
import { CategoryProducts } from "@/components/product";
import { getSingleCategory } from "@/services/categoryService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Ecommerce Webiste | Category page",
  description: "Ecommerce website built with Next.js",
};

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  let productResponse;
  try {
    productResponse = await getSingleCategory(slug);
  } catch (error) {
    console.log(error);
  }

  if (productResponse?.status !== 200) {
    return notFound();
  }
  return (
    <>
      <BreadCrumb title={productResponse.data.name} />
      <CategoryProducts category={productResponse.data} />
    </>
  );
}
