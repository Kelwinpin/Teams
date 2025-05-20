import { Container, Title, Icon } from "./styles";

export default function GroupCard({ title }) {
  return (
    <Container>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}