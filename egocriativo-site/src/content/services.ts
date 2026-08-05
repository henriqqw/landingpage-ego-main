// Serviços — todos com lastro nas atividades registradas (CNAE) da empresa.
export interface Service {
  title: string;
  desc: string;
  icon: string; // nome do ícone em components/ui/Icon.astro
}

export const services: Service[] = [
  {
    title: 'Consultoria de Marketing & Estratégia',
    desc: 'Diagnóstico, definição de persona, plano de ação e campanhas para fortalecer sua marca.',
    icon: 'compass',
  },
  {
    title: 'Branding & Identidade',
    desc: 'Construção e fortalecimento de marca — do conceito às peças (branding, merchandising).',
    icon: 'sparkles',
  },
  {
    title: 'Sites que Ranqueiam no Google',
    desc: 'Websites dinâmicos com foco em SEO e posicionamento nas buscas.',
    icon: 'globe',
  },
  {
    title: 'Performance & Tráfego Digital',
    desc: 'SEM, Google Ads, mídias sociais, otimização de tags e copywriting que converte.',
    icon: 'trending',
  },
  {
    title: 'Inteligência de Dados (BI)',
    desc: 'KPIs, OKRs, testes A/B, NPS e dashboards. CRM e automação para reduzir churn.',
    icon: 'chart',
  },
  {
    title: 'Eventos & Produção',
    desc: 'Estrutura completa, online e offline, para eventos que geram negócio.',
    icon: 'calendar',
  },
  {
    title: 'Treinamentos & Palestras',
    desc: 'Inovação, metaverso, novas tecnologias, liderança e empreendedorismo.',
    icon: 'mic',
  },
];

// 'Optimize' saiu: o Google descontinuou o produto em setembro de 2023, e citar
// ferramenta morta é o tell instantâneo de copy escrita sem olhar o mercado.
export const tools = [
  'Google Ads',
  'Merchant Center',
  'Tag Manager',
  'Search Console',
  'Google Meu Negócio',
];
