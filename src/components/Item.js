import React from 'react';

const Item = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.telefone}</p>
            <p>CPF: {user.cpf}</p>
        </div>
    );
};

export default Item;