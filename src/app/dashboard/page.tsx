'use client'
import { Card } from "@/components/Card";
import CreateCompanyModal from "@/components/Modals/CreateCompanyModal/CreateCompanyModal";
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
        ) : companies.length === 0 ? (
          <div className="mx-auto gap-2 h-[90vh] flex flex-col justify-center items-center">
          <h2 className="uppercase text-primary">Você ainda não criou nenhuma empresa!</h2>
          <CreateCompanyModal cta="Criar empresa" />
          </div>
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
