import logo from "../../assets/Logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="cm-money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
