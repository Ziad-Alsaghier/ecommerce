import Image from "next/image";
import Header from "../components/layout/header";
import Carousle from "../components/partial/carousle";
import Features from "../components/partial/features";
import { getCategories } from "../Services/categories.services";
import Categories from "../components/Category/Categories";
import Products from "../components/Products/Products";
import Footer from "@/components/layout/Footer";
import Offers from "@/components/partial/Offers";
// import { useParams } from "next/navigation";

export const metadata = {
  title: "FreshCart",
};

export default function Home() {
  return (
    <>
        <Carousle />
        <Offers />
        <Features />
        <Categories />
        <Products />
    </>
  );
}
