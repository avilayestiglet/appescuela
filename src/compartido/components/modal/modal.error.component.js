import React from "react";
import utils from "../../utils/utils";

const ModalErrorComponent = ({
  show,
  title = "Error",
  message = [],
  callback
}) => {
  const messageArray = (Array.isArray(message) ? message : [message]).map((x) =>
    utils.translate(x)
  );

  return (
    <div
      className={`fixed top-0 left-0 z-999999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="w-1/3 max-w-142.5 rounded-lg bg-white py-12 px-8 text-center dark:bg-boxdark md:py-15 md:px-17.5 relative">
        <span className="mx-auto inline-block">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.1"
              width="60"
              height="60"
              rx="30"
              fill="#DC2626"
            ></rect>
            <path
              d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
              stroke="#DC2626"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <h3 className="mt-5.5 pb-2 text-xl font-bold text-slate-800  sm:text-2xl">
          {title}
        </h3>
        <label className="mb-10 text-start">
          {messageArray?.map((x, index) => (
            <li key={index} className="mb-2">
              {x}
            </li>
          ))}
        </label>
        <div className="-mx-3 flex flex-wrap gap-y-4">
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              type="button"
              onClick={callback}
              className="block w-full rounded border border-yellow-400 bg-yellow-400 text-black p-3 text-center font-medium transition hover:border-yellow-300 hover:bg-yellow-300 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
            >
              Cerrar
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={callback}
          className="absolute top-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-400 text-white transition hover:bg-slate-500 hover:text-slate-950"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
              className="fill-current stroke-current"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalErrorComponent;
