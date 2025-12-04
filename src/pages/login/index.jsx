import React, { useState } from "react";
import doctorimg from "../../assets/images/doctorimg.jpg";
import Layout from "../../layout";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:8000/api";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg =
          data.detail || "Invalid username or password. Please try again.";
        toast.error(msg);
        throw new Error(msg);
      }

      toast.success("Login successful!");
      navigate("/conversationdashboard");
      console.log("Login successful!");
    } catch (err) {
      console.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <Layout>
        <div className="w-full  bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${doctorimg})` }}
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-6 md:px-12">
            <div className="w-full max-w-sm">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#064848] mb-1">
                Login
              </h1>
              <p className="text-sm text-[#06484880] mb-8">
                Log in to your account.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#064848]">
                    username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-[#06484820] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#064848]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-full border border-[#06484820] px-4 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-xs text-[#064848] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* <button
                  type="submit"
                  className="w-full rounded-full bg-[#064848] hover:bg-[#097171] text-white text-sm font-medium py-2.5 mt-2 shadow-md transition"
                >
                  Log In
                </button> */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#064848] hover:bg-[#097171] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-medium py-2.5 mt-2 shadow-md transition"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>

                <button
                  type="button"
                  className="w-full rounded-full border border-[#06484820] bg-white text-sm font-medium py-2.5 flex items-center justify-center gap-2 shadow-sm hover:bg-[#06484810] transition"
                >
                  <span className=" rounded-full bg-white text-black  flex items-center justify-center text-[12px]">
                    (New)
                  </span>
                  <p className="text-blue-700 flex justify-between items-center gap-1">
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
