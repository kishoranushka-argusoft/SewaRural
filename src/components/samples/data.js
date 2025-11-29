import { Logs, ChartColumn,CalendarDays, SquareCheck, Ban, Plus } from "lucide-react";

export const summaryStatsData = [
{
  icon: Logs,
  title: "Total Samples",
  num: 29
},
{
  icon: ChartColumn,
  title: "Average Daily Samples",
  num: 2
},
{
  icon:CalendarDays,
  title: "Today's Samples",
  num: 0
},
{
  icon: SquareCheck,
  title: "Edited Samples",
  num: 13
},
{
  icon: Ban,
  title: "Unedited Samples",
  num: 16
},


]


// Time-series data for the chart
// dateLabel is what we show on X axis, year & month used for filters
export const samplesTimeline = [
  {
    id: 1,
    dateLabel: "11/03/2024",
    year: 2024,
    month: 3,
    totalSamples: 2,
    editedSamples: 1,
  },
  {
    id: 2,
    dateLabel: "13/03/2024",
    year: 2024,
    month: 3,
    totalSamples: 1,
    editedSamples: 0,
  },
  {
    id: 3,
    dateLabel: "17/10/2024",
    year: 2024,
    month: 10,
    totalSamples: 4,
    editedSamples: 2,
  },
  {
    id: 4,
    dateLabel: "18/10/2024",
    year: 2024,
    month: 10,
    totalSamples: 3,
    editedSamples: 3,
  },
  {
    id: 5,
    dateLabel: "21/04/2025",
    year: 2025,
    month: 4,
    totalSamples: 2,
    editedSamples: 1,
  },
  {
    id: 6,
    dateLabel: "06/06/2025",
    year: 2025,
    month: 6,
    totalSamples: 1,
    editedSamples: 0,
  },
  {
    id: 7,
    dateLabel: "29/07/2025",
    year: 2025,
    month: 7,
    totalSamples: 1,
    editedSamples: 0,
  },
  {
    id: 8,
    dateLabel: "12/08/2025",
    year: 2025,
    month: 8,
    totalSamples: 3,
    editedSamples: 1,
  },
  {
    id: 9,
    dateLabel: "20/11/2025",
    year: 2025,
    month: 11,
    totalSamples: 4,
    editedSamples: 1,
  },
  {
    id: 10,
    dateLabel: "27/11/2025",
    year: 2025,
    month: 11,
    totalSamples: 6,
    editedSamples: 2,
  },
];

// Recent samples list (right side)
export const recentSamples = [
  { id: 25, name: "Sample 25", status: "edited" },
  { id: 24, name: "Sample 24", status: "unedited" },
  { id: 23, name: "Sample 23", status: "edited" },
  { id: 22, name: "Sample 22", status: "unedited" },
  { id: 21, name: "Sample 21", status: "edited" },
  { id: 20, name: "Sample 20", status: "unedited" },
];
