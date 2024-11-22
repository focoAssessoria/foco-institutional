"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import moment from "moment";
import { Send } from "lucide-react";

interface DeathCalculatorProps {
  openDeathCalculator: boolean;
  setOpenDeathCalculator: (isOpen: boolean) => void;
}
export function DeathCalculator({
  openDeathCalculator,
  setOpenDeathCalculator,
}: DeathCalculatorProps) {
  const [dayOneStock, setDayOneStock] = useState<number | null>(null);
  const [anualAddition, setAnualAddition] = useState<number | null>(null);
  const [anualLoss, setAnualLoss] = useState<number | null>(null);
  const [deathAmount, setDeathAmount] = useState<number | null>(null);
  const [injuredAmount, setInjuredAmount] = useState<number | null>(null);
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [isLeapYear, setIsLeapYear] = useState<boolean>(false);
  const [cattlePerDayOfYear, setCattlePerDayOfYear] = useState<number | null>(
    null,
  );
  const [currentCattlePerDayOfYear, setCurrentCattlePerDayOfYear] = useState<
    number | null
  >(null);
  const [mortalityRate, setMortalityRate] = useState<number | null>(null);
  const [injuredRate, setInjuredRate] = useState<number | null>(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [openResults, setOpenResults] = useState<boolean>(false);

  useEffect(() => {
    if (openDeathCalculator) {
      setCurrentDay(moment().diff(moment().startOf("year"), "days"));
      setIsLeapYear(moment().isLeapYear());
    }
  }, [openDeathCalculator]);

  useEffect(() => {
    if (dayOneStock) {
      setCattlePerDayOfYear(isLeapYear ? dayOneStock / 366 : dayOneStock / 365);
    }
    if (cattlePerDayOfYear) {
      setCurrentCattlePerDayOfYear(cattlePerDayOfYear * currentDay);
    }
    if (deathAmount && anualAddition && currentCattlePerDayOfYear) {
      setMortalityRate(
        (deathAmount / (anualAddition + currentCattlePerDayOfYear)) * 100,
      );
    }
    if (injuredAmount && anualAddition && currentCattlePerDayOfYear) {
      setInjuredRate(
        (injuredAmount / (anualAddition + currentCattlePerDayOfYear)) * 100,
      );
    }
  }, [
    dayOneStock,
    deathAmount,
    anualAddition,
    injuredAmount,
    cattlePerDayOfYear,
    currentCattlePerDayOfYear,
  ]);

  return (
    <>
      {openDeathCalculator && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-[100] flex w-full items-center justify-center text-center transition-opacity duration-300 ease-in-out"
          style={{ opacity: openDeathCalculator ? 1 : 0 }}
        >
          <button
            onClick={() => setOpenDeathCalculator(false)}
            className="absolute z-[100] h-full w-full bg-black/20 backdrop-blur"
          />
          <div className="relative z-[100] flex flex-col items-center justify-center">
            <div
              className={twMerge(
                "relative z-[100] flex max-h-[80vh] w-[95%] max-w-[300px] flex-col rounded-md border border-gray-200 bg-white text-black shadow-md lg:w-[800px] lg:max-w-none",
                !openResults && "pb-4",
              )}
            >
              <div className="grid w-full grid-cols-3 gap-2 p-2">
                <div className="col-span-1 flex flex-col">
                  <label className="mb-2 text-start text-sm font-semibold">
                    Estoque inicial 01/Janeiro
                  </label>
                  <input
                    className="Input rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                    value={dayOneStock || 0}
                    onChange={(e) => setDayOneStock(Number(e.target.value))}
                    type="number"
                  />
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="mb-2 text-start text-sm font-semibold">
                    Entradas Anuais
                  </label>
                  <input
                    className="Input rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                    value={anualAddition || 0}
                    onChange={(e) => setAnualAddition(Number(e.target.value))}
                    type="number"
                  />
                </div>
                <div className="Input col-span-1 flex flex-col">
                  <label className="mb-2 text-start text-sm font-semibold">
                    Saídas Anuais
                  </label>
                  <input
                    className="rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                    value={anualLoss || 0}
                    onChange={(e) => setAnualLoss(Number(e.target.value))}
                    type="number"
                  />
                </div>
                <div className="Input col-span-1 flex flex-col">
                  <label className="mb-2 text-start text-sm font-semibold">
                    Quantidade de Mortes
                  </label>
                  <input
                    className="Input rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                    value={deathAmount || 0}
                    onChange={(e) => setDeathAmount(Number(e.target.value))}
                    type="number"
                  />
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="mb-2 text-start text-sm font-semibold">
                    Quantidade de Enfermos
                  </label>
                  <input
                    className="Input rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                    value={injuredAmount || 0}
                    onChange={(e) => setInjuredAmount(Number(e.target.value))}
                    type="number"
                  />
                </div>
              </div>

              <button
                onClick={() => setOpenResults(true)}
                className="mx-auto w-2/3 rounded-md bg-black/40 p-2 text-white"
              >
                Ver Resultados
              </button>
              {openResults && (
                <div className="relative col-span-2 mt-4 flex w-full flex-col">
                  <div
                    className={twMerge(
                      "absolute left-0 top-0 h-full w-full bg-black",
                      !isRegistered ? "blur-sm" : "hidden",
                    )}
                  />
                  <div
                    className={twMerge(
                      "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-md",
                      isRegistered && "hidden",
                    )}
                  >
                    <div className="flex w-full flex-col rounded-md bg-white p-2">
                      <span className="text-lg font-bold">
                        Cadastre-se para ter acesso aos Resultados
                      </span>
                      <div className="flex w-full items-center gap-4">
                        <div className="flex w-full flex-col">
                          <label className="mb-2 text-start text-sm font-semibold">
                            Nome
                          </label>
                          <input
                            className="Result rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                            type="text"
                          />
                        </div>
                        <div className="flex w-full flex-col">
                          <label className="mb-2 text-start text-sm font-semibold">
                            Email
                          </label>
                          <input
                            className="Result rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                            type="text"
                          />
                        </div>
                        <div className="flex w-full flex-col">
                          <label className="mb-2 text-start text-sm font-semibold">
                            Telefone
                          </label>
                          <input
                            className="Result rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                            type="text"
                          />
                        </div>
                        <button
                          onClick={() => setIsRegistered(true)}
                          className="flex items-center justify-center self-end rounded-md bg-black/40 p-2"
                        >
                          <Send size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-2 gap-2 p-2">
                    <div className="col-span-1 flex flex-col">
                      <label className="mb-2 text-start text-sm font-semibold">
                        Estoque Atual
                      </label>
                      <input
                        disabled
                        className="Result rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                        value={
                          dayOneStock && anualAddition && anualLoss
                            ? dayOneStock + anualAddition - anualLoss
                            : 0
                        }
                        type="number"
                      />
                    </div>
                    <div className="col-span-1 flex flex-col">
                      <label className="mb-2 text-start text-sm font-semibold">
                        Mortalidade Acumulada
                      </label>
                      <input
                        disabled
                        className="Result rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                        value={
                          mortalityRate ? mortalityRate.toFixed(2) + "%" : ""
                        }
                        type="text"
                      />
                    </div>
                    <div className="col-span-1 flex flex-col">
                      <label className="mb-2 text-start text-sm font-semibold">
                        Morbidade Acumulada
                      </label>
                      <input
                        disabled
                        className="Result rounded-md bg-black/40 px-2 py-1 text-white outline-none"
                        value={injuredRate ? injuredRate.toFixed(2) + "%" : ""}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
