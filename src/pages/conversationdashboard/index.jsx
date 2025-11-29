import React from "react";
import Layout from "../../layout";
import CorrectedSamplesAnalysis from "../../components/correctedsample";
import Samples from "../../components/samples";
import ConversationsTable from "../../components/conversationstable";

const conversationdashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Layout>
        <Samples />
        <CorrectedSamplesAnalysis />
        <ConversationsTable />
      </Layout>
    </div>
  );
};

export default conversationdashboard;
