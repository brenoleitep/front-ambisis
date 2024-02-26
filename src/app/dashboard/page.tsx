'use client'
import { Card } from "@/components/Card";
import SkeletonChildren from "@/components/Skeleton";
import { useDashboard } from "./useDashboard";
import logoAmbisis from "/public/logoAmbisis.png";

export default function Home() {
  const { companies, error, isLoading } = useDashboard();

  return (
    <main className="min-h-[100vh]">
      <div className="flex flex-col gap-6">

        {isLoading ? (
          <SkeletonChildren />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
        <h2 className="mx-auto mt-3 text-2xl">Todas as empresas</h2>

          {companies?.map(company => (
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
          }
          </>
        )
        }
      </div>
    </main>
  );
}
