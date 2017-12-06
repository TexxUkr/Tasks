export default (todos, filter) => {
  if (filter === 'ALL') return todos
  if (filter === 'COMPLETED') return todos.filter(todo => todo.completed === true)
  return todos.filter(todo => !todo.completed)
}
