import { TransactionsContext } from '../contexts/TransactionsContext';
import { useContext } from "react";

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}