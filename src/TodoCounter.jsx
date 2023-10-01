function TodoCounter({ total, completed })  {
    return (
        <h2 className="text-2xl text-center m-0 p-12 font-normal">
            Has completado <span className="font-bold">{completed}</span> de <span className="font-bold">{total}</span> TODOs
        </h2>
    );
}

export { TodoCounter };