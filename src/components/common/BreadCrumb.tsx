import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/images/sliderimages/sliderTwo.jpeg";

interface Props {
  title: string;
  subTitle?: string;
  subTitleLink?: string;
}
export default function BreadCrumb({ title, subTitle, subTitleLink }: Props) {
  return (
    <section
      id="breadcrumbs"
      className="w-full relative py-10 bg-gradient-to-r from-primary to-secondary"
    >
      <div className="absolute w-full inset-0">
        <Image
          src={banner}
          alt="lauda"
          quality={100}
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className="container relative flex justify-center items-center flex-col gap-2">
        <div className="flex justify-center items-center gap-2 text-gray-200 font-semibold ">
          <Link href={"./."} className="hover:text-white">
            Home
          </Link>
          {subTitle && (
            <>
              <span>/</span>
              <Link href={subTitleLink ?? ""} className="hover:text-white">
                {" "}
                {subTitle}
              </Link>
            </>
          )}
          <span>/</span> <span>{title}</span>
        </div>
        <span className="text-4xl text-gray-200 font-medium">{title}</span>
      </div>
    </section>
  );
}
