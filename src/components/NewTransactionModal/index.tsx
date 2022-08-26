import Modal from "react-modal"
import { Container, TransactionTypeContainer } from "./styles"
import closeImg from '../../assets/close.svg'
import outcome from '../../assets/outcome.svg'
import income from '../../assets/income.svg'

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal ({ isOpenModal, onRequestClose }: NewTransactionModalProps) {

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
                    <button
                        type="button"                        
                    >
                        <img src={income} alt="entrada" />
                        <span>Saidas</span>
                    </button>
                    <button
                        type="button"                        
                    >
                        <img src={outcome} alt="saidas" />
                        <span>saidas</span>
                    </button>

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