export type Category = {
  id: number;
  name: string;
  slug: string;
  url: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CategoryForm = {
  name: string;
  image?: File;
};
