import React from 'react'

const ClinicalNotes = () => {
  return (
    <section className="mt-8 bg-white rounded-2xl border border-[#06484810] shadow-sm p-4 md:p-6 space-y-5">
      <h2 className="text-base md:text-lg font-semibold text-[#064848]">
        Clinical Notes
      </h2>

      <div className="space-y-4">
        <SectionLabel>Patient Information</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Input label="Name" placeholder="Enter patient's name" />
          <Input label="Gender" placeholder="Male" />
          <Input label="Age" placeholder="Age" />
          <Input label="Added by" placeholder="Enter patient by" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Input label="Added on" placeholder="Enter on" />
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Vitals</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <Input label="Weight (kg)" placeholder="Weight (kg)" />
          <Input
            label="Height (Feet/Inches)"
            placeholder="Enter (Feet/inches)"
          />
          <Input label="BMI" placeholder="BMI" />
          <Input label="BP Systolic/Diastolic" placeholder="Position" />
          <Input label="SpO2 (%)" placeholder="SpO2" />
          <Input label="Pulse (bpm)" placeholder="Pulse (bpm)" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Input label="Resp. Rate (/min)" placeholder="Rate" />
          <Input label="Temperature" placeholder="Temperature" />
          <Input label="Route" placeholder="Route" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Textarea label="Complaints" placeholder="Enter additional notes" />
        <Textarea label="Procedure" placeholder="Enter procedure details" />
      </div>

      <div className="space-y-3">
        <SectionLabel>Prescription</SectionLabel>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs md:text-sm border border-[#06484820] rounded-xl overflow-hidden">
            <thead className="bg-[#06484810]">
              <tr className="text-[#064848]">
                <th className="px-3 py-2 text-left">Medicine</th>
                <th className="px-3 py-2 text-left">Free</th>
                <th className="px-3 py-2 text-left">Frequency</th>
                <th className="px-3 py-2 text-left">Duration (days)</th>
                <th className="px-3 py-2 text-left">Quantity</th>
                <th className="px-3 py-2 text-left">Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#06484810]">
                <td className="px-3 py-2">Diominic DCA</td>
                <td className="px-3 py-2">Yes</td>
                <td className="px-3 py-2">BID</td>
                <td className="px-3 py-2">5</td>
                <td className="px-3 py-2">10</td>
                <td className="px-3 py-2">After meals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-wide text-[#064848]">
    {children}
  </p>
);

const Input = ({ label, placeholder }) => (
  <div className="space-y-1">
    <label className="text-[11px] font-medium text-[#064848]">{label}</label>
    <input
      className="w-full rounded-lg border border-[#06484820] bg-[#06484810] px-3 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-[#06484850] focus:border-[#06484870]"
      placeholder={placeholder}
    />
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div className="space-y-1">
    <label className="text-[11px] font-medium text-[#064848]">{label}</label>
    <textarea
      rows={3}
      className="w-full rounded-lg border border-[#06484820] bg-[#06484810] px-3 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-[#06484850] focus:border-[#06484870] resize-none"
      placeholder={placeholder}
    />
  </div>
);

export default ClinicalNotes