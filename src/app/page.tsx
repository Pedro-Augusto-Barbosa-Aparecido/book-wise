import { SignInButton } from "@/components/SignInButton";
import { GitHub } from "@/components/icons/GitHub";
import { Google } from "@/components/icons/Google";
import { Rocket } from "@/components/icons/Rocket";
import { LogoBgImage } from "@/components/images/LogoBgImage";

export default function Home() {
  return (
    <div className="flex justify-between">
      <LogoBgImage />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-1/3 flex-col items-start justify-center gap-10">
          <div>
            <h1 className="font-default text-2xl font-bold leading-short text-gray-100">
              Boas vindas!
            </h1>
            <span className="font-default text-base font-normal leading-base text-gray-200">
              Faça seu login ou acesse como visitante.
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <SignInButton icon={<Google />} title="Entrar com o Google" />
            <SignInButton icon={<GitHub />} title="Entrar com o GitHub" />
            <SignInButton icon={<Rocket />} title="Acessar como visitante" />
          </div>
        </div>
      </div>
    </div>
  );
}
