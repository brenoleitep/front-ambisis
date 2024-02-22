import { Card } from "@/components/Card";
import logoAmbisis from "../../public/logoAmbisis.png";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-6">
        <h2 className="mx-auto mt-3 text-2xl">Todas as empresas</h2>

        <Card 
        imageUrl={logoAmbisis} 
        city="Salvador" 
        cnpj="122.222.222/22" 
        companyName="Ambisis inovação na tecnologia LTDA." 
        razao="112.212 AMBISIS"
        neighborhood="Buraquinho" 
        state="Bahia" 
        key={"raeurwoh"}
        />

        <Card 
        imageUrl={logoAmbisis} 
        city="Salvador" 
        cnpj="122.222.222/22" 
        companyName="Ambisis inovação na tecnologia LTDA." 
        razao="112.212 AMBISIS"
        neighborhood="Buraquinho" 
        state="Bahia" 
        key={"raeurwoh"}
        />
        
        <Card 
        imageUrl={logoAmbisis} 
        city="Salvador" 
        cnpj="122.222.222/22" 
        companyName="Ambisis inovação na tecnologia LTDA." 
        razao="112.212 AMBISIS"
        neighborhood="Buraquinho" 
        state="Bahia" 
        key={"raeurwoh"}
        />
      </div>
    </main>
  );
}
