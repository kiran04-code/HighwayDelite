import React from "react";

const GoogleButton = () => {
  return (
    <button
      className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition font-medium text-gray-700"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google Logo"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
};

export default GoogleButton;
