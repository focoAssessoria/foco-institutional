"use client";

import { useState } from "react";

interface MedicationCalculatorProps {
  openMedicationCalculator: boolean;
  setOpenMedicationCalculator: (isOpen: boolean) => void;
}
export function MedicationCalculator({
  openMedicationCalculator,
  setOpenMedicationCalculator,
}: MedicationCalculatorProps) {
  const [initialCount, setInitialCount] = useState(10000);
  const [reasons, setReasons] = useState([
    {
      id: 1,
      reason: "Pneumonia < 60 dias",
      avg: 2,
      amount: 0,
    },
    {
      id: 2,
      reason: "Pneumonia > 60 dias",
      avg: 1,
      amount: 0,
    },
    {
      id: 3,
      reason: "Refugo Cocho Grave",
      avg: 1,
      amount: 0,
    },
    {
      id: 4,
      reason: "Refugo Cocho Leve",
      avg: 0.5,
      amount: 0,
    },
    {
      id: 5,
      reason: "Casco < 60 dias",
      avg: 0.5,
      amount: 0,
    },
    {
      id: 6,
      reason: "Casco > 60 dias",
      avg: 0.5,
      amount: 0,
    },
    {
      id: 7,
      reason: "Tristeza",
      avg: 0.7,
      amount: 0,
    },
    {
      id: 8,
      reason: "Diarreia",
      avg: 0.3,
      amount: 0,
    },
    {
      id: 9,
      reason: "Polio",
      avg: 0.2,
      amount: 0,
    },
    {
      id: 10,
      reason: "Intoxicação",
      avg: 0.1,
      amount: 0,
    },
    {
      id: 11,
      reason: "Lesão",
      avg: 0.1,
      amount: 0,
    },
  ]);

  console.log("reasons", reasons);

  return (
    <>
      {openMedicationCalculator && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-[999999999999999999999] flex w-full items-center justify-center text-center transition-opacity duration-300 ease-in-out"
          style={{ opacity: openMedicationCalculator ? 1 : 0 }}
        >
          <button
            onClick={() => setOpenMedicationCalculator(false)}
            className="absolute z-[9999999999] h-full w-full bg-black/20 backdrop-blur"
          />
          <div className="relative z-[999999999999] flex flex-col items-center justify-center">
            <div className="relative z-[99999999] flex max-h-[80vh] w-[95%] flex-col overflow-y-scroll rounded-md border border-gray-200 bg-white p-2 text-black shadow-md xs:max-w-[370px] sm:max-w-[500px] md:overflow-y-auto lg:w-[800px] lg:max-w-none">
              <div className="grid w-full grid-cols-7 border">
                <div className="col-span-7 grid grid-cols-7">
                  <span className="col-span-3 border-r p-2">
                    Entradas Projetadas
                  </span>
                  <div className="relative col-span-4 p-2 text-[#8F1220]">
                    <input
                      className="absolute left-0 top-0 col-span-2 h-full w-full bg-[#f4f4f4] p-2 outline-none"
                      value={initialCount}
                      onChange={(e) => setInitialCount(Number(e.target.value))}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      Animais
                    </span>
                  </div>
                </div>
                <div className="col-span-7 grid grid-cols-7 border border-black">
                  <div className="col-span-3 p-2 font-semibold">Motivo</div>
                  <div className="col-span-2 border-x border-black p-2 font-semibold">
                    Taxa
                  </div>
                  <div className="col-span-2 p-2 font-semibold">Qde. Doses</div>
                </div>
                {reasons.map((item) => (
                  <div
                    className="col-span-7 grid grid-cols-7 border"
                    key={item.id}
                  >
                    <div className="col-span-3 p-2">{item.reason}</div>
                    <div className="relative col-span-2 border-x p-2 text-[#8F1220]">
                      <input
                        className="absolute left-0 top-0 h-full w-full bg-[#f4f4f4] p-2 text-center outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        value={item.avg}
                        type="number"
                        onChange={(e) => {
                          const newReasons = [...reasons];
                          newReasons[item.id - 1].avg = Number(e.target.value);
                          setReasons(newReasons);
                        }}
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2">
                        %
                      </span>
                    </div>
                    <div className="col-span-2 p-2">
                      <span>
                        {((initialCount * item.avg) / 100).toFixed(0)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
