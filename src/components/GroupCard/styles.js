import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  margin: 16px 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  align-items: center;
  flex-direction: row;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
    margin-right: 20px;
`;