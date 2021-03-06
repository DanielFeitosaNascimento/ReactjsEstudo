import styled from "styled-components";
import { transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title-color);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 1.5rem;

    }
`
export const SelectedTypeTransactionsButtons = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 0.5rem;
`
type RadioBoxProps = {
  isActive: boolean,
  activeColor: 'green' | 'red',
}

const Colors = {
  green: '#33cc95',
  red: '#e52e4d',
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) =>  props.isActive
    ? 
      transparentize(0.85 , Colors[props.activeColor]) 
    : 
      'transparent' };

  img {
    height: 1.875rem;
    width: 1.875rem;
  }

  strong {
    color: var(--text-title);
  }
`