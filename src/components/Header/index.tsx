import logol from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewtransactionModal: () => void
}

export function Header({ onOpenNewtransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logol} alt="fs money" />
                <button type="button" onClick={onOpenNewtransactionModal}>
                    nova transalçao
                </button>
            </Content>
        </Container>
    )
}