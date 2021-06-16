import style from '../styles/components/RepositoryItem.module.scss';

const RepositoryItem = (props) => {
  return (
    <li className={style.container}>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a target='_blank' href={props.repository.html_url}>
        Acessar Repositório
      </a>
    </li>
  )
}

export default RepositoryItem