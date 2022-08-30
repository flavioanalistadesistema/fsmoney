import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import closeImg from '../../assets/close.svg'
import outcome from '../../assets/outcome.svg'
import income from '../../assets/income.svg'
import { FormEvent, useState } from "react"

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal ({ isOpenModal, onRequestClose }: NewTransactionModalProps) {
    
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewtransaction(event: FormEvent) {
        event.preventDefault()
        console.log(
            title,
            value,
            category,
            type
        )
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
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
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