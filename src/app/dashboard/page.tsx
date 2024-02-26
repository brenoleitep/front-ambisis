'use client'
import { Card } from "@/components/Card";
import CreateCompanyModal from "@/components/Modals/CreateCompanyModal/CreateCompanyModal";
import SkeletonChildren from "@/components/Skeleton";
import { useDashboard } from "./useDashboard";

interface Company {
  id: number;
  razao_social: string;
  cnpj: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  imageUrl: string,
  complemento: string | null;
}

export default function Home() {
  const { companies, isLoading } = useDashboard();

  return (
    <main className="min-h-[100vh]">
      <div className="flex flex-col gap-6">

        {isLoading &&(
          <SkeletonChildren />
        )}

        {
          companies?.data ?
          <>
         <h2 className="mx-auto mt-3 text-2xl">Todas as empresas</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap md:w-full md:justify-center mx-auto gap-3">
          {companies.data.map(company => (
            <Card 
            key={company?.id}
            imageUrl={company?.imageUrl} 
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
          </div>
          </>
          : 
          <div className="mx-auto gap-2 h-[90vh] flex flex-col justify-center items-center">
          <h2 className="uppercase text-primary text-center">Você ainda não criou nenhuma empresa!</h2>
          <CreateCompanyModal cta="Criar empresa" />
          
          </div>
        }         
      </div>
    </main>
  );
}
