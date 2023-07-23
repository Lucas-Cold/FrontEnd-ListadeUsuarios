import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.description}</p>
      <img src={user.imageUrl} alt={user.name} />
      <br />
      <Link to={`/Details/${user.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default Item;