import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import CloseImage from '../../assets/close.svg';
import IncomeImage from '../../assets/income.svg';
import OutcomeImage from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, SelectedTypeTransactionsButtons } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
} : NewTransactionModalProps) => {
  const { createNewTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');


  async function handlerCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const transaction = {
      type: type,
      title: title,
      amount: value,
      category: category,
    }

    await createNewTransaction(transaction);

    alert('Transação Cadastrada com sucesso.');

    setCategory('');
    setTitle('');
    setValue(0);
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={CloseImage} alt='Fechar Modal' />
      </button>

      <Container  onSubmit={handlerCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input type="text" 
          placeholder='Titulo'
          value={title}
          onChange={(event) => {setTitle(event.target.value)}}
        />

        <input type="number"  
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <SelectedTypeTransactionsButtons>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={IncomeImage} alt="Entrada" />
            <strong>Entrada</strong>
          </RadioBox>
          <RadioBox
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            type="button"
            activeColor='red'
          >
            <img src={OutcomeImage} alt="Saída" />
            <strong>Saída</strong>
          </RadioBox>
        </SelectedTypeTransactionsButtons>

        <input type="text"
          placeholder='Categoria'
          value={category}
          onChange={(event) => {setCategory(event.target.value)}}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal;