'use client'
import { use, useEffect, useState, useState } from 'react';
import styles from './pages.module.css';

export default function Localidades() {

    const [paises, setPaises] = useState([]);

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
            if (!response.ok) {
                throw new Error('Erro ao buscar países');
            }
            const data = await response.json();
            console.log('dados', data);
        }catch(e) {
            console.log('Ocorreu um erro: ', e.mensage);    
        }

    }
    useEffect(() => {
        getPaises();
    }, [])
    return (
        <div>
            <h1>Localidades</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SIGLA</th>
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {ufs.map(ufs => (
                        <tr key={uf.id}>
                            <td>{uf.id}</td>
                            <td>{uf.nome}</td>
                            <td>{uf.sigla}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

<select>
    {ufs.map(uf => (
        <option key={uf.id} value={uf.id}>{uf.nome} - {uf.sigla}</option>
    ))}
</select>