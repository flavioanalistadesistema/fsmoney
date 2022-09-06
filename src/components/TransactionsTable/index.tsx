import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

interface TransactionProps {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}
export function TransactionsTable() {
    const data = useContext(TransactionsContext)
    
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(resp => setTransactions(resp.data.transactions))        
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
                    {transactions.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        month: '2-digit',
                                        day: '2-digit',
                                        year: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }).format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}