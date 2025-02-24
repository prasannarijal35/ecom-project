"use client";
import { Category } from "@/types/category";
import { useState } from "react";
import { CategoryForm } from "@/types/category";
import { addCategory, updateCategory } from "@/services/addCategoryServices";

export default function useCategory({
  closeCategoryModal,
  category,
}: {
  closeCategoryModal: () => void;
  category?: Category;
}) {
  const [addCategoryData, setAddCategoryData] = useState<CategoryForm>({
    title: category ? category.title : "",
    image: category ? category.image : "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [categoryNameError, setCategoryNameError] = useState<string | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAddCategoryData({
      ...addCategoryData,
      [name]: value,
    });
  };

  const { image, title } = addCategoryData;

  const validateImage = () => {
    if (!image) {
      setImageError("Image is required");
    } else {
      setImageError(null);
    }
  };

  const validateCategoryName = () => {
    if (!title) {
      setCategoryNameError("Category name is required");
    } else {
      setCategoryNameError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateCategoryName();
    validateImage();
    if (title && !categoryNameError && image && !imageError) {
      try {
        setLoading(true);
        let response;
        if (category) {
          response = await updateCategory(title, image);
        } else {
          response = await addCategory(title, image);
        }
        console.log(response);
        closeCategoryModal();
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    addCategoryData,
    loading,
    categoryNameError,
    imageError,
    handleChange,
    handleSubmit,
    validateCategoryName,
    validateImage,
  };
}
