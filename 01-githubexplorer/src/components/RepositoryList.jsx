import RepositoryItem from './RepositoryItem';
import style from '../styles/components/RepositoryList.module.scss';
import { useEffect, useState } from 'react';



const RepositoryList = (props) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [repositories])

  return (
    <section className={style.container}>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        
      </ul>
    </section>
  );
}

export default RepositoryList;
