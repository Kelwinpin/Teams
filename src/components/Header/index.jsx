import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from '../../assets/logo.png';

export default function Header({ showBackButton = false }) {
    return (
        <Container>
            { 
                showBackButton &&
                    <BackButton>
                        <BackIcon />
                    </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    );
}