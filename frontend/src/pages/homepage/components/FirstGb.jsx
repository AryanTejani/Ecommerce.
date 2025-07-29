import React from "react";
import cross from "../../../assets/icons/cross.png";

const FirstGb = () => {
  return (
    // The outer container remains full-width with a black background
    <div className="w-full bg-black py-2">
      {/* The inner container handles the content alignment and responsive padding.
        - `max-w-[1440px]`: Sets the maximum width for the content.
        - `mx-auto`: Centers the container.
        - `px-4 sm:px-6 lg:px-24`: This is the key for responsiveness.
          - `px-4`: Default padding for mobile (1rem or 16px on each side).
          - `sm:px-6`: Padding for small screens and up (1.5rem or 24px).
          - `lg:px-24`: Padding for large screens and up (6rem or ~96px, close to your original 100px).
      */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 flex justify-between items-center gap-4">
        
        {/* The text container.
          - `flex-grow`: Allows it to take up available space.
          - `text-center`: Keeps the text centered within its available space.
          - `text-xs sm:text-sm lg:text-base`: Responsive font size.
            - `text-xs`: Extra small text on mobile.
            - `sm:text-sm`: Small text on small screens.
            - `lg:text-base`: Base size on large screens (adjust if you need it larger).
        */}
        <h1 className="font-satoshi font-light text-white text-center text-xs sm:text-sm lg:text-base flex-grow">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline font-medium cursor-pointer">Sign Up Now</span>
        </h1>

        {/* The close button container. `flex-shrink-0` prevents it from shrinking. */}
        <div className="flex-shrink-0">
          <button aria-label="Close announcement">
            <img src={cross} alt="close" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstGb;
