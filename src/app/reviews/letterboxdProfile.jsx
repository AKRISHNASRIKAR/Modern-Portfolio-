import Image from "next/image";
import { MapPinIcon, TwitterIcon } from "lucide-react";

export default function LetterboxdProfile() {
  return (
    <header className="p-6 text-gray-50 rounded-lg shadow-md bg-gradient-to-r from-[#1f252d] to-[#1d232a] cursor-pointer hover:scale-102 transition transform duration-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Side  */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 text-center md:text-left">
          {/* Avatar */}
          <div className="w-28 h-28 relative rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Text and Info */}
          <div className="flex flex-col mt-4 md:mt-0 space-y-1">
            <h1 className="text-3xl font-bold">yourusername</h1>
            <p className="text-gray-400 text-lg">I guess, a cinephile</p>

            {/* Location & Twitter */}
            <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 text-sm mt-2">
              {/* Gotham */}
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                <span>Gotham</span>
              </div>

              {/* Twitter */}
              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <TwitterIcon className="w-4 h-4" />
                <span>@yourusername</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Stats */}
        <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-center mt-4 text-white">
          {/* FILMS */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">2,249</span>
            <span className="text-gray-400 text-sm">FILMS</span>
          </div>

          {/* Separator */}
          <span className="text-gray-600 text-xl ">|</span>

          {/* THIS YEAR */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">59</span>
            <span className="text-gray-400 text-sm">THIS YEAR</span>
          </div>

          {/* Separator */}
          <span className="text-gray-600 text-xl hidden lg:inline">|</span>

          {/* LISTS - only on lg+ */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-3xl font-bold">10</span>
            <span className="text-gray-400 text-sm">LISTS</span>
          </div>

          {/* Separator */}
          <span className="text-gray-600 text-xl hidden lg:inline">|</span>

          {/* FOLLOWING - only on lg+ */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-3xl font-bold">8</span>
            <span className="text-gray-400 text-sm">FOLLOWING</span>
          </div>

          {/* Separator */}
          <span className="text-gray-600 text-xl hidden lg:inline">|</span>

          {/* FOLLOWERS - only on lg+ */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-3xl font-bold">11</span>
            <span className="text-gray-400 text-sm">FOLLOWERS</span>
          </div>
        </div>
      </div>
    </header>
  );
}
