"use client";
import Image from "next/image";

const HomeBox = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src="/logo.png" alt="Logo" className="h-50 mb-4" />
      <p className="text-lg font-bold text-white">Welcome to Archive App</p>
      <p className="text-gray-300" style={{maxWidth:"500px"}}>
        Archive App is a tool that displays manuscript archives, analyzing them using a YOLO model for text line detection and a TROCR transformer OCR for transcribing each line into raw text.
      </p>
      
      
      <div className="mt-8 space-y-2">
      <p>useful links:</p>
        <a href="https://nationalarchives.se/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 mr-1 text-white py-2 px-4 rounded shadow-md hover:bg-gray-600 transition duration-300">National Archives of Sweden</a>
        <a href="https://ai-riksarkivet.github.io/htrflow/latest/index.html" target="_blank" rel="noopener noreferrer" className="bg-gray-700 mr-1 text-white py-2 px-4 rounded shadow-md hover:bg-gray-600 transition duration-300">HTRFlow</a>
        <a href="https://huggingface.co/medieval-data" target="_blank" rel="noopener noreferrer" className="bg-gray-700 mr-1 text-white py-2 px-4 rounded shadow-md hover:bg-gray-600 transition duration-300">medieval data</a>
        <a href="https://huggingface.co/microsoft/trocr-large-handwritten" target="_blank" rel="noopener noreferrer" className="bg-gray-700 mr-1 text-white py-2 px-4 rounded shadow-md hover:bg-gray-600 transition duration-300">microsoft trocr</a>
      </div>
    </div>
  );
};

export default HomeBox;