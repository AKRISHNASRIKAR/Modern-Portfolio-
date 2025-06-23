"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ strings = ["Hello, world!"] }) {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 45,
      backSpeed: 40,
      backDelay: 500,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
    });

    return () => typed.destroy(); // Cleanup
  }, [strings]);

  return (
    <span
      ref={typedRef}
      className="text-2xs md:text-xl text-white font-semibold font-jakarta  "
    />
  );
}
