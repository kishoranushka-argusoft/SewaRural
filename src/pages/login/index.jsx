import React from "react";
import doctorimg from "../../assets/images/doctorimg.jpg";
import Layout from "../../layout";
import medplatlogo from "../../assets/images/medplatlogo.png";
import sewarurallogo from "../../assets/images/sewa-ruralLOGO.png";
import techologo from "../../assets/images/techoLOGO.ico";
import { Download } from "lucide-react";


const Login = () => {
  return (
    <div className="bg-gray-50">
      <Layout>
        <div className="min-h-screen flex items-center justify-center ">
          <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="hidden md:block md:w-1/2 relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${doctorimg})` }}
              />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-6 md:px-12">
              <div className="w-full max-w-sm">
                <div className=" flex items-center justify-center mb-6 ">
                  <img className="w-40" src={medplatlogo} alt="" />
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-1">
                  Login
                </h1>
                <p className="text-sm text-slate-500 mb-8">
                  Log in to your account.
                </p>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-full border border-slate-200 px-4 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 mt-2 shadow-md transition"
                  >
                    Log In
                  </button>

                  <button
                    type="button"
                    className="w-full rounded-full border border-slate-200 bg-white text-sm font-medium py-2.5 flex items-center justify-center gap-2 shadow-sm hover:bg-slate-50 transition"
                  >
                    <span className=" rounded-full bg-white text-black  flex items-center justify-center text-[12px]">
                      (New)
                    </span>
                    <p className="text-blue-500 flex justify-between items-center gap-1">
                      <Download size={14} />
                      Download Mobile Application (4.1.38)
                    </p>
                  </button>
                  <p className="text-center text-gray-500">
                    Release Date: May 7, 2025
                  </p>
                </form>

                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-full flex items-center justify-center gap-8">
                      <img src={sewarurallogo} alt="" className="w-24"/>
                      <img src={techologo} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
