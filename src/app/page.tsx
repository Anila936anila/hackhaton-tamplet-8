import Image from "next/image";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import HotProduct from "./components/Hotproduct";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <Companies />
      <Categories />
      <HotProduct />
      
      
    </div>
  );
}
