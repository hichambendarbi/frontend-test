import './title.css'

interface Title {
  label: string
  isLosse?: boolean
  color?: string
}

export default function TitlePage(props: Title) {
  return (
      <h1 style={{color: props.color}}>{props.label}</h1>
  )
}