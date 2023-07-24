import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar à página inicial</Link>
    </div>
  );
};

export default Error;