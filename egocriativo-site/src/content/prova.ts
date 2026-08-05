// Registro público: tudo aqui tem entidade e ano. Nada é estimado, arredondado ou inferido.
// Regra da casa: se um item não tem ano OU não tem quem concedeu, ele não entra neste arquivo.

/** Nível de verificação — define o que a UI mostra ao lado do dado. */
export type Verificacao =
  | 'externo' // fonte pública consultável agora (ex.: cadastro do CNPJ na Receita)
  | 'registro'; // registro datado do fundador (currículo, certificado em arquivo)

export interface LinhaFicha {
  rotulo: string;
  valor: string;
  /** Quando presente, a linha ganha o link "VERIFICAR ↗". */
  url?: string;
}

/** Consulta pública e gratuita do CNPJ — a única fonte externa linkada na página. */
export const consultaCnpj = 'https://open.cnpja.com/office/11648734000106';

export const fichaCadastral: LinhaFicha[] = [
  { rotulo: 'Razão social', valor: 'EGO CRIATIVO LTDA' },
  { rotulo: 'CNPJ', valor: '11.648.734/0001-06', url: consultaCnpj },
  { rotulo: 'Abertura', valor: '08 de março de 2010' },
  { rotulo: 'Situação', valor: 'ATIVA', url: consultaCnpj },
  { rotulo: 'Atividade principal', valor: '73.11-4-00 — Agências de publicidade' },
];

export interface Reconhecimento {
  ano: number;
  titulo: string;
  por: string;
}

/**
 * Prêmios e títulos concedidos ao fundador, todos com entidade e ano.
 * Vivem na biografia do Rodney — são reconhecimentos pessoais, não da agência.
 * Formação e certificações ficam fora desta lista: já aparecem na ficha dele.
 */
export const reconhecimentos: Reconhecimento[] = [
  { ano: 2022, titulo: 'Certificado de Reconhecimento pelo Dia do Administrador', por: 'Câmara Municipal de Aquidauana' },
  { ano: 2019, titulo: 'Reconhecimento pela gestão 2017–2019 em prol da juventude campo-grandense', por: 'Conselho Nacional de Juventude (CONJUVE)' },
  { ano: 2018, titulo: 'Mérito Eneida Cristina Ribeiro de Assistência Social — implementação do ID Jovem', por: 'Secretaria Municipal de Assistência Social de Campo Grande-MS' },
  { ano: 2018, titulo: 'Reconhecimento pela contribuição ao comércio varejista campo-grandense', por: 'Câmara de Dirigentes Lojistas (CDL) Campo Grande-MS' },
  { ano: 2017, titulo: 'Medalha de Mérito Empreendedor 2016', por: 'Associação dos Jovens Empreendedores de MS (AJE-MS)' },
  { ano: 2017, titulo: 'Homenagem de Reconhecimento ao Protagonismo da Juventude Campo-Grandense', por: 'Prefeitura de Campo Grande-MS' },
  { ano: 2016, titulo: 'Troféu Jovem Empreendedor 2016', por: 'Assembleia Legislativa de Mato Grosso do Sul' },
  { ano: 2016, titulo: 'Medalha Mérito Empreendedor — contribuições ao setor empresarial sul-mato-grossense', por: 'Associação dos Jovens Empreendedores de MS (AJE-MS)' },
  { ano: 2016, titulo: 'Mérito Comunitário — Programa Vamos Falar de Ética', por: 'Junior Achievement Brasil' },
  { ano: 2016, titulo: 'Mérito Comunitário — Programa Atitude pelo Planeta', por: 'Junior Achievement Brasil' },
  { ano: 2016, titulo: 'Mérito Comunitário — Programa Habilidades para o Sucesso', por: 'Junior Achievement Brasil' },
  { ano: 2015, titulo: 'Título de Guardiões dos ODM-ODS — palestras sobre os Objetivos da ONU', por: 'Núcleo Municipal dos Objetivos de Desenvolvimento do Milênio' },
  { ano: 2014, titulo: 'Mérito Comunitário — Programa Empresário-Sombra por um Dia', por: 'Junior Achievement Brasil' },
  { ano: 2007, titulo: 'Comissão organizadora da II Semana de Matemática', por: 'Universidade Federal de Mato Grosso do Sul (UFMS)' },
];

export interface RegistroMidia {
  ano: string;
  nome: string;
  tema: string;
}

/** 22 participações em programas, entrevistas e mesas redondas. */
export const midia: RegistroMidia[] = [
  { ano: '2024', nome: 'SP1', tema: 'Golpe envolvendo nome dos Correios' },
  { ano: '2022', nome: 'Canal Rodney Júnior', tema: 'Voto consciente' },
  { ano: '2022', nome: 'Entrevista', tema: 'I Congresso Imobiliário de MS — CIMS' },
  { ano: '2020', nome: 'Revista Fórum Brasil', tema: 'Home office e sustentabilidade' },
  { ano: '2020', nome: 'Mesa redonda', tema: 'Juventude e empreendedorismo' },
  { ano: '2020', nome: 'Live Jovem Empreendedor', tema: 'Adequação produto/serviço' },
  { ano: '2019', nome: 'Entrevista', tema: 'ID Jovem e seus benefícios' },
  { ano: '2019', nome: 'Entrevista', tema: '8ª Semana Municipal de Juventude' },
  { ano: '2019', nome: 'UCDB Virtual', tema: 'Seminário de Negócios' },
  { ano: '2019', nome: 'CBN Campo Grande 93,7', tema: 'Aplicativo iFriend' },
  { ano: '2019', nome: 'Mesa redonda', tema: 'Câmara de Negócios da América Latina' },
  { ano: '2019', nome: 'Capital Meio Dia', tema: 'Entrevista com Joel Silva' },
  { ano: '2018', nome: 'SBT', tema: 'Lançamento do Feirão do Imposto CONAJE' },
  { ano: '2018', nome: 'Entrevista', tema: 'Filas para abastecer em Campo Grande' },
  { ano: '2017', nome: 'Manhã Educativa', tema: 'ID Jovem' },
  { ano: '2017', nome: 'Entrevista', tema: 'MS na 82ª Assembleia Geral da CONAJE' },
  { ano: '2017', nome: 'Campo Grande News', tema: 'Impacto da corrupção nos impostos' },
  { ano: '2015', nome: 'Rede Globo — Bom Dia Acre', tema: 'Startup Weekend Rio Branco' },
  { ano: '2015', nome: 'Entrevista', tema: 'Mercado de startups e como começar' },
  { ano: '2015', nome: 'Café Diretor', tema: 'Startups e eventos em MS' },
  { ano: '2015', nome: 'Vídeo de divulgação', tema: 'A Fórmula do Sucesso — Aquidauana-MS' },
  { ano: '2014', nome: 'Papo Empreendedor', tema: 'TV Serra de Maracaju' },
];

export interface Marco {
  ano: number;
  /** Ano final, quando o marco é um período (ex.: diretoria de 2018 a 2021). */
  ate?: number;
  titulo: string;
  desc: string;
  entidade: string;
  /** Destaca o marco na régua (abertura da empresa e o ponto de hoje). */
  ancora?: boolean;
}

/**
 * Régua 2010 → 2026 — história da MARCA, não do fundador.
 * Só entra aqui o que a empresa fez: o cadastro e os eventos entregues, cada um com
 * nome oficial, promotor e ano. Prêmios, cargos e certificações pessoais ficam de fora
 * (eles vivem na ficha do fundador e no mural de reconhecimentos).
 */
export const marcos: Marco[] = [
  {
    ano: 2010,
    titulo: 'A Ego Criativo é aberta',
    desc: 'CNPJ registrado em 8 de março de 2010 como agência de publicidade. Ativo desde então, sem uma única interrupção.',
    entidade: 'Receita Federal',
    ancora: true,
  },
  {
    ano: 2013,
    titulo: 'Os dois primeiros eventos de tecnologia',
    desc: 'Aquidauana Connect e Corumbá Connect: inovação e TI levadas para o interior de Mato Grosso do Sul.',
    entidade: 'Promoção: Startup MS',
  },
  {
    ano: 2014,
    titulo: 'Startup Weekend Campo Grande',
    desc: 'Produção do formato internacional de maratona de negócios na capital do estado.',
    entidade: 'Promoção: Startup MS',
  },
  {
    ano: 2015,
    titulo: 'A operação sai de Mato Grosso do Sul',
    desc: 'Startup Weekend Rio Branco, no Acre, promovido pela Universidade Federal do Acre — a primeira entrega fora do estado.',
    entidade: 'Promoção: UFAC',
  },
  {
    ano: 2017,
    titulo: 'Feirão do Imposto do Estado de MS',
    desc: 'Coordenação da edição estadual da campanha nacional sobre carga tributária.',
    entidade: 'Promoção: CONAJE',
  },
  {
    ano: 2018,
    titulo: 'I Congresso Imobiliário de MS — CIMS',
    desc: 'Organização da primeira edição do congresso do setor imobiliário sul-mato-grossense, com o tema “A hora de se reinventar”.',
    entidade: 'CIMS',
  },
  {
    ano: 2019,
    titulo: '2ª EXPOACOM-MS',
    desc: 'Organização da exposição da Acomasul, a associação do comércio atacadista do estado.',
    entidade: 'Promoção: Acomasul',
  },
  {
    ano: 2022,
    titulo: 'CIMS volta em segunda edição',
    desc: 'Nova edição do Congresso Imobiliário de Mato Grosso do Sul, quatro anos depois da primeira.',
    entidade: 'CIMS',
  },
  {
    ano: 2026,
    titulo: '16 anos de CNPJ ativo',
    desc: 'Mesma empresa, mesma atividade registrada, do primeiro dia até hoje.',
    entidade: 'Receita Federal',
    ancora: true,
  },
];
