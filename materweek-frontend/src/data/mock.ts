import type { EventItem, Sponsor } from '../types';

import aconcaiaLogo from '../assets/aconcaia.svg';
import aiqfomeLogo from '../assets/aiqfome.svg';
import atlasLogo from '../assets/atlas.svg';
import idsLogo from '../assets/ids.svg';
import franciscanaLogo from '../assets/LOGO-FRANCISCANA.svg';
import rpLogo from '../assets/Logo-RP.svg';
import logoSafe from '../assets/Logo-SAFE.svg';
import logoSimpla from '../assets/Logo-Simpla.svg';
import uplabLogo from '../assets/LOGO-UPLAB.svg';
import naturalBitLogo from '../assets/natural-bit.svg';
import panseraLogo from '../assets/pansera.svg';
import superaLogo from '../assets/supera.svg';
import viasoftLogo from '../assets/Viasoft_Logo.svg';

import SILogo from '../assets/logo_si.svg';
import sebraeLogo from '../assets/sebrae.svg';

import edisonPhoto from '../assets/Edison.png';
import eduardoPhoto from '../assets/Eduardo.png';
import gilPhoto from '../assets/Gil.png';
import joaoPhoto from '../assets/Joao.png';
import kauhePhoto from '../assets/Kauhe.png';
import leilaPhoto from '../assets/Leila.png';
import rafaelalessandroPhoto from '../assets/RafaelAlessandro.png';
import rogerPhoto from '../assets/Roger.png';
import thiagoPhoto from '../assets/Thiago.png';


export const mockEvents: EventItem[] = [
  {
    id: '1',
    iconUrl: SILogo,
    date: '15 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Edison Figueira Junior',
    topic: 'PALESTRA',
    shortDescription: 'IA, agentes e mentalidade empreendedora na nova engenharia de software.',
    longDescription: 'A palestra aborda como a inteligência artificial e os agentes inteligentes estão transformando a forma de criar soluções, desenvolver produtos e enxergar oportunidades de negócio na tecnologia. Uma conversa sobre inovação, resolução de problemas e mentalidade empreendedora no cenário atual da engenharia de software.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [edisonPhoto],
  },
  {
    id: '2',
    iconUrl: SILogo,
    date: '15 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Leila Voss',
    topic: 'DINÂMICA',
    shortDescription: 'Transformando problemas reais em soluções inovadoras na prática.',
    longDescription: 'Uma dinâmica prática e colaborativa voltada à identificação de problemas do cotidiano, estimulando os participantes a transformarem desafios em oportunidades de inovação. A atividade irá explorar criatividade, pensamento estratégico e construção de soluções, passando pelas etapas de ideação até a estruturação de possíveis produtos ou projetos com potencial de impacto real.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [leilaPhoto],
  },
  {
    id: '3',
    iconUrl: SILogo,
    date: '16 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Rafael Dal Bosco e Alessandro Graczyk Moraes',
    topic: 'TALK',
    shortDescription: 'Os desafios reais de crescer, escalar e sobreviver no mercado.',
    longDescription: 'Como uma ideia se transforma em uma empresa consolidada? Nesta talk, dois empresários da área da tecnologia compartilham experiências reais sobre incubação, crescimento, desafios do mercado e o que realmente significa escalar um negócio de forma sustentável.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [rafaelalessandroPhoto],
  },
  {
    id: '4',
    iconUrl: SILogo,
    date: '16 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Eduardo Harthecopf',
    topic: 'WORKSHOP',
    shortDescription: 'Growth Marketing na prática: como tecnologia, dados e criatividade aceleram o crescimento de um negócio.',
    longDescription: 'Neste workshop, Eduardo apresenta uma visão prática e estratégica sobre como empresas podem crescer de forma mais inteligente, conectando marketing, tecnologia, dados, criatividade e execução. Durante a atividade, os participantes serão conduzidos por um framework prático de Growth aplicado a um desafio realista de mercado, entendendo como pensar crescimento de forma estruturada, identificar oportunidades e transformar ideias em ações com potencial de resultado.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [eduardoPhoto],
  },
  {
    id: '5',
    iconUrl: SILogo,
    date: '17 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Kauhe Tissiani',
    topic: 'PALESTRA',
    shortDescription: 'Gestão comercial e os desafios de vender software no mercado atual.',
    longDescription: 'Uma palestra voltada aos desafios e oportunidades da gestão comercial no mercado de tecnologia, abordando a comercialização de softwares, relacionamento com clientes, crescimento de operações e adaptação às constantes mudanças do setor. A partir de experiências práticas no segmento hoteleiro e tecnológico, serão discutidos temas como inovação, escalabilidade, estratégias comerciais e o papel da tecnologia na geração de valor para empresas e usuários.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [kauhePhoto],
  },
  {
    id: '6',
    iconUrl: SILogo,
    date: '17 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Roger Alexandre Rossoni',
    topic: 'PALESTRA',
    shortDescription: 'Captação de recursos e estruturação de projetos para quem quer dinheiro.',
    longDescription: 'Uma palestra voltada à captação de recursos e às oportunidades de financiamento para ideias, projetos e negócios inovadores. O encontro irá abordar estratégias para transformar boas ideias em iniciativas viáveis, explorando temas como editais, investimentos, parcerias, validação de projetos e os principais desafios enfrentados por empreendedores e organizações na busca por recursos e crescimento sustentável.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [rogerPhoto],
  },
  {
    id: '7',
    iconUrl: sebraeLogo,
    date: '18 / jun às 19:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Thiago Concer',
    topic: 'PALESTRA',
    shortDescription: 'O especialista em vendas nº 1 do Brasil, com mais de 20 anos de experiência.',
    longDescription: 'Thiago Concer é considerado o maior especialista em vendas do Brasil. Com mais de 20 anos de carreira e milhares de profissionais treinados, ele traz um conteúdo direto ao ponto sobre como vender mais, melhor e com consistência. Esta atividade faz parte da Feira do Empreendedor, coordenada pelo SEBRAE Pato Branco',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
    photoUrls: [thiagoPhoto],
  },
  {
    id: '8',
    iconUrl: sebraeLogo,
    date: '19 / jun às 19:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Gil Giardelli',
    topic: 'PALESTRA',
    shortDescription: 'Professor, futurista, autor e palestrante internacional, referência global em Inteligência Artificial.',
    longDescription: 'Gil Giardelli, com mais de 27 anos de experiência, lecionou como professor em instituições renomadas, como Stanford e MIT, e já realizou mais de 1.500 palestras, incluindo TEDx.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
    photoUrls: [gilPhoto],
  },
  {
    id: '9',
    iconUrl: sebraeLogo,
    date: '20 / jun às 17:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'João Branco',
    topic: 'PALESTRA',
    shortDescription: 'Um dos 10 melhores profissionais de Marketing do Brasil, ex-VP no McDonald\'s.',
    longDescription: 'João Branco é considerado um dos 10 melhores profissionais de Marketing do Brasil. Ex-VP de Marketing do McDonald\'s, ele fala sobre como construir marcas que conectam emocionalmente com as pessoas e geram resultados reais de negócio. Esta atividade faz parte da Feira do Empreendedor, coordenada pelo SEBRAE Pato Branco',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
    photoUrls: [joaoPhoto],
  },
];

export const mockSponsors: Sponsor[] = [
  { id: '1', name: 'Natural Bit', logoUrl: naturalBitLogo, altText: 'Natural Bit Logo' },
  { id: '2', name: 'Aconcaia', logoUrl: aconcaiaLogo, altText: 'Aconcaia Logo' },
  { id: '3', name: 'Supera', logoUrl: superaLogo, altText: 'Supera Logo' },
  { id: '4', name: 'IDS', logoUrl: idsLogo, altText: 'IDS Logo' },
  { id: '5', name: 'AiqFome', logoUrl: aiqfomeLogo, altText: 'AiqFome Logo' },
  { id: '6', name: 'Pastelaria Pancera', logoUrl: panseraLogo, altText: 'Pastelaria Pancera Logo' },
  { id: '7', name: 'Atlas', logoUrl: atlasLogo, altText: 'Atlas Logo' },
  { id: '8', name: 'Viasoft', logoUrl: viasoftLogo, altText: 'Viasoft Logo' },
  { id: '9', name: 'UPLAB', logoUrl: uplabLogo, altText: 'UPLAB Logo' },
  { id: '10', name: 'Simpla', logoUrl: logoSimpla, altText: 'Simpla Logo' },
  { id: '11', name: 'Safe', logoUrl: logoSafe, altText: 'Safe Logo' },
  { id: '12', name: 'RP', logoUrl: rpLogo, altText: 'RP Logo' },
  { id: '13', name: 'Fransiscana', logoUrl: franciscanaLogo, altText: 'Fransiscana Logo' },
];
