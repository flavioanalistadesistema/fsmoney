import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'
import { useState } from "react";

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

  return (
    <>
      <Header 
        onOpenNewtransactionModal={handleOpenNewTransactionModal}
      />
         <Dashboard />
         <Modal 
              isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModal}
          >
              <h1>Teste modal</h1>
          </Modal>

      <GlobalStyle />
    </>
  );
}


