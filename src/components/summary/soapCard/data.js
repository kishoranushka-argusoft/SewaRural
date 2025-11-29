import { CircleCheckBig, User, Logs, NotepadText } from "lucide-react"


export const SoapCardData = [
  {
    title: "Subjective",
    colorClass: "bg-blue-50",
    icon: User,
    items: [
      "Patient mentioned storing and transcribing recordings.",
      "Patient demonstrated using a demo for recording and pausing.",
    ],
  },
  {
    title: "Objective",
    colorClass: "bg-pink-50",
    icon: Logs,
    items: [
      "No specific medical symptoms or physical examination findings mentioned.",
    ],
  },
  {
    title: "Assessment",
    colorClass: "bg-green-50",
    icon: CircleCheckBig,
    items: [
      "No medical assessment possible due to lack of relevant information.",
    ],
  },
  {
    title: "Plan    ",
    colorClass: "bg-orange-50",
    icon: NotepadText,
    items: [
      "Since no medical information was provided, no specific plan can be formulated.",
    ],
  },
];