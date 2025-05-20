import { Container, Message } from "./styles";

export default function ListEmpty({ message }) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}