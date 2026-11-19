import React, { useState, useEffect } from 'react';
import { api } from '../server.js';

export function  UserList(){
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers(){
        try{
            const response = await api.get('/users')

            const userDate = response.data.users || response.data;
            setUsers(userDate); 
        }catch(error){
            setError('Não foi possivel carregar os usuários');
        }finally{
            setLoading(false);
        }
        }
        fetchUsers();
    });

    if(loading) return <p>Carregando dados...</p>;
    if(error) return <p style={{color : 'red'}}></p>

    return(
        <div>
            <h2>Lista de usuários</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>[user.firstName || user.nome]</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};