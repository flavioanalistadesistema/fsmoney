import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        api.get('transactions')
            .then(resp => console.log('jsonResponse', resp.data))        
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>27/06/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.400</td>
                        <td>casa</td>
                        <td>15/07/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}