import logo from "../assets/logo.svg";

export function Header() {
  return (
    <>
      <div className="bg-black w-full flex flex-row h-12 p-12 items-center justify-center">
        <img src={logo} alt="Smart Fit" className="h-12" />
      </div>

      <div className="max-w-[728px] m-auto mt-16 flex flex-col gap-5">
        <h1 className="font-black text-3xl text-dark-grey uppercase max-w-64 tracking-wider">
          reabertura smart fit
        </h1>

        <div className="w-[72px] h-2 bg-dark-grey" />

        <p className="text-dark-grey mt-4 text-xs font-medium leading-5">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
    </>
  );
}
