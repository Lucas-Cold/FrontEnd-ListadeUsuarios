import React from 'react';
import List from './components/List';
import './styles.css';

const App = () => {

  const usersList = [
    {
      name: 'Usuário 1',
      email: 'usuario1@example.com',
      telefone: '11111-1111',
      cpf: '111.111.111-11'
    },
    {
      name: 'Usuário 2',
      email: 'usuario2@example.com',
      telefone: '22222-2222',
      cpf: '222.222.222-22'
    },
    {
      name: 'Usuário 3',
      email: 'usuario3@example.com',
      telefone: '33333-3333',
      cpf: '333.333.333-33'
    },
    
  ];

  return (
    <div class='user-item'>
      <h1>Lista de Usuários</h1>
      <List users={usersList} />
    </div>
  );
};

export default App;