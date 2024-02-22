"use client"
import { Card } from "@/components/Card";
import { fetchWrapper } from "@/functions/fetch";
import logoAmbisis from "../../public/logoAmbisis.png";

interface Company {
  id: number;
  razao_social: string;
  cnpj: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  complemento: string | null;
}

export default async function Home() {
  const { data }: { data: Company[] } = await fetchWrapper("/company/listcompany");

  return (
    <main>
      <div className="flex flex-col gap-6">
        <h2 className="mx-auto mt-3 text-2xl">Todas as empresas</h2>

        {data.map(company => (
          <Card 
            key={company.id}
            imageUrl={logoAmbisis} 
            city={company.cidade} 
            cnpj={company.cnpj} 
            companyName={company.razao_social} 
            razao={company.razao_social}
            neighborhood={company.bairro} 
            state={company.estado} 
          />
        ))}
      </div>
    </main>
  );
}
