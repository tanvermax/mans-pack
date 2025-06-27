import React, { useState } from "react";
import { FaComment, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-50 fixed bottom-6 right-10 flex flex-col items-end space-y-2">
      {open && (
        <div className="space-y-2 grid grid-rows-2">
          <button
            className="bg-green-500 p-3 rounded-full text-white shadow-lg"
            onClick={() => window.open("https://wa.me/+8801787108216", "_blank")}
          >
            <FaWhatsapp size={24} />
          </button>
          <button
            className="bg-blue-500 p-3 rounded-full text-white shadow-lg"
            onClick={() => window.open("https://m.me/your-facebook-id", "_blank")}
          >
            <FaFacebookMessenger size={24} />
          </button>
        </div>
      )}
      <button
        className="animate-bounce bg-[#25AAE1] p-4 rounded-full text-[#ffffff] shadow-2xl"
        onClick={() => setOpen(!open)}
      >
        <FaComment className="" size={28} />
      </button>
    </div>
  );
};

export default FloatingChat;
