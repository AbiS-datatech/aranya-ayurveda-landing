import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Shipping from "@/components/Shipping";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <About />
      <Benefits />
      <Testimonials />
      <Shipping />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
