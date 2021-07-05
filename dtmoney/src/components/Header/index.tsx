
import logoImage from '../../assets/logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onHandleOpenTransactionModal: () => void
}

export default function Header({ onHandleOpenTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content >
        <img src={logoImage} alt="dt money" />
        <button type="button" onClick={onHandleOpenTransactionModal}>
          Nova transação
        </button>

        
      </Content>
    </Container>
  )
}
