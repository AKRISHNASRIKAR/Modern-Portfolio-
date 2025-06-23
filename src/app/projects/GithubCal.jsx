"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCal() {
  const [calendarProps, setCalendarProps] = useState({
    blockSize: 14,
    blockMargin: 4,
    fontSize: 14,
  });

  useEffect(() => {
    const updateCalendarProps = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCalendarProps({ blockSize: 4.33, blockMargin: 2.33, fontSize: 8 }); // Mobile
      } else if (width < 1200) {
        setCalendarProps({ blockSize: 10, blockMargin: 4, fontSize: 12 }); // Tablet
      } else {
        setCalendarProps({ blockSize: 14, blockMargin: 4, fontSize: 14 }); // Desktop
      }
    };

    updateCalendarProps(); // Initial call
    window.addEventListener("resize", updateCalendarProps);

    return () => window.removeEventListener("resize", updateCalendarProps);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  bg-[#010409] px-4 ">
      <h1 className="text-2xl font-bold p-4 mb-4 text-white">Contributions</h1>
      <a href="https://github.com/yourusername">
        <div className="w-fit overflow-x-auto cursor-pointer hover:scale-102 transition transform duration-200">
          <div className="flex items-center justify-center min-w-[320px] max-w-full mx-auto p-4 rounded-2xl border border-white">
            <GitHubCalendar
              username="akrishnasrikar"
              blockSize={calendarProps.blockSize}
              blockMargin={calendarProps.blockMargin}
              fontSize={calendarProps.fontSize}
              color="#7f5af0"
            />
          </div>
        </div>
      </a>

      <p className="mt-4 text-gray-400 text-sm">
        Contributions over the past year
      </p>
    </div>
  );
}
