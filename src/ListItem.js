import { Trash } from "@phosphor-icons/react"
import { useState } from "react"
import styles from './index.scss'

function ListItem({ task, toggleTask, removeTask }) {
    const [showTrash, setShowTrash] = useState(false);

    const onMouseEnterHandler = () => {
    setShowTrash(true);
    };

    const onMouseLeaveHandler = () => {
    setShowTrash(false);
    };

    return (
        <div key={task.id} className="flex justify-center m-auto bg-white/30 w-3/5 rounded p-2" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <div
                className={task.complete ? "flex justify-center items-center bg-rose-500 h-14 w-3/5 text-gray-800 text-xl line-through font-bold rounded ease-linear duration-700 shadow-sm" : "flex justify-center items-center h-14 w-3/5 text-xl rounded shadow-sm bg-emerald-200 text-gray-800 border border-r-gray-200"}
                onClick={() => toggleTask(task.id)}
                
            >
                {task.task}
            </div>
            <div className="p-4 text-gray-500 hover:text-red-700 box-border h-8 w-8" > 
                {showTrash &&<div onClick={() => removeTask(task.id)}>
                <Trash size={30} /> </div>}
            </div>
        </div>
    )
}

export default ListItem