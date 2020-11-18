import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Assessoras.com'
    },
    createdAt: 1555016400000,
    categoria: 'Assessoria de Casamento',
    likes : 2
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Quinta da Roça'
    },
    createdAt: 1555016400000,
    categoria: 'Espaço',
    likes : 1

  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Prato Feito'
    },
    createdAt: 1554930000000,
    categoria: 'Buffet',
    likes : 1
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Assessores maia'
    },
    createdAt: 1554757200000,
    categoria: 'Assessoria de Casamento',
    likes: 0
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Wall Markt'
    },
    createdAt: 1554670800000,
    categoria: 'Lista de Presentes',
    likes: 0
  }
];
