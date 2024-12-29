import { NavLink } from "@/components/common/header";

export default function NavbarMenu({ openNav }: { openNav: boolean }) {
  return (
    <div
      className={`items-center justify-between ${
        openNav ? "absolute w-[200px] right-0 top-[60%] md:static" : "hidden"
      }  w-full md:flex md:w-auto md:order-1`}
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white shadow-md md:shadow-none ">
        <NavLink title="Home" link="/" />
        <NavLink
          title="Category"
          link="/"
          dropdowns={[
            { title: "Category1", link: "./." },
            { title: "Categroy2", link: "./." },
            { title: "Category3", link: "./." },
          ]}
        />

        <NavLink
          title="Our Items"
          link="/"
          dropdowns={[
            { title: "Item1", link: "./." },
            { title: "Item2", link: "./." },
            { title: "Item3", link: "./." },
          ]}
        />
        <NavLink title="Services" link="/" />
      </ul>
    </div>
  );
}
