import { Container } from './styles';
import { useTheme } from 'styled-components/native';

export default function Input({ value, onChangeText }) {
    const { COLORS } = useTheme();


    return (
        <Container
            value={value}
            onChangeText={onChangeText}
            placeholder="Type something"
            placeholderTextColor={COLORS.GRAY_300}
        />
    );
}