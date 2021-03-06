import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    categoria: 'Lista de Presentes',
    likes: 'R$ 130,000,00'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    categoria: 'Espaço',
    likes : 'R$ 90,000,00'

  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    categoria: 'Buffet',
    likes : 'R$ 15,000,00'

  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    categoria: 'Assessoria de Casamento',
    likes: 'R$ 10,000,00'
  },
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    categoria: 'Assessoria de Casamento',
    likes : 'R$ 5,000,00'
  }
  
];
