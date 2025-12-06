import './styles.scss'

export default function Button({ onClick, text }) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}