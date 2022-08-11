import Modal from "react-modal"
import { Container } from "./styles"
import closeImg from '../../assets/close.svg'

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