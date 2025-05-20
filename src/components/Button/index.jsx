import { Container, Text } from './styles';

export default function Button({ type='primary', children, onPress }) {
  return (
    <Container type={type} onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
}