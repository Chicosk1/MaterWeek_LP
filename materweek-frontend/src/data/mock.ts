import type { EventItem, Sponsor } from '../types';

import aconcaiaLogo from '../assets/aconcaia.svg';
import aiqfomeLogo from '../assets/aiqfome.svg';
import idsLogo from '../assets/ids.svg';
import naturalBitLogo from '../assets/natural-bit.svg';
import superaLogo from '../assets/supera.svg';

import SILogo from '../assets/logo_si.svg';
import sebraeLogo from '../assets/sebrae.svg';

import alessandroPhoto from '../assets/Alessandro.png';
import edisonPhoto from '../assets/Edison.png';
import eduardoPhoto from '../assets/Eduardo.png';
import kauhePhoto from '../assets/Kauhe.png';
import leilaPhoto from '../assets/Leila.png';
import rafaelPhoto from '../assets/Rafael.png';
import rogerPhoto from '../assets/Roger.png';


export const mockEvents: EventItem[] = [
  {
    id: '1',
    iconUrl: SILogo,
    date: '15 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Edison Figueira Junior',
    topic: 'PALESTRA',
    shortDescription: 'IA, agentes e mentalidade empreendedora na nova engenharia de software.',
    longDescription: 'A Nova Engenharia de Software: IA, Agentes e Mentalidade Empreendedora. Descubra como a inteligência artificial e os agentes autônomos estão redefinindo o papel do engenheiro de software — e o que é preciso desenvolver para prosperar nesse cenário.',
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
    longDescription: 'Do Problema à Solução: Transformando Ideias em Inovação. Uma dinâmica interativa que guia os participantes pelo processo de identificar dores reais, estruturar hipóteses e prototipar soluções com criatividade e método.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [leilaPhoto],
  },
  {
    id: '3',
    iconUrl: SILogo,
    date: '16 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Rafael Fernando Dal Bosco e Alessandro Graczyk Moraes',
    topic: 'TALK',
    shortDescription: 'Os desafios reais de crescer, escalar e sobreviver no mercado.',
    longDescription: 'Além da Ideia: Crescimento, Escala e Sobrevivência. Rafael e Alessandro compartilham experiências de quem já passou pelos bastidores do empreendedorismo — as decisões difíceis, os erros que ensinam e as estratégias que realmente funcionam para escalar um negócio.',
    linkUrl: 'https://materdei.jacad.com.br/academico/eventos/programacao-do-evento/74',
    photoUrls: [rafaelPhoto, alessandroPhoto],
  },
  {
    id: '4',
    iconUrl: SILogo,
    date: '16 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Eduardo Harthecopf',
    topic: 'WORKSHOP',
    shortDescription: 'Como tecnologia, dados e criatividade aceleram o crescimento.',
    longDescription: 'Growth Marketing na Prática: Como Tecnologia, Dados e Criatividade Aceleram o Crescimento. Um workshop mão na massa sobre como construir estratégias de crescimento sustentável combinando análise de dados, automação e conteúdo criativo.',
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
    longDescription: 'Gestão Comercial e os Desafios na Comercialização de Softwares. Uma visão aprofundada sobre como estruturar times comerciais, construir proposta de valor para produtos de software e superar as objeções mais comuns no processo de venda B2B.',
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
    longDescription: 'Quem quer Dinheiro? Captação de Recursos e Estruturação de Projetos. Roger apresenta os principais caminhos para captar investimento — editais, investidores-anjo, venture capital e linhas de fomento — e como estruturar um projeto que realmente convence.',
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
    longDescription: 'Thiago Concer é considerado o maior especialista em vendas do Brasil. Com mais de 20 anos de carreira e milhares de profissionais treinados, ele traz um conteúdo direto ao ponto sobre como vender mais, melhor e com consistência.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
  {
    id: '8',
    iconUrl: sebraeLogo,
    date: '19 / jun às 19:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Caito Maia',
    topic: 'PALESTRA',
    shortDescription: 'Fundador da Chilli Beans, referência em branding e varejo no Brasil.',
    longDescription: 'Caito Maia é o fundador da Chilli Beans, marca que revolucionou o varejo de óculos no Brasil. Ele compartilha a jornada de construir uma das marcas mais reconhecidas do país — da ideia irreverente ao negócio com presença global.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
  {
    id: '9',
    iconUrl: sebraeLogo,
    date: '20 / jun às 17:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'João Branco',
    topic: 'PALESTRA',
    shortDescription: 'Um dos 10 melhores profissionais de Marketing do Brasil, ex-VP no McDonald\'s.',
    longDescription: 'João Branco é considerado um dos 10 melhores profissionais de Marketing do Brasil. Ex-VP de Marketing do McDonald\'s, ele fala sobre como construir marcas que conectam emocionalmente com as pessoas e geram resultados reais de negócio.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
];

export const mockSponsors: Sponsor[] = [
  { id: '1', name: 'Natural Bit', logoUrl: naturalBitLogo, altText: 'Natural Bit Logo' },
  { id: '2', name: 'Aconcaia', logoUrl: aconcaiaLogo, altText: 'Aconcaia Logo' },
  { id: '3', name: 'Supera', logoUrl: superaLogo, altText: 'Supera Logo' },
  { id: '4', name: 'IDS', logoUrl: idsLogo, altText: 'IDS Logo' },
  { id: '5', name: 'AiqFome', logoUrl: aiqfomeLogo, altText: 'AiqFome Logo' }
  // { id: '6', name: 'Pizarria Franciscana', logoUrl: pizarriaFranciscanaLogo, altText: 'Pizarria Franciscana Logo' },
  // { id: '7', name: 'Pastelaria Pancera', logoUrl: pastelariaPanceraLogo, altText: 'Pastelaria Pancera Logo' }
];
