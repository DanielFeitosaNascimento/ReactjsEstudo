import RepositoryItem from './RepositoryItem';
import style from '../styles/components/RepositoryList.module.scss';
import { useEffect, useState } from 'react';

type RepositoryListProps = {
  
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList = (props: RepositoryListProps) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
