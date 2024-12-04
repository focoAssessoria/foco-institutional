"use client";
import { LogIn, LogOut, Phone, Skull, Syringe, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { CalculatorCard } from "../components/CalculatorCard";
import LockAnim from "../../../public/lockAnim.json";
import moment from "moment";
import { maskPhone } from "@/utils";
export default function MortalityCalculator() {
  const [steps, setSteps] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [animationSecondState, setAnimationSecondState] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(true);
  const handleClick = () => {
    setAnimationSecondState(true);
    setIsPlaying(true);
    setTimeout(() => {
      setShowResult(!showResult);
      setSteps(3);
    }, 3000);
  };

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

  useEffect(() => {
    setCurrentDay(moment().diff(moment().startOf("year"), "days"));
    setIsLeapYear(moment().isLeapYear());
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dayOneStock,
    deathAmount,
    anualAddition,
    injuredAmount,
    cattlePerDayOfYear,
    currentCattlePerDayOfYear,
  ]);
  const handleAddStep = () => {
    if (dayOneStock === null) {
      return;
    }
    if (steps === 1 && (deathAmount === null || injuredAmount === null)) {
      return;
    }
    setSteps(steps + 1);
  };
  return (
    <div className="relative flex h-full min-h-screen w-full items-center justify-center bg-[url(/bullBgRed2.png)] bg-cover bg-no-repeat px-2 py-10 lg:px-4">
      {steps < 2 ? (
        <div className="flex h-full w-full flex-col lg:flex-row">
          <div className="flex h-full w-full flex-col gap-8 px-2 py-8 lg:w-[45%] lg:px-10 lg:py-12">
            <div className="flex flex-col items-center justify-center gap-2 self-center">
              <h1 className="bg-[#DC2626] px-2 text-3xl font-bold text-white">
                Saiba a sua Real
              </h1>
              <h1 className="bg-[#DC2626] px-2 text-3xl font-bold text-white">
                {" "}
                Taxa de Mortalidade!!
              </h1>
            </div>
            <p>
              Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem
              lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem
              lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem
              lorem lorem{" "}
            </p>
          </div>
          <div className="relative flex h-full w-full rounded-lg bg-[#161717] lg:w-[55%]">
            {steps !== 0 && (
              <button
                onClick={() => setSteps(steps - 1)}
                className="absolute right-4 top-4 z-50 h-6 w-6 rounded-md bg-zinc-600/30"
              ></button>
            )}

            <Image
              alt=""
              width={500}
              height={500}
              className="absolute left-0 top-4 z-10 h-20 w-14 opacity-15 lg:h-40 lg:w-28"
              src={"/halfLogo.png"}
            />
            <Image
              alt=""
              width={500}
              height={500}
              className="absolute bottom-4 right-4 z-10 h-[120px] w-[120px] opacity-15"
              src={"/squares.png"}
            />
            <div className="lg:py-120 z-20 flex h-full w-full flex-col gap-4 px-2 py-8 lg:px-10">
              <div className="flex flex-col">
                {steps === 0 && (
                  <>
                    <h1 className="text-2xl font-semibold">
                      INSIRA OS DADOS ABAIXO E EM MENOS DE 4 MINUTOS VOCÊ TERÁ
                      OS RESULTADOS
                    </h1>
                    <p className="text-[#DC2626]">
                      Preencha abaixo para prosseguir
                    </p>
                  </>
                )}
                {steps === 1 && (
                  <>
                    <h1 className="text-2xl font-semibold">
                      INSIRA OS DADOS ABAIXO E EM MENOS DE 4 MINUTOS VOCÊ TERÁ
                      OS RESULTADOS
                    </h1>
                    <p className="text-[#DC2626]">
                      Agora sobre enfermos, saídas e mortes
                    </p>
                  </>
                )}
              </div>

              <div className="flex h-80 w-full flex-col justify-evenly">
                {steps === 0 && (
                  <>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#999999]">
                        Iniciou 2024 com quantas Cabeças de Gado?
                      </p>
                      <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                        <Image
                          alt=""
                          width={40}
                          height={40}
                          src={"/vaca.svg"}
                          className="h-6 w-6 text-[#DC2626]"
                        />
                        <input
                          value={dayOneStock || 0}
                          onChange={(e) =>
                            setDayOneStock(Number(e.target.value))
                          }
                          type="number"
                          placeholder="Estoque inicial 01/Janeiro/ 2024"
                          className="flex-1 bg-transparent outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#999999]">
                        Ao longo do ano, quantas Entradas?
                      </p>
                      <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                        <LogIn className="h-6 w-6 text-[#DC2626]" />
                        <input
                          placeholder="Entradas Anuais"
                          value={anualAddition || 0}
                          onChange={(e) =>
                            setAnualAddition(Number(e.target.value))
                          }
                          type="number"
                          className="flex-1 bg-transparent outline-none"
                        />
                      </div>
                    </div>
                  </>
                )}
                {steps === 1 && (
                  <>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#999999]">
                        Quantas Saídas no ano, até hoje?
                      </p>
                      <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                        <LogOut className="h-6 w-6 text-[#DC2626]" />
                        <input
                          placeholder="Estoque inicial 01/Janeiro/ 2024"
                          value={anualLoss || 0}
                          onChange={(e) => setAnualLoss(Number(e.target.value))}
                          type="number"
                          className="flex-1 bg-transparent outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#999999]">Quantidade de Mortes</p>
                      <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                        <Skull className="h-6 w-6 text-[#DC2626]" />
                        <input
                          placeholder="total de mortes"
                          className="flex-1 bg-transparent outline-none"
                          value={deathAmount || 0}
                          onChange={(e) =>
                            setDeathAmount(Number(e.target.value))
                          }
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#999999]">
                        Quantidade de Enfermos no ano?
                      </p>
                      <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                        <Syringe className="h-6 w-6 text-[#DC2626]" />
                        <input
                          value={injuredAmount || 0}
                          onChange={(e) =>
                            setInjuredAmount(Number(e.target.value))
                          }
                          type="number"
                          placeholder="Total de animais enfermos"
                          className="flex-1 bg-transparent outline-none"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => handleAddStep()}
                className="self-center rounded-lg bg-[#DC2626] px-20 py-2 text-lg font-semibold text-white"
              >
                Continuar
              </button>
              <div className="flex flex-row items-center self-center">
                <div className="h-8 w-8 overflow-hidden rounded-full border border-[#DC2626]">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                  />
                </div>
                <div className="-ml-3 h-8 w-8 overflow-hidden rounded-full border border-[#DC2626]">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full"
                    src="https://randomuser.me/api/portraits/women/5.jpg"
                  />
                </div>
                <div className="-ml-3 h-8 w-8 overflow-hidden rounded-full border border-[#DC2626]">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full"
                    src="https://randomuser.me/api/portraits/men/6.jpg"
                  />
                </div>
                <div className="fle -ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#DC2626] bg-[#161717]">
                  <p className="text-[12px] text-white">+99</p>
                </div>
                <label className="ml-1 text-[10px] text-white">
                  Já utilizara a calculadora, use você também
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex h-full w-full rounded-lg bg-[#161717]">
          <Image
            alt=""
            width={500}
            height={500}
            className="absolute bottom-4 right-4 z-10 h-[120px] w-[120px] opacity-15"
            src={"/squares.png"}
          />
          <div className="z-20 flex h-full w-full flex-col gap-4 px-4 py-8 lg:px-10 lg:py-12">
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
              <Image
                alt=""
                width={500}
                height={500}
                className="h-14 w-[165px] lg:h-20 lg:w-[250px]"
                src={"/logo.png"}
              />
              <h1 className="bg-[#DC2626] px-2 text-2xl font-bold text-white lg:text-4xl">
                Verifique sua Real Taxa de Mortalidade!!
              </h1>
            </div>
            <div className="flex-1 rounded-md border border-[#DC2626]">
              <div className="flex h-full flex-col-reverse items-center lg:flex-row">
                {steps === 2 ? (
                  <div className="flex h-full w-full flex-col justify-between p-4 lg:w-1/2 lg:p-8">
                    <p className="text-[#DC2626]">
                      Falta Pouco para você ver sua Real
                      <br /> Taxa de Mortalidade
                    </p>
                    <div className="flex w-full flex-1 flex-col justify-evenly">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">Insira seu nome</p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <User className="h-6 w-6 text-[#DC2626]" />
                          <input
                            placeholder="Qual seu nome?"
                            className="flex-1 bg-transparent outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">Qual seu telefone?</p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <Phone className="h-6 w-6 text-[#DC2626]" />
                          <input
                            placeholder="(xx) 9 xxxx-xxxx"
                            className="flex-1 bg-transparent outline-none"
                            value={maskPhone(phoneNumber)}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      disabled={
                        !name || !phoneNumber || phoneNumber.length < 14
                      }
                      onClick={() => handleClick()}
                      className="my-10 self-center rounded-lg bg-[#DC2626] px-4 py-2 font-semibold text-white lg:px-20 lg:text-lg"
                    >
                      Liberar Resultado Agora
                    </button>
                  </div>
                ) : (
                  <div className="flex h-full w-full flex-col justify-between p-4 lg:w-1/2 lg:p-8">
                    <div className="flex w-full flex-1 flex-col justify-evenly">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">
                          Iniciou 2024 com quantas Cabeças de Gado?
                        </p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <Image
                            alt=""
                            width={40}
                            height={40}
                            src={"/vaca.svg"}
                            className="h-6 w-6 text-[#DC2626]"
                          />
                          <input
                            placeholder="Quantidade inicial de Cabeças de Gado"
                            className="flex-1 bg-transparent outline-none"
                            value={dayOneStock || 0}
                            onChange={(e) =>
                              setDayOneStock(Number(e.target.value))
                            }
                            type="number"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">
                          Ao longo do ano, quantas Entradas?
                        </p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <LogIn className="h-6 w-6 text-[#DC2626]" />
                          <input
                            placeholder="Entradas Anuais"
                            className="flex-1 bg-transparent outline-none"
                            value={anualAddition || 0}
                            onChange={(e) =>
                              setAnualAddition(Number(e.target.value))
                            }
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">
                          Quantas Saídas no ano, até hoje?
                        </p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <LogOut className="h-6 w-6 text-[#DC2626]" />
                          <input
                            placeholder="Saídas Anuais"
                            className="flex-1 bg-transparent outline-none"
                            value={anualLoss || 0}
                            onChange={(e) =>
                              setAnualLoss(Number(e.target.value))
                            }
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">Quantidade de Mortes</p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <Skull className="h-6 w-6 text-[#DC2626]" />
                          <input
                            placeholder="Quantas Mortes no ano"
                            className="flex-1 bg-transparent outline-none"
                            value={deathAmount || 0}
                            onChange={(e) =>
                              setDeathAmount(Number(e.target.value))
                            }
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#999999]">
                          Quantidade de Enfermos no ano?
                        </p>
                        <div className="flex w-full flex-row gap-2 border-b-2 border-b-[#999999] pb-1">
                          <Syringe className="h-6 w-6 text-[#DC2626]" />
                          <input
                            placeholder="Quantos Enfermos no ano"
                            className="flex-1 bg-transparent outline-none"
                            value={injuredAmount || 0}
                            onChange={(e) =>
                              setInjuredAmount(Number(e.target.value))
                            }
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex h-full w-full items-center justify-center overflow-hidden lg:w-1/2">
                  {showResult ? (
                    <div className="full grid h-full grid-cols-2 grid-rows-3 gap-4 p-2 lg:p-8">
                      <CalculatorCard
                        circleColor="border-[#fff]/50"
                        title="Estoque Atual"
                        number={
                          dayOneStock && anualAddition && anualLoss
                            ? dayOneStock + anualAddition - anualLoss
                            : 0
                        }
                      />
                      <CalculatorCard
                        circleColor="border-[#fff]/50"
                        title="Mortalidade Acumulada"
                        number={
                          mortalityRate ? mortalityRate.toFixed(2) + "%" : ""
                        }
                      />
                      <CalculatorCard
                        color="bg-[#DC2626]/70"
                        title="Morbidade Acumulada"
                        number={injuredRate ? injuredRate.toFixed(2) + "%" : ""}
                      />
                      <CalculatorCard
                        color="bg-[#DC2626]/70"
                        title="Mortalidade Acumulada"
                        number={536}
                      />
                      <CalculatorCard
                        color="bg-white"
                        textColor="text-[#DC2626] "
                        title="Mortalidade Acumulada"
                        number={536}
                      />
                      <CalculatorCard
                        color="bg-white"
                        textColor="text-[#DC2626] "
                        title="Mortalidade Acumulada"
                        number={536}
                      />
                    </div>
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center">
                      <div className="full z-10 grid h-full grid-cols-2 grid-rows-3 gap-4 p-8">
                        <CalculatorCard
                          circleColor="border-[#fff]/50"
                          title="Mortalidade Acumulada"
                          number={0.0}
                        />
                        <CalculatorCard
                          circleColor="border-[#fff]/50"
                          title="Mortalidade Acumulada"
                          number={0.0}
                        />
                        <CalculatorCard
                          color="bg-[#DC2626]/70"
                          title="Estoque Atual"
                          number={0.0}
                        />
                        <CalculatorCard
                          color="bg-[#DC2626]/70"
                          title="Estoque Atual"
                          number={0.0}
                        />
                        <CalculatorCard
                          color="bg-white"
                          textColor="text-[#DC2626] "
                          title="Mortalidade Acumulada"
                          number={0.0}
                        />
                        <CalculatorCard
                          color="bg-white"
                          textColor="text-[#DC2626] "
                          title="Mortalidade Acumulada"
                          number={0.0}
                        />
                      </div>
                      <div className="absolute z-20 flex h-[95%] w-[90%] items-center justify-center rounded-lg bg-black/50 backdrop-blur-md">
                        <Lottie
                          animationData={LockAnim}
                          play={isPlaying}
                          loop={false}
                          onComplete={() => setIsPlaying(false)}
                          segments={animationSecondState ? [36, 220] : [0, 35]} // Controle o segmento de frames
                          className="h-1/2 w-1/2"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
