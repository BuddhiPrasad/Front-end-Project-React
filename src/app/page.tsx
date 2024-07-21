import Cat from "@/components/Cat";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Navvarrootcode from "@/components/Navvarrootcode";
import Pricing from "@/components/Pricing";
import WrapperContainer from "@/components/WrapperContainer";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navvarrootcode/>
      
      <Hero/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features/>
        <FAQ/>
        <Pricing/>
        <Cat/>
        <Footer/>
      </div>
    </>
  );
}
