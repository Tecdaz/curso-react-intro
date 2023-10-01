function TodoCounter({ total, completed })  {
    if (total === completed) {
        return (
        <h2 className="text-2xl text-center m-0 p-12 font-normal">
        Has completado todas tus tareas 🎊
        </h2>)
    }
    return (
        <h2 className="text-2xl text-center m-0 p-12 font-normal">
            Has completado <span className="font-bold">{completed}</span> de <span className="font-bold">{total}</span> TODOs
        </h2>
    );
}

export { TodoCounter };