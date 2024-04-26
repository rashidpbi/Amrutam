import React from "react";
function Book() {
  return (
    <div className="bg-book  h-full md:h-[500px] bg-cover bg-no-repeat p-12 text-center items-center justify-center">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-2xl font-bold mb-5 text-custom">
          Ready to restore harmony in your mind, body and spirit?
        </div>
        <button className="bg-green rounded-[8px] p-4 text-custom">
          Book a Consultation
        </button>
      </div>
    </div>
  );
}

export default Book;
