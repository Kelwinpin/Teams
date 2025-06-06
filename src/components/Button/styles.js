import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;

  width: 100%;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  margin-bottom: 24px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) =>  theme.COLORS.WHITE };
`;

