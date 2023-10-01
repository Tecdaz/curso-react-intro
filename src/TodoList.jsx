function TodoList(props) {
  return (
    <ul className="pb-14">
        {props.children}
    </ul>
  )
}

export { TodoList }