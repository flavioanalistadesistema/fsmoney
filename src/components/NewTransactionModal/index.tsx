import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import closeImg from '../../assets/close.svg'
import outcome from '../../assets/outcome.svg'
import income from '../../assets/income.svg'
import { useState } from "react"

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal ({ isOpenModal, onRequestClose }: NewTransactionModalProps) {
    
    const [type, setType] = useState('deposit')

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
            <Container>
                <h2>Teste modal</h2>

                <input
                    placeholder="Titulo"
                />

                <input
                    type="number"
                    placeholder="Valor"
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
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}