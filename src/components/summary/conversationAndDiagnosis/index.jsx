import React from 'react'
import { MessageSquareText, ListChecks } from 'lucide-react';

const ConversationAndDiagnosis = () => {
  return (
    <section className="flex gap-8 mt-8">
      <div className="bg-white rounded-xl md:w-2/3 border border-[#06484810] shadow-sm p-4 md:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-7 w-7 rounded-md bg-[#06484810] flex items-center justify-center">
            <span className="text-xs">
              <MessageSquareText size={20} color="blue" />
            </span>
          </span>
          <h2 className="text-sm md:text-base font-semibold text-[#064848]">
            Conversation Transcript
          </h2>
        </div>
        <div className="rounded-xl bg-[06484810] border border-[#06484820] p-3 text-xs md:text-sm text-[#064848] leading-relaxed">
          PT COMPLAIN OF COLD, COUGH, FEVER FOR LAST NIGHT; RS: CLEAR, BP:
          116/70, P:90, ADVICE: DIOMINIC DCA &amp; GRILINTUS BM
        </div>
      </div>

      <div className="md:w-1/3 bg-white rounded-2xl border border-[#06484810] shadow-sm p-4 md:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-7 w-7 rounded-md bg-[#06484810] flex items-center justify-center">
            <span className="text-xs">
              <ListChecks size={20} color="blue" />
            </span>
          </span>
          <h2 className="text-sm md:text-base font-semibold text-[#064848]">
            Differential Diagnosis
          </h2>
        </div>

        <div className="space-y-3 text-xs md:text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-[#064848] font-semibold mb-1">
              Most Likely Disease
            </p>
            <label className="flex items-center gap-2 text-[#064848]">
              <input
                type="checkbox"
                defaultChecked
                className="accent-[#064848]"
              />
              <span>Acute Bronchitis</span>
            </label>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wide text-[#064848] font-semibold mb-1">
              Likely Diseases
            </p>
            <div className="space-y-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#064848]"
                />
                <span>Influenza</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#064848]"
                />
                <span>Pneumonia</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConversationAndDiagnosis