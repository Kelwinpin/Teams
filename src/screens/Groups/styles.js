import styled from "styled-components/native";

export const TextGroup = styled.Text`
    color: ${(props) => props.theme.COLORS.WHITE};
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    font-size: ${(props) => props.theme.FONT_SIZE.XL};
`;

export const Container = styled.View`
    background-color: ${(props) => props.theme.COLORS.GRAY_600};
    flex: 1;
    align-items: center;
    justify-content: center;
`;