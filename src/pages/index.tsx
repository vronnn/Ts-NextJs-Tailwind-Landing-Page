import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Intro from "./sections/Intro";
import Hero from "./sections/Hero";
import Layout from "./components/Layout";
import { useState } from "react";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [active, setActive] = useState("home");
  const onUpdateActiveLink = (value: string) => {
    setActive(value);
  };
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`inter.className gradient-bg ${darkMode ? "dark" : ""}`}>
        <div
          className={`flex justify-center px-4 py-16 lg:h-screen dark:bg-zinc-900`}
        >
          <div className="px-4 py-10 box-border relative self-center blur-bg dark:blur-dark-bg">
            {/* navbar */}
            <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 dark:text-slate-100">
              <div className="container">
                <div className="flex item-center justify-between relative pt-2">
                  <div className="px-4 w-20 translate-y-1 translate-x-1 bg-[url('/zen2.png')] bg-contain bg-no-repeat lg:translate-y-5 dark:bg-[url('/dark-zen.png')]">
                    <a
                      href="#home"
                      className="font-bold text-lg text-primary block py-6"
                    >
                      {/* <img src="/zen3.png" alt="" width={80} /> */}
                    </a>
                  </div>
                  <div className="flex items-center px-4">
                    <button
                      id="hamburger"
                      name="hamburger"
                      type="button"
                      className="block absolute right-4 lg:hidden"
                    >
                      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left dark:bg-slate-100"></span>
                      <span className="hamburger-line transition duration-300 ease-in-out dark:bg-slate-100"></span>
                      <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left dark:bg-slate-100"></span>
                    </button>

                    {/* toggle */}
                    <label className="switch translate-y-[3px] relative right-12 lg:right-0 xl:right-4">
                      <input
                        type="checkbox"
                        onClick={() => {
                          setDarkMode(!darkMode);
                        }}
                      />
                      <span className="slider"></span>
                    </label>

                    <nav
                      id="nav-menu"
                      className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                    >
                      <ul className="block lg:flex ">
                        <li className="group">
                          <a
                            href="#home"
                            className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary group-hover:border-b-2 group-hover:border-slate-700 ${
                              active === "home"
                                ? "border-b-2 border-slate-700 dark:border-slate-100"
                                : "border-none"
                            }`}
                            onClick={() => onUpdateActiveLink("home")}
                          >
                            Beranda
                          </a>
                        </li>
                        <li className="group">
                          <a
                            href="#about"
                            className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary group-hover:border-b-2 group-hover:border-slate-700 ${
                              active === "about"
                                ? "border-b-2 border-slate-700 dark:border-slate-100"
                                : "border-none"
                            }`}
                            onClick={() => onUpdateActiveLink("about")}
                          >
                            Tentang Saya
                          </a>
                        </li>
                        <li className="group">
                          <a
                            href="#portfolio"
                            className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary group-hover:border-b-2 group-hover:border-slate-700 ${
                              active === "portofolio"
                                ? "border-b-2 border-slate-700 dark:border-slate-100"
                                : "border-none"
                            }`}
                            onClick={() => onUpdateActiveLink("portofolio")}
                          >
                            Portfolio
                          </a>
                        </li>
                        <li className="group">
                          <a
                            href="#clients"
                            className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary group-hover:border-b-2 group-hover:border-slate-700 ${
                              active === "clients"
                                ? "border-b-2 border-slate-700 dark:border-slate-100"
                                : "border-none"
                            }`}
                            onClick={() => onUpdateActiveLink("clients")}
                          >
                            Clients
                          </a>
                        </li>
                        <li className="group">
                          <a
                            href="#blog"
                            className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary group-hover:border-b-2 group-hover:border-slate-700 ${
                              active === "blog"
                                ? "border-b-2 border-slate-700 dark:border-slate-100"
                                : "border-none"
                            }`}
                            onClick={() => onUpdateActiveLink("blog")}
                          >
                            Blog
                          </a>
                        </li>
                        <li className="group">
                          <a
                            href="#contact"
                            className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary group-hover:border-b-2 group-hover:border-slate-700 ${
                              active === "contact"
                                ? "border-b-2 border-slate-700 dark:border-slate-100"
                                : "border-none"
                            }`}
                            onClick={() => onUpdateActiveLink("contact")}
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <Layout>
              {/* left box */}
              <Intro></Intro>
              {/* right box */}
              <Hero></Hero>
            </Layout>
            {/* footer */}
          </div>
        </div>
      </main>
    </>
  );
}
