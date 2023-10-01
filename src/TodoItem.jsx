import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
function TodoItem(props){
    return (
      <li className={`bg-zinc-50 relative flex justify-center items-center mt-6 shadow-[0_5px_50px_0_rgba(32,35,41,0.25)] ${props.completed && "bg-neutral-300"}`}>
        <AiFillCheckCircle className={`cursor-pointer h-8 w-8 absolute left-3  ${props.completed? "text-green-500" : "text-neutral-500"}`}onClick={props.onComplete}/>
        <p className={`mt-6 mr-0 mb-6 ml-6 text-lg leading-6 font-normal ${props.completed && "line-through"}`}>{props.text}</p>
        <AiFillDelete className="cursor-pointer h-8 w-8 absolute -top-4 right-0 hover:text-red-700"
        onClick={props.onDelete}/>
      </li>
    );
}

export { TodoItem };