function TodoItem( { text, completed}){
    return (
      <li className="bg-zinc-50 relative flex justify-center items-center mt-6 shadow-2xl">
        <span className="cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold absolute left-3">V</span>
        <p className="mt-6 mr-0 mb-6 ml-6 text-lg leading-6 font-normal">{text}</p>
        <span className="cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold absolute -top-6 right-0 hover:text-red-700">X</span>
      </li>
    );
}

export { TodoItem };