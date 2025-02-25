import { ProductForm } from "@/types/product";
import { useState } from "react";
import { addData, updateData } from "@/services/admin/addServices";
import { Product } from "@/types/product";

export default function useAddProducts({
  closeAddModal,
  product,
}: {
  closeAddModal: () => void;
  product?: Product;
}) {
  const [addProductData, setAddProductData] = useState<ProductForm>({
    productTitle: product ? product.title : "",
    discount: product ? product.discount : 0,
    price: product ? product.price : 0,
    image: "",
    description: product ? product.description : "",
    category: product ? { name: product.category.name } : { name: "" },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [productTitleError, setProductTitleError] = useState<string | null>(
    null
  );
  const [priceError, setPriceError] = useState<string | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddProductData({
      ...addProductData,
      [e.target.name]: e.target.value,
    });
  };

  const { productTitle, discount, price, image, description } = addProductData;

  const validateProductTitle = () => {
    if (!productTitle) {
      setProductTitleError("Product title is required");
    } else {
      if (productTitle.length < 3) {
        setProductTitleError("Product title must be at least 3 characters");
      } else {
        setProductTitleError(null);
      }
    }
  };

  const validatePrice = () => {
    if (price <= 0) {
      setPriceError("Price must be a positive number");
    } else {
      setPriceError(null);
    }
  };

  const validateDiscount = () => {
    if (discount < 0 || discount > 100) {
      setDiscountError("Discount must be between 0 and 100");
    } else {
      setDiscountError(null);
    }
  };

  const validateImage = () => {
    if (!image) {
      setImageError("Image URL is required");
    } else {
      setImageError(null);
    }
  };
  const validateDescription = () => {
    if (!description) {
      setDescriptionError("product description needed");
    } else {
      setDescriptionError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateProductTitle();
    validatePrice();
    validateDiscount();
    validateImage();
    validateDescription();

    if (
      productTitle &&
      !productTitleError &&
      price > 0 &&
      !priceError &&
      discount >= 0 &&
      discount <= 100 &&
      !discountError &&
      image &&
      !imageError
    ) {
      try {
        setLoading(true);
        let response;
        if (product) {
          response = await updateData(
            productTitle,
            price,
            discount,
            image,
            description
          );
        } else {
          response = await addData(
            productTitle,
            price,
            discount,
            image,
            description
          );
        }
        console.log(response);
        closeAddModal();
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    addProductData,
    loading,
    productTitleError,
    priceError,
    discountError,
    imageError,
    descriptionError,
    handleChange,
    handleSubmit,
    validateProductTitle,
    validatePrice,
    validateDiscount,
    validateImage,
    validateDescription,
  };
}
