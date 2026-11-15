import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Process from "@/components/Process";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Presentation />
      <Process />
      <Features />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
