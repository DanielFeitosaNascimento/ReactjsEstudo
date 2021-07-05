import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';


type TransactionsContent = {
  id: number;
  title: string;
  createdAt: string;
  type: string;
  amount: number;
  category: string;
}

type TransactionInput = Omit<TransactionsContent, 'id' | 'createdAt'>

type TransactionsGlobal = {
  transactions: Array<TransactionsContent>
  createNewTransaction: (transaction :TransactionInput) => Promise<void>;
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionsGlobal>(
  {} as TransactionsGlobal
);


export function TransactionsProvider( { children }: TransactionsProviderProps ) {
  const [transactions, setTransactions] = useState<TransactionsContent[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then((response) => {
        setTransactions(response.data.transactions);
      })


  },[])

  async function createNewTransaction(transactionInput: TransactionInput) {
    try {
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
      })
      const { transaction } = await response.data;  
      
      setTransactions([
        ...transactions,
        transaction,
      ])
    } catch (error) {
      
    }
  }


  return (
    <TransactionsContext.Provider value={{transactions, createNewTransaction }} >
      {children}
    </TransactionsContext.Provider>
  )
}

