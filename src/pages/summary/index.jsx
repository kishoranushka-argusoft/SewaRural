import React from "react";
import Layout from "../../layout";
import { ChevronLeft } from "lucide-react";
import Header from "../../components/summary/header";
import ConversationAndDiagnosis from "../../components/summary/conversationAndDiagnosis";
import ClinicalNotes from "../../components/summary/clinicalNotes";
import SoapNotes from "../../components/summary/soapNotes";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full border-b border-[#06484820] bg-white">
        <div className=" px-4 py-3 flex items-center justify-between">
          <Link to="/conversationdashboard">
            <button className="text-xs md:text-sm flex gap-1 text-[#064848] font-semibold hover:text-[#064848]">
              <ChevronLeft size={20} />
              Previous Page
            </button>
          </Link>
          <button className="rounded-full bg-[#064848] text-white text-xs md:text-sm font-medium px-4 py-2 shadow-sm">
            Dashboard
          </button>
        </div>
      </div>
      <Layout>
        <Header />
        <ConversationAndDiagnosis />
        <ClinicalNotes />
        <SoapNotes />
      </Layout>
    </div>
  );
};

export default Summary;
