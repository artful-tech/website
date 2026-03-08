import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const team = [
    {
      id: 1, 
      name: "Luiz Carlos Marinho Junior",
      photo: "/images/fotos/luiz-marinho.webp",
    },
  ];

  const projects = [
    {
      id: 1, 
      title: "Agrofy API",
      photo: "/images/Logotipos/agrofy-api-logo.webp",
      alt: "Foto da agrofy api",
      desc: "Projeto de software para agricultura familiar",
      link: "https://github.com/artful-tech/agrofy-api",
    },
    {
      id: 2, 
      title: "Artful Website",
      photo: "/images/Logotipos/artful-website.webp",
      alt: "Foto do website da artful",
      desc: "Projeto do website da artful",
      link: "https://github.com/artful-tech/website",
    },
  ]

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/Banners/banner-artful/background-image.webp"
          alt="Artful Brasil Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Artful Brasil
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            Transformando negócios através do Desenvolvimento de Software, Inteligência Artificial e Análise de Dados.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="#sobre"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Saiba Mais
            </Link>
            <Link
              href="#projetos"
              className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-zinc-900"
            >
              Nossos Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Inovação Digital com Arte e Técnica
            </h2>
            <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
              A Artful Brasil nasceu da paixão por criar soluções tecnológicas que não apenas funcionam, mas encantam e geram valor real para os negócios. 
              Combinamos a precisão técnica da engenharia de software com a criatividade necessária para aplicar IA de forma inteligente.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:hover:border-blue-400">
                <h3 className="mb-2 font-bold">Desenvolvimento</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Softwares robustos, escaláveis e focados na experiência do usuário.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:hover:border-blue-400">
                <h3 className="mb-2 font-bold">Inteligência Artificial</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Modelos personalizados para automação e insights preditivos.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:hover:border-blue-400">
                <h3 className="mb-2 font-bold">Análise de Dados</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Transformando dados brutos em decisões estratégicas.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:hover:border-blue-400">
                <h3 className="mb-2 font-bold">Consultoria</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Direcionamento tecnológico para o crescimento do seu negócio.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/Banners/banner-artful/banner-2.webp"
              alt="Sobre Artful Brasil"
              fill
              className="object-contain p-8"
              style={{borderRadius: "150%"}}
            />
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="bg-zinc-50 py-20 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nossos Projetos</h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              Uma amostra das soluções que desenvolvemos para nossos parceiros e comunidade.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((i) => (
              <div key={i.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-zinc-900">
                <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800">
                   <Image
                      src={i.photo}
                      alt="Artful Brasil Banner"
                      fill
                      className="object-cover brightness-80"
                      priority
                    />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-bold">{i.title}</h3>
                  <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {i.desc}
                  </p>
                  <Link href={i.link} className="text-sm font-semibold text-blue-600 hover:underline">
                    Ver no GitHub →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Section */}
      <section id="time" className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nosso Time</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
            Mentes brilhantes e criativas focadas em resolver problemas complexos.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {team.map((i) => (
            <div key={i.id} className="flex flex-col items-center">
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full  dark:bg-zinc-800">
                <Image
                    src={i.photo}
                    alt="Artful Brasil Banner"
                    fill
                    className="object-cover brightness-80"
                    priority
                />
              </div>
              <h3 className="font-bold">{i.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Desenvolvedor & Pesquisador</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center text-white sm:px-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:text-left">
            <div className="flex-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Pronto para transformar seu negócio?</h2>
              <p className="mb-10 text-lg text-blue-100">
                Entre em contato conosco e descubra como a tecnologia e a IA podem levar sua empresa ao próximo nível.
              </p>
              <a
                href="mailto:contato@artful.tech"
                className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-zinc-100"
              >
                Vamos Conversar
              </a>
            </div>
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-md">
              <Image
                src="/images/Banners/banner-contato/contato fig.png"
                alt="Contato Artful"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center gap-6">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Início</Link>
            <Link href="#projetos" className="hover:text-zinc-900 dark:hover:text-white">Projetos</Link>
            <Link href="#time" className="hover:text-zinc-900 dark:hover:text-white">Time</Link>
            <Link href="#sobre" className="hover:text-zinc-900 dark:hover:text-white">Sobre</Link>
            <a href="https://github.com/artful-tech" className="hover:text-zinc-900 dark:hover:text-white">GitHub</a>
          </div>
          <p>© {new Date().getFullYear()} Artful Brasil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
