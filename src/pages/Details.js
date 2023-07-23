import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  
  const users = [
    { id: 1, name: 'Usuário 1', description: 'Descrição do usuário 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Usuário 2', description: 'Descrição do usuário 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Usuário 3', description: 'Descrição do usuário 3', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return (
      <div>
        <h2>Usuário não encontrado!</h2>
        <Link to="/">Voltar à página inicial</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.description}</p>
      <img src={user.imageUrl} alt={user.name} />
      <br />
      <Link to="/">Voltar à página inicial</Link>
    </div>
  );
};

export default Details;