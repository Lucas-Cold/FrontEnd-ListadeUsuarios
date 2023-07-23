import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    const users = [
        { id: 1, name: 'Usuário 1', description: 'Descrição do Usuário 1'},
        { id: 2, name: 'Usuário 2', description: 'Descrição do Usuário 2'},
        { id: 3, name: 'Usuário 3', description: 'Descrição do Usuário 3'},
    ];

    return (
        <div>
            <h1>Lista de usuários</h1>
            <ul>
                {users.map(user => (
                   <li> key={user.id}
                    <span>{user.name}</span>
                    <Link to={`/details/${user.id}`}>
                        <button>Ver detalhes</button>
                    </Link>
                   </li>  
                ))}
            </ul>
        </div>
    );
};

export default Home;