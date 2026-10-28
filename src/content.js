// Dados públicos do Novi. Não coloque números de telefone neste arquivo.
// Defina o convite oficial para ativar os botões de compra e agendamento.
export const business = {
  name: 'Novi Sensi',
  discordInvite: 'https://discord.gg/mMk9BTVrW2',
};

export const services = [
  {
    id: 'emulador',
    number: '01',
    icon: 'desktop',
    platform: 'PC / EMULADOR',
    title: 'Sua sensi.\nSeu controle.',
    name: 'Sensi para emulador',
    price: 19.99,
    pricePrefix: '',
    description: 'A sensi do Novizada para quem joga Free Fire no emulador. Ajuste a sensibilidade de acordo com o seu estilo de jogo.',
    tags: ['Sensibilidade', 'Emulador'],
    delivery: 'Liberação na hora',
    timing: 'A sensi de emulador é liberada na hora, após a confirmação do pagamento no Discord.',
    details: ['Sensi voltada para Free Fire no emulador', 'Pagamento e orientações pelo Discord', 'Confirme seu emulador e os detalhes antes da compra'],
    action: 'Quero minha sensi',
  },
  {
    id: 'pack-emulador',
    number: '02',
    icon: 'performance',
    platform: 'PC / PACK COMPLETO',
    title: 'Sensi + otimização.\nSeu pack completo.',
    name: 'Pack emu completo do Novizada',
    price: 49.99,
    pricePrefix: '',
    description: 'Sensi para emulador e otimização remota via AnyDesk no mesmo pack. Combine a configuração com um atendimento agendado para o seu PC.',
    tags: ['Sensi + otimização', 'AnyDesk', 'Emulador'],
    delivery: 'Sensi na hora + otimização agendada',
    timing: 'A sensi é liberada na hora após a confirmação do pagamento. A otimização via AnyDesk é realizada no horário agendado pelo Discord.',
    details: ['Sensi para Free Fire no emulador', 'Otimização remota do emulador via AnyDesk', 'Pagamento e agendamento pelo servidor do Novizada'],
    action: 'Quero o pack completo',
    featured: true,
  },
  {
    id: 'mobile',
    number: '03',
    icon: 'mobile',
    platform: 'MOBILE / ANDROID & iOS',
    title: 'Seu mobile.\nSeu próximo nível.',
    name: 'Painel de sensi e otimização mobile',
    price: 15.90,
    pricePrefix: 'A partir de',
    description: 'Painel de sensi personalizada e otimização para Android e iOS. Escolha entre 10, 20 ou 30 dias de acesso, ou fique com o plano vitalício.',
    tags: ['Android', 'iOS', '4 planos'],
    delivery: 'Acesso na hora',
    timing: 'O painel mobile é liberado na hora após a confirmação do pagamento no Discord. O acesso e o suporte seguem o período do plano escolhido.',
    details: ['Sensi personalizada e otimização do jogo', 'Configurações completas para o seu dispositivo', 'Planos de 10, 20, 30 dias ou vitalício', 'Confirme a compatibilidade com seu aparelho no Discord'],
    action: 'Escolher meu plano',
  },
];

export const mobilePlans = [
  {
    id: 'mobile-10',
    name: '10 dias',
    days: 10,
    price: 15.90,
    features: ['Sensi personalizada', 'Otimização do jogo', 'Configurações completas', 'Suporte durante 10 dias', 'Atualizações incluídas'],
    featured: false,
  },
  {
    id: 'mobile-20',
    name: '20 dias',
    days: 20,
    price: 20.99,
    features: ['Sensi personalizada', 'Otimização do jogo', 'Configurações completas', 'Suporte durante 20 dias', 'Atualizações incluídas'],
    featured: false,
  },
  {
    id: 'mobile-30',
    name: '30 dias',
    days: 30,
    price: 35.99,
    features: ['Sensi personalizada', 'Otimização do jogo', 'Configurações completas', 'Suporte durante 30 dias', 'Atualizações incluídas'],
    featured: false,
  },
  {
    id: 'mobile-vitalicio',
    name: 'Vitalício',
    days: null,
    price: 59.90,
    features: ['Sensi personalizada', 'Otimização do jogo', 'Configurações completas', 'Suporte vitalício', 'Atualizações futuras'],
    featured: true,
  },
];

export const questions = [
  ['Como faço para comprar?', 'Entre no server do Novizada pelo botão do Discord. Escolha o serviço ou plano mobile e conclua o pagamento por lá. Depois da confirmação, você recebe as orientações de acesso ou combina o agendamento.'],
  ['Quanto custam os serviços de emulador?', 'A sensi de emulador custa R$ 19,99. O pack emu completo do Novizada custa R$ 49,99 e inclui sensi + otimização remota via AnyDesk. A sensi é liberada na hora após o pagamento; a otimização precisa de agendamento.'],
  ['Quais são os preços do painel mobile?', 'Os planos são: 10 dias por R$ 15,90, 20 dias por R$ 20,99, 30 dias por R$ 35,99 e vitalício por R$ 59,90. Todos incluem sensi personalizada, otimização do jogo, configurações completas, suporte e atualizações conforme o plano escolhido.'],
  ['O que muda no plano vitalício?', 'O plano vitalício de R$ 59,90 inclui acesso completo ao painel mobile, sensi personalizada, otimização do jogo, configurações completas, suporte vitalício e atualizações futuras.'],
  ['O que é liberado na hora?', 'A sensi para emulador e o painel mobile são liberados na hora após a confirmação do pagamento no Discord. No pack de emulador, a sensi também é liberada na hora; a otimização via AnyDesk é agendada separadamente.'],
  ['O painel mobile é para Android e iOS?', 'Sim, o Novi oferece opções para Android e iOS. Antes de pagar, confirme no Discord qual opção é compatível com seu aparelho e a versão do sistema.'],
  ['Como funciona a otimização via AnyDesk?', 'Você combina o horário no server do Novizada. No atendimento, a otimização do emulador é feita remotamente por AnyDesk, com o seu acompanhamento. O pagamento e o agendamento acontecem no Discord.'],
];
