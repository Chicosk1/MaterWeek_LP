import type { EventItem, Sponsor } from '../types';

import SILogo from '../assets/logo_si.svg';
import sebraeLogo from '../assets/sebrae.svg';


export const mockEvents: EventItem[] = [
  {
    id: '1',
    iconUrl: SILogo,
    date: '15 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Edison Figueira Junior',
    description: 'Palestra: A Nova Engenharia de Software: IA, Agentes e Mentalidade Empreendedora',
    linkUrl: 'https://www.materdei.edu.br/pt',
  },
  {
    id: '2',
    iconUrl: SILogo,
    date: '15 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Leila Voss',
    description: 'Workshop - Resolvendo Problemas com Design Thinking',
    linkUrl: 'https://www.materdei.edu.br/pt',
  },
  {
    id: '3',
    iconUrl: SILogo,
    date: '16 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Rafael Fernando Dal Bosco e Alessandro Graczyk Moraes',
    description: 'Talk: Além da Ideia: Crescimento, Escala e Sobrevivência',
    linkUrl: 'https://www.materdei.edu.br/pt',
  },
  {
    id: '4',
    iconUrl: SILogo,
    date: '16 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Eduardo Harthecopf',
    description: 'Workshop: Growth Marketing na prática: como tecnologia, dados e criatividade aceleram o crescimento de um negócio',
    linkUrl: 'https://www.materdei.edu.br/pt',
  },
  {
    id: '5',
    iconUrl: SILogo,
    date: '17 / jun às 19:30h',
    location: 'Auditório UNIMATER',
    title: 'Kauhe Tissiani',
    description: 'Palestra - Gestão comercial e os desafios na comercialização de softwares',
    linkUrl: 'https://www.materdei.edu.br/pt',
  },
  {
    id: '6',
    iconUrl: SILogo,
    date: '17 / jun às 20:45h',
    location: 'Auditório UNIMATER',
    title: 'Roger Alexandre Rossoni',
    description: 'Palestra - Captação de Recursos',
    linkUrl: 'https://www.materdei.edu.br/pt',
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
  { id: '1', name: 'GLOBAL_TECH', logoUrl: '', altText: 'Global Tech Logo' }
];