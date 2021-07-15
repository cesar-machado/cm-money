import Modal from "react-modal";
import Close from "../../assets/close.svg";
import OutcomeImg from "../../assets/outcome.svg";
import IncomeImg from "../../assets/income.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={Close} alt="close" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={IncomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={OutcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
