function TodoCounter({ total, completed })  {
    return (
        <h2 className="text-2xl text-center m-0 p-12 font-normal">
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export { TodoCounter };