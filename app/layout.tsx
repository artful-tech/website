import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artful Brasil | Desenvolvimento de Software e IA",
  description: "A Artful Brasil é especialista em desenvolvimento de software, inteligência artificial e análise de dados para negócios.",
  icons: {
    icon: "/images/Logotipos/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
          <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/Logotipos/logotipo-preto-navbar.png"
                  alt="Artful Brasil"
                  width={120}
                  height={40}
                  className="dark:hidden"
                />
                <Image
                  src="/images/Logotipos/logotipo-branco-navbar.png"
                  alt="Artful Brasil"
                  width={120}
                  height={40}
                  className="hidden dark:block"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link href="#inicio" className="text-sm font-medium hover:text-blue-600 transition-colors">Início</Link>
              <Link href="#projetos" className="text-sm font-medium hover:text-blue-600 transition-colors">Projetos</Link>
              <Link href="#time" className="text-sm font-medium hover:text-blue-600 transition-colors">Time</Link>
              <Link href="#sobre" className="text-sm font-medium hover:text-blue-600 transition-colors">Sobre</Link>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/artful-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
