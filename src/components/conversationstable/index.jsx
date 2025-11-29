import React, { useMemo, useState } from "react";
import { conversations } from "./data";
import {
  Check,
  CircleEllipsis,
  Dot,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const FILTER_OPTIONS = [
  "All",
  "Today",
  "Yesterday",
  "Last 7 Days",
  "This Month",
  "Custom Range", 
];

const parseDateTime = (str) => {
  if (!str) return null;
  const [datePart, timePart, ampm] = str.split(" ");
  if (!datePart || !timePart || !ampm) return null;

  const [day, month, year] = datePart.split("/").map(Number);
  const [hourStr, minuteStr] = timePart.split(":");
  let hour = Number(hourStr);
  const minute = Number(minuteStr);

  if (ampm === "PM" && hour !== 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;

  return new Date(year, month - 1, day, hour, minute);
};

const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const ConversationsTable = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterType, setFilterType] = useState("All");

  const filteredConversations = useMemo(() => {
    if (filterType === "All" || filterType === "Custom Range") {
      return conversations;
    }

    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    if (filterType === "Today") {
      return conversations.filter((c) => {
        const d = parseDateTime(c.createdOn);
        return d && isSameDay(d, now);
      });
    }

    if (filterType === "Yesterday") {
      const startOfYesterday = new Date(startOfToday);
      startOfYesterday.setDate(startOfToday.getDate() - 1);
      return conversations.filter((c) => {
        const d = parseDateTime(c.createdOn);
        return d && isSameDay(d, startOfYesterday);
      });
    }

    if (filterType === "Last 7 Days") {
      const sevenDaysAgo = new Date(startOfToday);
      sevenDaysAgo.setDate(startOfToday.getDate() - 6); 
      return conversations.filter((c) => {
        const d = parseDateTime(c.createdOn);
        return d && d >= sevenDaysAgo && d <= now;
      });
    }

    if (filterType === "This Month") {
      return conversations.filter((c) => {
        const d = parseDateTime(c.createdOn);
        return (
          d &&
          d.getFullYear() === now.getFullYear() &&
          d.getMonth() === now.getMonth()
        );
      });
    }

    return conversations;
  }, [filterType]);

  const totalEntries = filteredConversations.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredConversations.slice(start, start + pageSize);
  }, [currentPage, pageSize, filteredConversations]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFilterSelect = (option) => {
    setFilterType(option);
    setFilterOpen(false);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen mt-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
          <h1 className="text-lg md:text-xl font-semibold text-[#064848]">
            Conversations
          </h1>

          <div className="relative">
            <button
              onClick={() => setFilterOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#064848] text-white text-sm font-medium px-3 py-2 shadow-sm"
            >
              <span>Filters</span>
              <ChevronDown size={16} />
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg z-10">
                {FILTER_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleFilterSelect(opt)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-slate-700 hover:bg-slate-100"
                  >
                    <span>{opt}</span>
                    {filterType === opt && (
                      <Check size={14} className="text-[#064848]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#064848] text-white text-xs uppercase tracking-wide">
                <th className="px-4 py-3 text-left w-16">ID</th>
                <th className="px-4 py-3 text-left">Summary</th>
                <th className="px-4 py-3 text-left w-48">Created On</th>
                <th className="px-4 py-3 text-center w-28">Reviewed</th>
                <th className="px-4 py-3 text-center w-20">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`${idx % 2 === 0 ? "bg-white" : "bg-[#06848410]"}`}
                >
                  <td className="px-4 py-3 text-[#064848] font-medium">
                    {item.id}
                  </td>
                  <td className="px-4 py-3 text-[#064848]">
                    <p className="line-clamp-1 md:line-clamp-2 max-w-xl">
                      {item.summary}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-[#064848] whitespace-nowrap">
                    {item.createdOn}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.reviewed ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-sm">
                        <Check size={18} />
                      </span>
                    ) : (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#06484820] text-slate-400 text-sm">
                        <Dot size={18} />
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="inline-flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-[#06484820]">
                      <CircleEllipsis size={20} />
                    </button>
                  </td>
                </tr>
              ))}

              {paginatedData.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-sm text-slate-500"
                  >
                    No conversations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 text-xs md:text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 rounded-md border border-slate-300 disabled:opacity-50"
            >
              <ChevronsLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === page
                    ? "bg-[#064848] text-white border-slate-800"
                    : "border-slate-300 hover:bg-[#06484820]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 rounded-md border border-[#06484830] disabled:opacity-50"
            >
              <ChevronsRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-[#064848] text-white rounded-md px-2 py-1 text-xs outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <span>
              entries out of <span className="font-medium">{totalEntries}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationsTable;
