import { NewProducts } from "@/types/addProducts";
import { useState } from "react";
import { addData } from "@/services/addServices";

export default function useAddProducts({
  closeAddModal,
}: {
  closeAddModal: () => void;
}) {
  const [addProductData, setAddProductData] = useState<NewProducts>({
    productTitle: "",
    discount: 0,
    price: 0,
    image: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [productTitleError, setProductTitleError] = useState<string | null>(
    null
  );
  const [priceError, setPriceError] = useState<string | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddProductData({
      ...addProductData,
      [e.target.name]: e.target.value,
    });
  };

  const { productTitle, discount, price, image } = addProductData;

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateProductTitle();
    validatePrice();
    validateDiscount();
    validateImage();

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
        const response = await addData(productTitle, price, discount, image);
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
    handleChange,
    handleSubmit,
    validateProductTitle,
    validatePrice,
    validateDiscount,
    validateImage,
  };
}
