import type { EventItem, Sponsor } from '../types';

import aconcaiaLogo from '../assets/aconcaia.svg';
import naturalBitLogo from '../assets/Natural-Bit-preto-e-laranja.svg';
import idsLogo from '../assets/ids.svg';
import aiqfomeLogo from '../assets/aiqfome.svg';
import superaLogo from '../assets/supera.svg';

import SILogo from '../assets/logo_si.svg';
import sebraeLogo from '../assets/sebrae.svg';

import edisonPhoto from '../assets/Edison.png';
import leilaPhoto from '../assets/Leila.png';
import rafaelPhoto from '../assets/Rafael.png';
import alessandroPhoto from '../assets/Alessandro.png';
import eduardoPhoto from '../assets/Eduardo.png';
import kauhePhoto from '../assets/Kauhe.png';
import rogerPhoto from '../assets/Roger.png';


export const mockEvents: EventItem[] = [
  {
    id: '1',
    iconUrl: SILogo,
    date: '15 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Edison Figueira Junior',
    description: 'Palestra - A Nova Engenharia de Software: IA, Agentes e Mentalidade Empreendedora',
    linkUrl: 'https://www.materdei.edu.br/pt',
    photoUrls: [edisonPhoto],
  },
  {
    id: '2',
    iconUrl: SILogo,
    date: '15 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Leila Voss',
    description: 'Dinâmica - Do Problema a Solução: Tranformando Ideias em Inovação',
    linkUrl: 'https://www.materdei.edu.br/pt',
    photoUrls: [leilaPhoto],
  },
  {
    id: '3',
    iconUrl: SILogo,
    date: '16 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Rafael Fernando Dal Bosco e Alessandro Graczyk Moraes',
    description: 'Talk - Além da Ideia: Crescimento, Escala e Sobrevivência',
    linkUrl: 'https://www.materdei.edu.br/pt',
    photoUrls: [rafaelPhoto, alessandroPhoto],
  },
  {
    id: '4',
    iconUrl: SILogo,
    date: '16 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Eduardo Harthecopf',
    description: 'Workshop - Growth Marketing na prática: como tecnologia, dados e criatividade aceleram o crescimento de um negócio',
    linkUrl: 'https://www.materdei.edu.br/pt',
    photoUrls: [eduardoPhoto],
  },
  {
    id: '5',
    iconUrl: SILogo,
    date: '17 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Kauhe Tissiani',
    description: 'Palestra - Gestão comercial e os desafios na comercialização de softwares',
    linkUrl: 'https://www.materdei.edu.br/pt',
    photoUrls: [kauhePhoto],
  },
  {
    id: '6',
    iconUrl: SILogo,
    date: '17 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Roger Alexandre Rossoni',
    description: 'Palestra - Quem quer Dinheiro? Captação de Recursos e Estruturação de Projetos',
    linkUrl: 'https://www.materdei.edu.br/pt',
    photoUrls: [rogerPhoto],
  },
  {
    id: '7',
    iconUrl: sebraeLogo,
    date: '18 / jun às 19:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Thiago Concer',
    description: 'O especialista em vendas nº 1 do Brasil, com mais de 20 anos de experiência na área comercial.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
  {
    id: '8',
    iconUrl: sebraeLogo,
    date: '19 / jun às 19:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Caito Maia',
    description: 'Fundador da Chilli Beans e Ótica Chilli Beans.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
  {
    id: '9',
    iconUrl: sebraeLogo,
    date: '20 / jun às 17:00h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'João Branco',
    description: 'Considerado um dos 10 melhores profissionais de Marketing do Brasil, ex-VP de Marketing do McDonald\'s.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  }
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
