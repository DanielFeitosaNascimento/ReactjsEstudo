import { useTransactions } from '../../hooks/useTransactions';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';

import { Container } from './styles';

const Summary = () => {
  const { transactions } = useTransactions();

  const totalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + transaction.amount;
    }

    return acc;
  }, 0)

  const totalWithdraws = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + transaction.amount;
    }

    return acc;
  }, 0)

  const totalDepositsFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalDeposits)

  const totalWithdrawsFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalWithdraws)

  const total = totalDeposits - totalWithdraws;

  const totalFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>{totalDepositsFormatted}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>
          <strong>- {totalWithdrawsFormatted}</strong>
      </div>
      <div className="highlight-background" >
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>{totalFormatted}</strong>
      </div>
    </Container>
  )
}

export default Summary;