import { Container, Title, Subtitle } from "./styles";

export default function Highlight({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}