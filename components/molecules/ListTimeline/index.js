import React from "react";

const ListTimeline = ({ date, isActive }) => {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white shrink-0">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
      </div>
      <div className="mt-3 sm:pr-8">
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
          {isActive ? (
            <span className="text-blue1 font-bold">{date}</span>
          ) : (
            `${date}`
          )}
        </time>
      </div>
    </li>
  );
};

export default ListTimeline;
