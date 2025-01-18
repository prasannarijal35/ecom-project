import { Cart } from "@/components/cart";
import { BreadCrumb } from "@/components/common";

export default function page() {
  return (
    <>
      <BreadCrumb title="Cart" />
      <Cart />
    </>
  );
}
