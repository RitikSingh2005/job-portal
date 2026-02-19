import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className=" relative min-h-screen container mx-auto px-4">
        <Header />
        <Outlet />
      </main>
      <div className="bg-gray-800 text-white-400 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <p className="text-sm hover:text-gray-400 ">
              © {new Date().getFullYear()} Hired. All rights reserved.
            </p>
            <p className="text-sm hover:text-gray-400 ">
              Made by Ritik Singh
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm pt-2">
              <p className="hover:text-gray-400 ">
                Terms of Service
              </p>
              <p className="hover:text-gray-400 ">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
