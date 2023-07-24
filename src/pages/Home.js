import React from 'react';
import Item from '../components/Item';

const Home = () => {

    const users = [
        { id: 1, name: 'Usuário 1', description: 'Descrição do Usuário 1', imageUrl: 'https://via.placeholder.com/150'},
        { id: 2, name: 'Usuário 2', description: 'Descrição do Usuário 2', imageUrl: 'https://via.placeholder.com/150'},
        { id: 3, name: 'Usuário 3', description: 'Descrição do Usuário 3', imageUrl: 'https://via.placeholder.com/150'},
    ];

    return (
        <div class='user-item'>
            <h1>Lista de usuários</h1>
            <ul>
                {users.map(user => (
                   <li>
                    <Item user={user} showDetailsButton />
                   </li>  
                ))}
            </ul>
        </div>
    );
};

export default Home;