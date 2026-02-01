import "./globals.css";
import Header from "@/components/layout/Header";
import { CanonicalStoreProvider } from "@/context/CanonicalStoreContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <CanonicalStoreProvider>
          <Header />
          {children}
        </CanonicalStoreProvider>
      </body>
    </html>
  );
}
