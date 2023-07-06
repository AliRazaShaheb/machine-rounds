import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold flex justify-center items-center">
        {"Password Generator"}
      </h1>
      <div className="flex justify-center items-center my-4">{children}</div>
    </div>
  );
};

export default Layout;
