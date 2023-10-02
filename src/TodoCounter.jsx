import './styles/TodoCounter.css'

function TodoCounter({ total, completed })  {
    if (total === completed) {
        return (
        <h2 className="counter">
            Has completado todas tus tareas 🎊
        </h2>)
    }
    return (
        <h2 className="counter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h2>
    );
}

export { TodoCounter };