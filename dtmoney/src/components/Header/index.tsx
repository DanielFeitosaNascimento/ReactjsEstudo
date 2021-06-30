import { Container, Content } from './styles';
import logoImage from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content >
        <img src={logoImage} alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
