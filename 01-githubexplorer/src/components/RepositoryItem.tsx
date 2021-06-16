interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a target='_blank' href={props.repository.html_url}>
        Acessar Repositório
      </a>
    </li>
  )
}

export default RepositoryItem