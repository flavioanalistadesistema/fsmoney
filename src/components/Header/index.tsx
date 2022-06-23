import logol from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logol} alt="fs money" />
                <button type="button">
                    nova transalçao
                </button>
            </Content>
        </Container>
    )
}