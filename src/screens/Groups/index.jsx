import { Container, ScrollList } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import { Button } from "../../components/Button";

export function Groups() {
    const [ groups, setGroups ] = useState([]);
    
    return (
        <Container>
            <Header />
            <Highlight 
                title="Groups"
                subtitle="Manage your groups"
            />
            <FlatList
                style={{ width: '100%', height: '100%' }}
                data={groups}
                renderItem={({ item }) => <GroupCard title={item} />}
                keyExtractor={(item) => item}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() => <ListEmpty message="No groups found" />}
            />
            <Button onPress={() => console.log('create group')}>
                Create Group
            </Button>
        </Container>
    );
}