'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Focus from "./components/Focus";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Focus />
    <Work />
    <Contact />
    </>
  );
}
