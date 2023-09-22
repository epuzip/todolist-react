import React, { useState } from 'react'
import List from './List'
import ListItem from './ListItem'
import './index.css'

function App() {
  //--- СОздаем пустой массив для Списка задач
  const [tasks, setTasks] = useState ([])

  //-- Добаление задачи
  const addTask = (userInput) => {
    // ---Проверка если input пустой, тогда не добавляем его в список
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false
      }
      // --- Добавление новой задачи к предыдущим
      setTasks([...tasks, newItem])
    }
  }
  // --- Удаление задач
  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
  }
  // --- Функция для переключения задач: готово/не готово
  const handleToggle = (id) => {
    setTasks([
      ...tasks.map((task) => 
      task.id === id ? {...task, complete: !task.complete } : {...task})
    ])

  }
  return (
    <div className="bg-[url('/src/coffee.jpeg')] bg-no-repeat bg-cover min-h-screen bg-center">
    <header className="flex justify-center">
      <h1 className="p-12 text-6xl bg-clip-text text-transparent font-serif font-bold">What are your plans for today?</h1>
    </header>
    <List addTask={addTask} />
    {tasks.map((task) => {
      return (
        <ListItem
          task={task}
          key={task.id} 
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
      )
    })}
</div>
  )
}

export default App
