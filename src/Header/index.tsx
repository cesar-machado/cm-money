import logo from "../assets/Logo.png";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="cm-money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
