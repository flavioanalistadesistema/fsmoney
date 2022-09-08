import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import { FormEvent, useState, useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"

import closeImg from '../../assets/close.svg'
import outcome from '../../assets/outcome.svg'
import income from '../../assets/income.svg'

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal ({ isOpenModal, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewtransaction(event: FormEvent) {
        event.preventDefault()
        await createTransaction({
            title,
            amount,
            category,
            type
        })
        
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        
        onRequestClose()
    }
    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Feachar modal" />
            </button>
            <Container onSubmit={handleCreateNewtransaction}>
                <h2>Teste modal</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={income} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcome} alt="saidas" />
                        <span>saidas</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}