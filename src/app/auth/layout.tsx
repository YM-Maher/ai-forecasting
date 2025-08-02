import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#A28ED1]">
      <div className="w-[80%] h-[75%] flex rounded-3xl overflow-hidden">
        <div className="w-[60%] h-full flex flex-col justify-center items-center bg-[#5F44A6]">
          <div className="w-[70%]">
            <h1 className="text-[48px] font-bold text-[#fff]">Welcome back!</h1>
            <p className="w-[400px] text-[24px] text-[#fff]">
              You can sign in to access with your existing account
            </p>
          </div>
        </div>
        <div className="w-[40%] h-full px-18 flex items-center bg-[#fff]">
          {children}
        </div>
      </div>
    </div>
  );
}
