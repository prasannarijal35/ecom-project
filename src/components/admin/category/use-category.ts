"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Category, CategoryForm } from "@/types/admin/category";
import { toast } from "react-hot-toast";
import defaultImage from "@/assets/images/logos/logo2.png";
import {
  addCategory,
  updateCategory,
} from "@/services/admin/addCategoryServices";
const useAddCategory = ({
  closeModal,
  category,
  refresh,
}: {
  closeModal: () => void;
  category?: Category;
  refresh?: () => void;
}) => {
  const [formData, setFormData] = useState<CategoryForm>({
    name: category ? category.name : "",
  });

  const { name } = formData;

  const [nameError, setNameError] = useState<string | null>(null);

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
    category
      ? category.url
        ? category.url
        : defaultImage.src
      : defaultImage.src
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateName();
    validateImage();
    if (name && nameError === null && imageError === null) {
      try {
        setIsLoading(true);
        if (category) {
          await updateCategory(formData, category.id);
          toast.success("Category update successfully", {
            id: "toast",
          });
          if (refresh) refresh();
        } else {
          await addCategory(formData);

          toast.success("Category Added successfully", {
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
    nameError,
    isLoading,
    handleChange,
    validateName,
    onSubmit,
    chooseImage,
    handleImageChangeClick,
    fileInputRef,
  };
};

export default useAddCategory;
