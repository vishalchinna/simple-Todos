import './index.css'

const TodoListItems = props => {
  const {information, Key, deleteUser} = props
  const {title} = information
  const deleteTheItem = () => {
    console.log('hell')
    deleteUser(Key)
  }
  return (
    <li className="listItem">
      <p className="title">{title}</p>
      <button className="btn" onClick={deleteTheItem} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoListItems
