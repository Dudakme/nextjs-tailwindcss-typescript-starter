import React from "react";

export const FirstCard: React.FC<any> = ({ title, description, children }) => (
  <div className="flex md:mx-5 mx-1 text-left" id="project">
    <div className="block p-5 rounded-lg shadow-md bg-white min-w-full">
      <h5 className="text-gray-900 md:text-l text-xl leading-tight font-medium mb-2">
        {title}
      </h5>
      <p className="text-gray-700 md:text-sm text-sm mb-2">{description}</p>
      {children}
    </div>
  </div>
);
