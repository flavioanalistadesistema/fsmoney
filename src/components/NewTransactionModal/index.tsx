import Modal from "react-modal"
import { Container } from "./styles"

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