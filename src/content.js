// Dados públicos da Novi. Não coloque números de telefone neste arquivo.
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
    description: 'Configurações de sensibilidade para quem joga Free Fire no emulador. Encontre o ajuste que combina com a sua jogabilidade.',
    tags: ['Sensibilidade', 'Emulador'],
    delivery: 'Liberação na hora',
    timing: 'A sensi de emulador é liberada na hora, após a confirmação do pagamento no Discord.',
    details: ['Sensi voltada para Free Fire no emulador', 'Pagamento e orientações pelo Discord', 'Confirme seu emulador e os detalhes antes da compra'],
    action: 'Quero minha sensi',
  },
  {
    id: 'mobile',
    number: '02',
    icon: 'mobile',
    platform: 'MOBILE / ANDROID & iOS',
    title: 'Seu mobile.\nOutro ritmo.',
    name: 'Painel de sensi e otimização mobile',
    description: 'Sensi e otimização em um painel para mobile. Para a novizada que joga no Android ou no iPhone e quer ajustar a experiência.',
    tags: ['Android', 'iOS', 'Painel mobile'],
    delivery: 'Acesso na hora',
    timing: 'O acesso ao painel mobile é liberado na hora, após a confirmação do pagamento no Discord.',
    details: ['Painel de sensibilidade e otimização mobile', 'Opções para Android e iOS', 'Confirme a compatibilidade com seu aparelho no Discord'],
    action: 'Quero o painel',
    featured: true,
  },
  {
    id: 'otimizacao',
    number: '03',
    icon: 'performance',
    platform: 'PC / ATENDIMENTO REMOTO',
    title: 'Mais ajuste.\nMenos limite.',
    name: 'Otimização para emulador',
    description: 'Um atendimento dedicado para ajustar o seu ambiente de jogo. Otimização remota via AnyDesk, com horário combinado no Discord.',
    tags: ['AnyDesk', 'Emulador', 'Agendamento'],
    delivery: 'Com agendamento',
    timing: 'A otimização é agendada no Discord e realizada remotamente via AnyDesk no horário combinado.',
    details: ['Atendimento remoto para o seu emulador', 'Serviço realizado por AnyDesk', 'Pagamento, disponibilidade e horário combinados no Discord'],
    action: 'Agendar otimização',
  },
];

export const questions = [
  ['Como faço para comprar?', 'Entre no servidor oficial da Novi pelo botão do Discord. Lá você escolhe o serviço, consulta os valores e realiza o pagamento. Este site não recebe pagamentos.'],
  ['O que é liberado na hora?', 'A sensi para emulador e o acesso ao painel mobile são liberados na hora após a confirmação do pagamento no Discord. A otimização de emulador precisa ser agendada.'],
  ['O painel mobile é para Android e iOS?', 'Sim, a Novi oferece opções para Android e iOS. Antes de pagar, confirme no Discord qual opção é compatível com seu aparelho e a versão do sistema.'],
  ['Como funciona a otimização via AnyDesk?', 'Você combina o horário no Discord. No atendimento, a otimização do emulador é feita remotamente por AnyDesk, com o seu acompanhamento. A página não inicia acesso remoto.'],
  ['Onde vejo os valores e tiro dúvidas?', 'Os valores, as condições e as orientações de cada serviço ficam no servidor do Discord. É por lá que a novizada conversa com a equipe e combina o atendimento.'],
];
