import Modal from "react-modal"

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal ({ isOpenModal, onRequestClose }: NewTransactionModalProps) {

    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={onRequestClose}
        >
            <h1>Teste modal</h1>
        </Modal>
    );
}