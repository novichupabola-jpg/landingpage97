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
    price: 20,
    pricePrefix: '',
    description: 'A sensi do Novizada para quem joga Free Fire no emulador. Ajuste a sensibilidade de acordo com o seu estilo de jogo.',
    tags: ['Sensibilidade', 'Emulador'],
    delivery: 'Liberação na hora',
    timing: 'A sensi de emulador é liberada após a confirmação do pagamento na Kirvano.',
    details: ['Sensi voltada para Free Fire no emulador', 'Pagamento seguro pela Kirvano', 'Orientações de uso após a confirmação'],
    action: 'Comprar na Kirvano',
    checkoutUrl: 'https://pay.kirvano.com/9b1d7e38-7aeb-4192-a4ca-737a182d7c94',
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
    name: 'Sensi para mobile · Android e iOS',
    price: 20,
    pricePrefix: '',
    description: 'Arquivo de sensi do Novi para Free Fire no celular. Compatível com Android e iOS, com entrega digital após a confirmação da compra na Kirvano.',
    tags: ['Android', 'iOS', 'Arquivo digital'],
    delivery: 'Entrega após a compra',
    timing: 'Após a confirmação na Kirvano, você recebe as orientações de acesso e uso do arquivo digital.',
    details: ['Sensi para Free Fire no mobile', 'Compatível com Android e iOS', 'Entrega digital pela Kirvano', 'Orientações de uso incluídas'],
    action: 'Comprar na Kirvano',
    checkoutUrl: 'https://pay.kirvano.com/9b1d7e38-7aeb-4192-a4ca-737a182d7c94',
  },
];

export const questions = [
  ['Como faço para comprar?', 'Para a sensi mobile ou a sensi de emulador, clique em Comprar na Kirvano e conclua o pagamento por lá. Para o pack com AnyDesk, entre no server do Novizada e fale com o Novi.'],
  ['Quanto custa cada sensi?', 'A sensi para mobile (Android e iOS) custa R$ 20,00. A sensi para emulador também custa R$ 20,00. O pack emu completo do Novizada custa R$ 49,99 e inclui sensi + otimização remota via AnyDesk.'],
  ['Como recebo as sensis?', 'Depois da confirmação do pagamento na Kirvano, você recebe a entrega digital e as orientações de uso do Novi.'],
  ['O que muda no pack emu completo?', 'O pack de R$ 49,99 inclui a sensi para emulador e a otimização remota via AnyDesk. A sensi é liberada após a confirmação; o atendimento de otimização é agendado no Discord.'],
  ['A sensi mobile funciona em Android e iOS?', 'Sim. A oferta mobile é para Android e iOS. Consulte as orientações do arquivo para aplicar tudo corretamente no seu dispositivo.'],
  ['Como funciona a otimização via AnyDesk?', 'Você combina o horário no server do Novizada. No atendimento, a otimização do emulador é feita remotamente por AnyDesk, com o seu acompanhamento. O pagamento e o agendamento acontecem no Discord.'],
];
