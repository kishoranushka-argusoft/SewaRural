import React, { useMemo, useState, useEffect } from "react";
import { patients } from "./data";
import { User, IdCardLanyard, Pause, Mic, Smartphone, ChevronDown, ArrowLeft, X } from "lucide-react";
import Layout from "../../layout";
import { Link } from "react-router-dom";
import { Dot } from "lucide-react";

const ConversationCollection = () => {
  const [searchName, setSearchName] = useState("");
  const [searchOpd, setSearchOpd] = useState("");
  const [selectedId, setSelectedId] = useState(
    patients[2]?.id ?? patients[0]?.id
  );
  const [selectedPatient, setSelectedPatient] = useState(
    patients[2] ?? patients[0] ?? null
  );
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const filteredPatients = useMemo(() => {
    return patients.filter((p) => {
      const matchesName = p.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const matchesOpd = p.opdId
        .toLowerCase()
        .includes(searchOpd.toLowerCase());
      return (
        (searchName ? matchesName : true) && (searchOpd ? matchesOpd : true)
      );
    });
  }, [searchName, searchOpd]);

  useEffect(() => {
    if (
      filteredPatients.length &&
      !filteredPatients.some((p) => p.id === selectedId)
    ) {
      const first = filteredPatients[0];
      setSelectedId(first.id);
      setSelectedPatient(first);
    }
  }, [filteredPatients, selectedId]);

  const handleSelectPatient = (p) => {
    setSelectedId(p.id);
    setSelectedPatient(p);
    setIsSummaryOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Layout>
        <header className="flex items-center justify-between mb-6">
          <button className="rounded-full bg-[#064848] flex gap-2 text-white text-sm font-medium px-4 py-2 shadow-md hover:bg-[#097171]">
            <ArrowLeft size={18} />
            <Link to="/conversationdashboard">Dashboard</Link>
          </button>

          <div className="flex items-center gap-3">
            <button className="h-10 w-20 rounded-xl bg-[#064848] hover:bg-[#097171] text-white flex items-center justify-center shadow-md">
              <span className="text-lg">
                <Smartphone />
              </span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
          <section className="bg-white rounded-2xl shadow-sm p-4 md:p-5 border border-[#06484810] flex flex-col h-full">
            <h2 className="text-base md:text-lg font-semibold text-[#064848] mb-3">
              Find or Select Patient
            </h2>

            <div className="space-y-3">
              <div className="relative">
                <span className="absolute left-2 top-1/4 -tranblue-y-1/2 text-[#06484840] text-sm">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full rounded-xl border border-[#06484820] bg-[#06484810] px-9 py-2 text-sm outline-none focus:ring-2 focus:ring-[#06484870] focus:border-[#06484870]"
                />
              </div>

              <div className="relative">
                <span className="absolute left-2 top-1/4 -tranblue-y-1/2 text-[#06484840] text-sm">
                  <IdCardLanyard size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Enter OPD ID"
                  value={searchOpd}
                  onChange={(e) => setSearchOpd(e.target.value)}
                  className="w-full rounded-xl border border-[#06484820] bg-[#06484810] px-9 py-2 text-sm outline-none focus:ring-2 focus:ring-[#06484870] focus:border-[#06484870]"
                />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-4 md:p-5 border border-[#06484810] flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base md:text-lg font-semibold text-[#064848]">
                Conversation Action
              </h2>
              <span className="text-xs text-[#064848]">
                Patient: {selectedPatient?.name ?? "None selected"}
              </span>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-[#064848] hover:bg-[#097171] text-white text-sm font-medium px-4 py-2.5 shadow-sm">
                <span>
                  {" "}
                  <Mic size={18} />
                </span>
                <span>Start Recording</span>
                <span className="text-xs">
                  <ChevronDown />
                </span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0B8484] hover:bg-[#0EAAAA] text-white text-sm font-medium px-4 py-2.5 shadow-sm">
                <span>
                  <Pause size={18} />
                </span>
                <span>Pause Recording</span>
              </button>

              <p className="text-xs text-[#097171] mt-2">
                Recording helps you capture the full consultation. You can
                highlight important points directly in the patient summary.
              </p>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-sm border border-[#06484810] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#06484810] flex items-center justify-between">
            <h3 className="text-sm md:text-base font-semibold text-[#064848]">
              Search Results
            </h3>
            <span className="text-xs text-[#097171]">
              {filteredPatients.length} patients
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#064848] text-white text-xs uppercase tracking-wide">
                <tr>
                  <th className="w-10 px-4 py-3"></th>
                  <th className="px-4 py-3">Patient Name</th>
                  <th className="px-4 py-3">OPD ID</th>
                  <th className="px-4 py-3">Visit Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((p, idx) => {
                  const isSelected = p.id === selectedId;
                  return (
                    <tr
                      key={p.id}
                      onClick={() => handleSelectPatient(p)}
                      className={`cursor-pointer transition ${
                        isSelected
                          ? "bg-[#06484810]"
                          : idx % 2 === 0
                          ? "bg-white"
                          : "bg-[#06484820]"
                      } hover:bg-[#06484830]`}
                    >
                      <td
                        className="px-4 py-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <input
                          type="radio"
                          checked={isSelected}
                          onChange={() => handleSelectPatient(p)}
                          className="accent-[#064848]"
                        />
                      </td>
                      <td className="px-4 py-3 font-medium text-[#064848]">
                        {p.name}
                      </td>
                      <td className="px-4 py-3 text-[#064848]">{p.opdId}</td>
                      <td className="px-4 py-3 text-[#064848] text-xs md:text-sm">
                        {p.visitDate}
                      </td>
                    </tr>
                  );
                })}
                {filteredPatients.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-6 text-center text-sm text-red-500"
                    >
                      No patients found. Try a different search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {isSummaryOpen && selectedPatient && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full mx-4 overflow-hidden">
              <div className="bg-[#064848] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#0EAAAA]">
                    Patient Summary
                  </p>
                  <h2 className="text-lg font-semibold">
                    {selectedPatient.name}
                  </h2>
                </div>
                <button
                  onClick={() => setIsSummaryOpen(false)}
                  className="text-[#0EAAAA] hover:text-white text-xl leading-none"
                >
                  <X color="white`  `"/>
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm text-[#064848]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-black uppercase">
                      OPD ID
                    </p>
                    <p className="font-medium">{selectedPatient.opdId}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-black uppercase">
                      Age / Gender
                    </p>
                    <p className="font-medium">
                      {selectedPatient.age} Years / {selectedPatient.gender}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-black uppercase">
                      Last Visit
                    </p>
                    <p>{selectedPatient.lastVisit}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-black uppercase">
                      Total Visits
                    </p>
                    <p>{selectedPatient.totalVisits}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#06484810] space-y-2">
                  <p className="text-xs font-semibold text-black uppercase">
                    Chronic Conditions
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#06484810] px-3 py-1 text-xs font-medium text-[#064848]">
                    <span>
                      <Dot color="#064848" />
                    </span>
                    <span>{selectedPatient.chronicConditions}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-3 border-t border-[#06484810]">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-black uppercase">
                      Recent Complaint
                    </p>
                    <p>{selectedPatient.recentComplaint}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-black uppercase">
                      Medications
                    </p>
                    <p>{selectedPatient.medications}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#06484810] space-y-2">
                  <p className="text-xs font-semibold text-black uppercase">
                    Allergies
                  </p>
                  <p>{selectedPatient.allergies}</p>
                </div>

                <div className="pt-3 border-t border-[#06484810] space-y-2">
                  <p className="text-xs font-semibold text-black uppercase">
                    Doctor Notes
                  </p>
                  <div className="rounded-2xl bg-[#06484810] px-4 py-3 text-[#064848] text-sm leading-relaxed">
                    {selectedPatient.doctorNotes}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#06484810] flex items-center justify-end gap-3">
                <button
                  onClick={() => setIsSummaryOpen(false)}
                  className="text-sm px-4 py-2 rounded-full border border-[#06484830] text-[#064848] hover:bg-white"
                >
                  Close
                </button>
                <button className="text-sm px-4 py-2 rounded-full bg-[#064848] text-white font-medium hover:bg-[#097171]">
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default ConversationCollection;
