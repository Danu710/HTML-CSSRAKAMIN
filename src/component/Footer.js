import React, { useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (setVisible <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <footer aria-label="Site Footer">
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:space-y-16 lg:px-8 justify-center items-center relative">
        <div className="absolute -top-2 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <button
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
            onClick={scrollToTop}>
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 sm:gap-3 md:gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="grid justify-center items-center">
            <h1 className="font-medium text-lightGreen">
              PT. Rakamin Kolektif Madani
            </h1>
            <p className="text-black">
              Jl. Pemuda No. 33B, Kel. Jati, Kec. Pulo Gadung, Jakarta Timur,
              DKI Jakarta 13220
            </p>
          </div>

          <div className="grid justify-center items-center">
            <p className="font-medium text-lightGreen">Feature to Help You</p>

            <nav aria-label="Footer Navigation - Company" className="pt-4">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Explore course
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Digital Career Profiler
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Virtual Internship Experience
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid justify-center items-center">
            <p className="font-medium text-lightGreen">Resources</p>

            <nav aria-label="Footer Navigation - Company" className="pt-4">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Rakamin Tutor
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Refund Policies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Privacy Policy and Terms of Use
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="text-xs text-gray-500 pt-3">
          &copy; Rakamin Academy 2023. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
