import { useState } from "react"

// --- В форме будет храниться состояние Input
function List({ addTask }) {
    const [userInput, setUserInput] = useState('')
    
    // --- Если значение input будет меняться
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("") // --- Очистка input после добаления задачи
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form className="flex justify-center items-center m-auto bg-white/30 w-3/5 rounded p-2" onSubmit={handleSubmit}>
            <input className="p-5 w-3/5 border-none text-xl rounded shadow-sm"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button className= "p-5 border-none bg-cyan-600 rounded shadow-sm">➕</button>
        </form>
    )
}

export default List