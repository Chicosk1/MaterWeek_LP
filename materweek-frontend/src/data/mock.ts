import type { EventItem, Sponsor } from '../types';

import escudoIcon from '../assets/escudo.svg';
import nuvemIcon from '../assets/nuvem.svg';
import roboIcon from '../assets/robo.svg';

export const mockEvents: EventItem[] = [
  {
    id: '1',
    iconUrl: roboIcon,
    date: '18 / jun às 19h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Thiago Concer',
    description: 'O especialista em vendas nº 1 do Brasil, com mais de 20 anos de experiência na área comercial.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
  {
    id: '2',
    iconUrl: nuvemIcon,
    date: '19 / jun às 19h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'Caito Maia',
    description: 'Fundador da Chilli Beans e Ótica Chilli Beans.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  },
  {
    id: '3',
    iconUrl: escudoIcon,
    date: '20 / jun às 17h',
    location: 'Centro Regional de Eventos de Pato Branco',
    title: 'João Branco',
    description: 'Considerado um dos 10 melhores profissionais de Marketing do Brasil, ex-VP de Marketing do McDonald\'s.',
    linkUrl: 'https://sebraepr.com.br/lp/feirapatobranco/?srsltid=AfmBOorE1gDLNUq27jZqCCrofJTaI-5lkfUOF8BEopR51s9hQvUR_PJK#inscreva-se',
  }
];

export const mockSponsors: Sponsor[] = [
  { id: '1', name: 'GLOBAL_TECH', logoUrl: '', altText: 'Global Tech Logo' },
  { id: '2', name: 'NEXUS_SYS', logoUrl: '', altText: 'Nexus Sys Logo' },
  { id: '3', name: 'CYBER_CORE', logoUrl: '', altText: 'Cyber Core Logo' },
  { id: '4', name: 'CLOUD_NINE', logoUrl: '', altText: 'Cloud Nine Logo' },
  { id: '5', name: 'QUANTUM_AI', logoUrl: '', altText: 'Quantum AI Logo' }
];