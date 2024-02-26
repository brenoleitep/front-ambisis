'use client'
import { Card } from "@/components/Card";
import { useDashboard } from "./useDashboard";
import logoAmbisis from "/public/logoAmbisis.png";

export default function Home() {
  const { companies, error, isLoading } = useDashboard();

  return (
    <main>
      <div className="flex flex-col gap-6">
        <h2 className="mx-auto mt-3 text-2xl">Todas as empresas</h2>

        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          companies?.map(company => (
             <Card 
              key={company?.id}
              imageUrl={logoAmbisis} 
              city={company?.cidade} 
              cnpj={company?.cnpj} 
              companyName={company?.razao_social} 
              razao={company?.razao_social}
              neighborhood={company?.bairro} 
              state={company?.estado} 
              companyId={company?.id}
            />
          ))
        )}
      </div>
    </main>
  );
}
