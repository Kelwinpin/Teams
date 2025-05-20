import { Container, ScrollList } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";

export function Groups() {
    return (
        <Container>
            <Header />
            <Highlight 
                title="Groups"
                subtitle="Manage your groups"
            />
            <ScrollList>
                <GroupCard title="Group 1" />
                <GroupCard title="Group 1" />

            </ScrollList>
        </Container>
    );
}