'use client'
import { Nav } from "@/components/Nav";
import { PrivateRoute } from "@/components/PrivateRoute";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ambisis",
//   description: "Gerenciador de empresas",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();
  const isPublicPage = checkIsPublicRoute(pathName!);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          {isPublicPage && 
          <>
          <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
          {children}
          </>
          }
          {!isPublicPage && (
            <PrivateRoute>
              <Nav />
              {children}
              <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </PrivateRoute>
          )}
      </body>
    </html>
  );
}
