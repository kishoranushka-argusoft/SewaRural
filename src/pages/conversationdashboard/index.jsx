import React from "react";
import Layout from "../../layout";
import CorrectedSamplesAnalysis from "../../components/correctedsample";
import Samples from "../../components/samples";
import ConversationsTable from "../../components/conversationstable";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:8000/api";

const conversationdashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/logout/`, {
        method: "POST",
        credentials: "include",
      });

      navigate("/login");
      console.log("Logged out");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Layout>
        <div className="flex justify-end ">
          <button
            onClick={handleLogout}
            className="mb-8 bg-[#064848] hover:bg-[#097171] p-2 px-6 text-white font-semibold shadow-sm  rounded-full"
          >
            Logout
          </button>
        </div>
        <Samples />
        <CorrectedSamplesAnalysis />
        <ConversationsTable />
      </Layout>
    </div>
  );
};

export default conversationdashboard;
