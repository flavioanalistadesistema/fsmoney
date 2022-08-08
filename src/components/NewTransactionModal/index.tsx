import Modal from "react-modal"

interface NewTransactionModalProps {
    isOpenModal: any,
    onRequestClose: () => void
}

export function NewTransactionModal (props: NewTransactionModalProps) {

    return (
        <Modal
            isOpen={props.isOpenModal}
            onRequestClose={props.onRequestClose}
        >
            <h1>Teste modal</h1>
        </Modal>
    );
}