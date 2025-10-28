'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Focus from "./components/Focus";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// Fungsi helper untuk mendapatkan state awal dengan aman (aman untuk server-side)
const getInitialDarkMode = () => {
  // Jika di server (window tidak ada), default ke false (light mode)
  if (typeof window === 'undefined') {
    return false;
  }

  // Jika di client, cek localStorage dan preferensi sistem
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark') {
    return true;
  }
  if (storedTheme === 'light') {
    return false;
  }
  // Jika localStorage kosong, gunakan preferensi sistem
  return prefersDark;
};

export default function Home() {

  // Perbaikan 2: Hitung state awal menggunakan fungsi helper
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

  // Perbaikan 3: Hapus useEffect pertama yang menyebabkan error.
  // Kita tidak memerlukannya lagi karena useState sudah diinisialisasi dengan benar.

  // Effect ini (yang kedua) sudah benar.
  // Tugasnya adalah *menyinkronkan* perubahan state React ke DOM/localStorage.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Gunakan setItem
    } else {
      document.documentElement.classList.remove('dark');
      // Lebih baik set ke 'light' daripada string kosong
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]); // Hanya berjalan ketika 'isDarkMode' berubah

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Focus isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}