import { useState, useEffect } from "react";

function App() {
    const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");

    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (event) => {
    event.preventDefault(); 
    const text = input.trim();
    if (text === "") return; 
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setInput(""); 
    };

    return (
    <main className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task</h1>


        <form onSubmit={addTask} className="flex gap-2">
        <input
            className="border rounded px-3 py-2 flex-1 my-4"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="タスクを入力"
        />
        <button
            type="submit"
            className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
            追加
        </button>
        </form>

        <ul className="space-y-2">
        {tasks.map((task) => (
            <li
            key={task.id}
            className="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2"
            >
            <span
                className={`flex-1 cursor-pointer ${task.done ? "line-through text-gray-400" : ""}`}
                onClick={() => toggleTask(task.id)}
            >
                {task.text}
            </span>
            <button
                className="text-blue-400 hover:text-blue-600 text-sm"
                onClick={() => deleteTask(task.id)}
            >
                削除
            </button>
            </li>
        ))}
        </ul>

        {tasks.length === 0 && (
        <p className="text-center text-gray-400 mt-8">タスクがありません</p>
        )}
    </main>
    );
}

export default App;
