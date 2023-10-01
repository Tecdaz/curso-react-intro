function TodoItem( { text, completed}){
    return (
      <li className="bg-zinc-50 relative flex justify-center items-center mt-6 shadow-[0_5px_50px_0_rgba(32,35,41,0.25)]">
        <span className={`cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold absolute left-3 ${completed && "text-green-500"}`}>V</span>
        <p className={`mt-6 mr-0 mb-6 ml-6 text-lg leading-6 font-normal ${completed && "line-through"}`}>{text}</p>
        <span className="cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold absolute -top-6 right-0 hover:text-red-700">X</span>
      </li>
    );
}

export { TodoItem };