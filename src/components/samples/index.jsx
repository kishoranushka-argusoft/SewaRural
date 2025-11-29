import React, { useMemo, useState } from "react";
import Layout from "../../layout";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { summaryStatsData, samplesTimeline, recentSamples } from "./data";
import { Plus, Check, Dot, Pencil } from "lucide-react";

const Samples = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const years = useMemo(
    () => Array.from(new Set(samplesTimeline.map((d) => d.year))).sort(),
    []
  );

  const months = [
    { value: 1, label: "Jan" },
    { value: 2, label: "Feb" },
    { value: 3, label: "Mar" },
    { value: 4, label: "Apr" },
    { value: 5, label: "May" },
    { value: 6, label: "Jun" },
    { value: 7, label: "Jul" },
    { value: 8, label: "Aug" },
    { value: 9, label: "Sep" },
    { value: 10, label: "Oct" },
    { value: 11, label: "Nov" },
    { value: 12, label: "Dec" },
  ];

  const filteredData = useMemo(
    () =>
      samplesTimeline.filter((d) => {
        const yearMatch =
          selectedYear === "all" ? true : d.year === Number(selectedYear);
        const monthMatch =
          selectedMonth === "all" ? true : d.month === Number(selectedMonth);
        return yearMatch && monthMatch;
      }),
    [selectedYear, selectedMonth]
  );

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {summaryStatsData.map((ele) => (
            <div className="bg-[#064848] px-4 py-2 rounded-md flex justify-right gap-4 text-lg">
              <div className=" flex items-center ">
                <div className=" flex items-center rounded-md  p-4 bg-[#AEE8FE30]">
                  <ele.icon color="white" size={36} />
                </div>
              </div>
              <div className="text-white flex flex-col justify-center">
                <p className="font-medium text-sm">{ele.title}</p>
                <p className="font-bold text-2xl">{ele.num}</p>
              </div>
            </div>
          ))}
          <button className="bg-[#032626] px-4 py-2 rounded-md flex justify-right gap-4 text-lg">
            <div className=" flex items-center">
              <div className=" flex items-center rounded-md  p-4 bg-[#AEE8FE30] ">
                <Plus color="white" size={36} />
              </div>
            </div>
            <div className="text-white flex flex-col justify-center">
              <p className="font-medium text-md">Add New Samples</p>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden flex flex-col">
            <div className="px-4 py-3 bg-[#064848] text-white flex items-center justify-between">
              <h2 className="text-sm md:text-base font-semibold">
                Samples Collected
              </h2>

              <div className="flex items-center gap-2 text-xs">
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="rounded-md bg-[#032626] px-2 py-1 border border-[#437E89] outline-none"
                >
                  <option value="all">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="rounded-md bg-[#032626] px-2 py-1 border border-[#437E89] outline-none"
                >
                  <option value="all">All Months</option>
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="px-4 pt-4">
              <h3 className="text-sm md:text-base font-semibold text-[#064848] text-center mb-2">
                Total Samples and Edited Samples
              </h3>
            </div>

            <div className="flex-1 px-4 pb-4">
              <div className="w-full h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={filteredData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="dateLabel"
                      angle={-35}
                      textAnchor="end"
                      height={50}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis
                      allowDecimals={false}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "Samples",
                        angle: -90,
                        position: "insideLeft",
                        style: { fontSize: 10 },
                      }}
                    />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={14} />

                    <Area
                      type="monotone"
                      dataKey="totalSamples"
                      stroke="#16a34a"
                      fill="#bbf7d0"
                      fillOpacity={0.6}
                      name="Total Samples"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />

                    <Line
                      type="monotone"
                      dataKey="editedSamples"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Edited Samples"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-green-50 overflow-hidden flex flex-col">
            <div className="px-4 py-3 bg-[#064848] text-white">
              <h2 className="text-sm md:text-base font-semibold">
                Recent Samples
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto">
              {recentSamples.map((sample, idx) => (
                <div
                  key={sample.id}
                  className={`flex items-center justify-between px-4 py-3 text-sm ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#06484810]"
                  }`}
                >
                  <span className="text-gray-800">{sample.name}</span>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={sample.status} />
                    <button className="text-blue-400 hover:text-green-600 text-xs underline">
                      <Pencil size={16} color="#064848" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 border-t border-green-50 bg-green-50 text-center">
              <button className="text-xs md:text-sm font-semibold text-[#064848] hover:underline">
                See All Samples
              </button>
            </div>
          </div>
        </div>
        
    </div>
  );
};

const StatCard = ({ label, value, color, icon }) => (
  <div
    className={`flex flex-col justify-between rounded-xl ${color} text-white p-3 md:p-4 shadow-md`}
  >
    <div className="flex items-center justify-between">
      <span className="text-2xl">{icon}</span>
    </div>
    <div className="mt-3">
      <p className="text-xs md:text-sm opacity-80">{label}</p>
      <p className="text-lg md:text-2xl font-semibold mt-1">{value}</p>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  if (status === "edited") {
    return (
      <span className="rounded-full w-[5vw] justify-center bg-emerald-50 text-emerald-700 text-xs px-3 py-1 flex items-center gap-1">
        <span>
          <Check size={20} />
        </span>{" "}
        Edited
      </span>
    );
  }
  if (status === "unedited") {
    return (
      <span className="rounded-full w-[5vw] justify-center bg-amber-50 text-amber-700 text-xs px-3 py-1 flex items-center gap-1">
        <span>
          <Dot />
        </span>{" "}
        Pending
      </span>
    );
  }
  return (
    <span className="rounded-full bg-[#064848] text-green-600 text-xs px-3 py-1">
      {status}
    </span>
  );
};

export default Samples;
