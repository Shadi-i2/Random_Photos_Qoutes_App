import React from "react";
import ReactDOM from "react-dom";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useClipboard } from "react-haiku";

const Modal = ({ show, quote, close }) => {
  if (!show) return null;
  const clipboard = useClipboard({ timeout: 2000 });
  const { content, author } = quote;
  return ReactDOM.createPortal(
    <div className="absolute inset-0 z-0 flex items-center justify-center w-full backdrop-css">
      <div
        className="absolute inset-0 z-10 w-full h-full bg-gray-800 opacity-50"
        onClick={close}
      ></div>
      <div className="z-20 flex flex-col items-center justify-center w-11/12 px-8 py-8 bg-white rounded-md md:w-1/2 shadow-lg">
        <button
          className="border-2 font-semibold p-2 mb-3 rounded-full
          text-gray-500 hover:text-gray-700 self-end"
          onClick={() => clipboard.copy(content)}
        >
          {clipboard.copied ? (
            <FaCheck className="text-green-500 border-green-700" />
          ) : (
            <FaCopy />
          )}
        </button>
        <blockquote className="flex flex-col font-mono">
          <p className="text-slate-900 border-l-8 border-slate-600 pl-3 mb-4">
            <q>{content}</q>
          </p>
          <cite className="self-center text-gray-500"> -{author}</cite>
        </blockquote>
        <button
          className="border-2 font-semibold mt-7 px-5 py-1 rounded-full bg-gray-200
          text-slate-900 hover:bg-slate-600 hover:text-gray-50 duration-500"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
