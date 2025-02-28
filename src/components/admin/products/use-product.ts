"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Product, ProductForm } from "@/types/admin/product";
import { toast } from "react-hot-toast";
import defaultImage from "@/assets/images/logos/logo2.png";
import { addProduct, updateProduct } from "@/services/admin/addProductServices";
const useAddProduct = ({
  closeModal,
  product,
  refresh,
}: {
  closeModal: () => void;
  product?: Product;
  refresh?: () => void;
}) => {
  const [formData, setFormData] = useState<ProductForm>({
    name: product ? product.name : "",
    description: product ? product.description : "",
    price: product ? product.price : 0,
    stockCount: product ? product.stockCount : 0,
    discountPercent: product ? product.discountPercent : 0,
    categoryId: product ? product.category.id : 0,
  });

  const { name, description, price, stockCount, discountPercent, categoryId } =
    formData;

  const [nameError, setNameError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [priceError, setPriceError] = useState<string | null>(null);
  const [stockCountError, setStockCountError] = useState<string | null>(null);
  const [discountPercentError, setDiscountPercentError] = useState<
    string | null
  >(null);
  const [categoryIdError, setCategoryIdError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const [image, setImage] = useState<string>(
    product ? (product.url ? product.url : defaultImage.src) : defaultImage.src
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const chooseImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFormData({ ...formData, image: file });
    }
  };

  const handleImageChangeClick = () => {
    fileInputRef.current?.click();
  };

  const validateName = () => {
    if (!name) {
      setNameError("Name is required!");
    } else {
      setNameError(null);
    }
  };

  const validateImage = () => {
    // if (event) {
    //   setImageError(null);
    // } else {
    //   if (!featuredImageId) {
    //     setImageError("Image is required!");
    //   } else {
    //     setImageError(null);
    //   }
    // }
  };

  const validateDescription = () => {
    if (!description) {
      setDescriptionError("Description is required!");
    } else {
      setDescriptionError(null);
    }
  };

  const validatePrice = () => {
    if (!price) {
      setPriceError("Price is required!");
    } else {
      setPriceError(null);
    }
  };

  const validateStockCount = () => {
    if (!stockCount) {
      setStockCountError("Stock Count is required!");
    } else {
      setStockCountError(null);
    }
  };

  const validateDiscountPercent = () => {
    if (!discountPercent && discountPercent !== 0) {
      setDiscountPercentError("Discount Percent is required!");
    } else {
      setDiscountPercentError(null);
    }
  };

  const validateCategoryId = () => {
    if (!categoryId) {
      setCategoryIdError("Category is required!");
    } else {
      setCategoryIdError(null);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateName();
    validateImage();
    validateDescription();
    validatePrice();
    validateStockCount();
    validateDiscountPercent();
    validateCategoryId();

    if (
      name &&
      description &&
      price &&
      stockCount &&
      categoryId &&
      nameError === null &&
      categoryIdError === null &&
      priceError === null &&
      stockCountError === null &&
      discountPercentError === null &&
      descriptionError === null &&
      imageError === null
    ) {
      try {
        setIsLoading(true);
        if (product) {
          await updateProduct(formData, product.id);
          toast.success("Product updated successfully", {
            id: "toast",
          });
          if (refresh) refresh();
        } else {
          await addProduct(formData);

          toast.success("Product added successfully", {
            id: "toast",
          });
          if (refresh) refresh();
        }
        closeModal();
      } catch (error: any) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;

            errors.map((error: any) => {
              const key = Object.keys(error)[0];
              const value = error[key];

              if (key === "name") {
                setNameError(value);
              }

              if (key === "image") {
                setImageError(value);
              }

              if (key === "description") {
                setDescriptionError(value);
              }

              if (key === "price") {
                setPriceError(value);
              }

              if (key === "stockCount") {
                setStockCountError(value);
              }

              if (key === "discountPercent") {
                setDiscountPercentError(value);
              }

              if (key === "categoryId") {
                setCategoryIdError(value);
              }
            });
          }
          toast.error(error.response.data.message, {
            id: "toast",
          });
          return;
        }
        toast.error("Something went wrong", {
          id: "toast",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    image,
    name,
    description,
    price,
    stockCount,
    discountPercent,
    categoryId,
    nameError,
    descriptionError,
    priceError,
    stockCountError,
    discountPercentError,
    categoryIdError,
    imageError,
    isLoading,
    handleChange,
    validateName,
    validateImage,
    validateDescription,
    validatePrice,
    validateStockCount,
    validateDiscountPercent,
    validateCategoryId,
    onSubmit,
    chooseImage,
    handleImageChangeClick,
    fileInputRef,
  };
};

export default useAddProduct;
