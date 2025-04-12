// import { NavLink } from "@/components/common/header";

// export default function NavbarMenu({ openNav }: { openNav: boolean }) {
//   return (
//     <div
//       className={`items-center justify-between ${
//         openNav ? "absolute w-[200px] right-0 top-[60%] md:static" : "hidden"
//       }  w-full md:flex md:w-auto md:order-1`}
//     >
//       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white shadow-md md:shadow-none ">
//         <NavLink title="Home" link="/" />
//         <NavLink
//           title="Category"
//           link="/"
//           dropdowns={[
//             { title: "Category1", link: "./." },
//             { title: "Categroy2", link: "./." },
//             { title: "Category3", link: "./." },
//           ]}
//         />

//         <NavLink
//           title="Our Items"
//           link="/"
//           dropdowns={[
//             { title: "Item1", link: "./." },
//             { title: "Item2", link: "./." },
//             { title: "Item3", link: "./." },
//           ]}
//         />
//         <NavLink title="Services" link="/" />
//       </ul>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Category } from "@/types/category";
import { getAllCategories } from "@/services/categoryService";

export default function MenuContainer({ navbarOpen }: { navbarOpen: boolean }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchCategories = async () => {
    try {
      const response = await getAllCategories({
        page: 1,
        size: 10,
        search: "",
      });
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div
      className={`items-center justify-between ${
        navbarOpen ? "absolute w-full top-[100%] md:static" : "hidden"
      } w-full md:flex md:w-auto md:order-1`}
    >
      <ul className="flex flex-col p-4 mt-1 md:mt-0 md:p-0  font-medium border border-gray-100 rounded-lg bg-white md:space-x-6 rtl:space-x-reverse md:flex-row  md:border-0 shadow-custom md:shadow-none">
        <NavLink title="Home" link="/" />
        <NavLink title="About Us" link="/about-us" />
        <NavLink
          title="Category"
          link="#"
          dropdowns={categories.map((category) => ({
            title: category.name,
            link: `/category/${category.slug}`,
          }))}
        />
        <NavLink title="Products" link="/products" />
        <NavLink title="Contact Us" link="/contact-us" />
      </ul>
    </div>
  );
}
