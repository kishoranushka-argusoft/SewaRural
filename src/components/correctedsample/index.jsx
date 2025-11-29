// src/CorrectedSamplesAnalysis.jsx
import React from "react";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { correctedSamplesTrend, editingBreakdown } from "./data";

const COLORS = {
  transcript: "#22c55e", 
  diagnosis: "#0ea5e9", 
  subjective: "#fbbf24", 
  objective: "#f97316", 
  assessment: "#a855f7", 
  plan: "#1e40af", 
};

const pieColors = [
  "#fb7185", 
  "#38bdf8", 
  "#fbbf24", 
  "#f97316", 
  "#a855f7", 
  "#22c55e", 
];

const CorrectedSamplesAnalysis = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden flex flex-col">
          <div className="px-4 py-3 bg-[#064848] text-white ">
            <h2 className="text-sm md:text-base font-semibold ">
              Corrected Samples Analysis
            </h2>
          </div>

          <div className="px-4 pt-4">
            <h3 className="text-sm md:text-base font-semibold text-[#064848] text-center mb-2">
              Edited Samples Trends
            </h3>
          </div>

          <div className="flex-1 px-4 pb-4">
            <div className="w-full h-72 md:h-[40vh]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={correctedSamplesTrend}
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
                    allowDecimals={true}
                    tick={{ fontSize: 10 }}
                    label={{
                      value: "Changes",
                      angle: -90,
                      position: "insideLeft",
                      style: { fontSize: 10 },
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={20} />

                  <Area
                    type="monotone"
                    dataKey="transcriptChanges"
                    stroke={COLORS.transcript}
                    fill="#bbf7d0"
                    fillOpacity={0.6}
                    name="Transcript Changes"
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />

                  <Line
                    type="monotone"
                    dataKey="diagnosisChanges"
                    stroke={COLORS.diagnosis}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                    name="Diagnosis Changes"
                  />

                  <Line
                    type="monotone"
                    dataKey="subjectiveChanges"
                    stroke={COLORS.subjective}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                    name="Subjective Changes"
                  />

                  <Line
                    type="monotone"
                    dataKey="objectiveChanges"
                    stroke={COLORS.objective}
                    strokeWidth={1.5}
                    dot={false}
                    name="Objective Changes"
                  />
                  <Line
                    type="monotone"
                    dataKey="assessmentChanges"
                    stroke={COLORS.assessment}
                    strokeWidth={1.5}
                    dot={false}
                    name="Assessment Changes"
                  />
                  <Line
                    type="monotone"
                    dataKey="planChanges"
                    stroke={COLORS.plan}
                    strokeWidth={1.5}
                    dot={false}
                    name="Plan Changes"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden flex flex-col">
          <div className="px-4 py-3 bg-[#064848] text-white">
            <h2 className="text-sm md:text-base font-semibold">
              Edited Samples Analysis
            </h2>
          </div>

          <div className="p-4 flex-1 flex flex-col items-center justify-center">
            <h3 className="text-sm md:text-base font-semibold text-slate-800 mb-4">
              Editing Percentage Breakdown
            </h3>

            <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4">
              {/* Pie chart */}
              <div className="w-40 h-40 md:w-52 md:h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={editingBreakdown}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      innerRadius="45%"
                      paddingAngle={2}
                    >
                      {editingBreakdown.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={pieColors[index % pieColors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                {editingBreakdown.map((item, idx) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-sm"
                      style={{ backgroundColor: pieColors[idx] }}
                    />
                    <span className="capitalize text-slate-700">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrectedSamplesAnalysis;
