"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Github, Linkedin, Mail, DownloadCloud, Twitter } from "lucide-react";
import Footer from "@/components/Footer";

export default function HomeIntro() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Gamer", "Coder", "Writer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <section className="min-h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-4xl md:text-6xl font-bold"> Your Name</h1>

        <p className="text-xl md:text-2xl text-gray-400">
          I&apos;m a <span ref={typedRef} className="text-blue-400" />
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-gray-400">
          <a
            href="https://letterboxd.com/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current"
              aria-label="Letterboxd"
            >
              <path d="M12,24c6.628,0,12-5.372,12-12S18.628,0,12,0S0,5.372,0,12S5.372,24,12,24z M6.545,16.752H8.29V7.2H6.546V4.8h6.328v2.4h-1.746v9.574h3.925v-2.618h2.839V19.2H6.545V16.752z" />
            </svg>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://X.com/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=:yourMail@gmail.com">
            <Mail className="w-5 h-5 hover:text-white cursor-pointer" />
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href="/" //Your Resume drive link
          download
          className="mt-6 px-5 py-2 border border-gray-400 text-sm rounded-md flex items-center gap-2 hover:bg-[#212121] transition"
        >
          <DownloadCloud className="w-4 h-4" />
          DOWNLOAD RESUME
        </a>
      </section>
      <section className="bg-[#0F0F0F] text-white flex flex-col items-center justify-center p-4 min-h-screen pb-16 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          About Me
        </h2>
        <p className="max-w-2xl text-center text-lg text-gray-300">Hi there.</p>
        <Footer />
      </section>
    </>
  );
}
