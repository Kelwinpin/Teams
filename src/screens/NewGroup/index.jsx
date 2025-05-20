import { Container, Content, Icon } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton={true} />
      <Content>
        <Icon />

        <Highlight
          title="New Group"
          subtitle="Create a new group"
        />

        <Input placeholder="Group Name" />

        <Button onPress={() => console.log('create group')}>
          Create Group
        </Button>
      </Content>
    </Container>
  );
}