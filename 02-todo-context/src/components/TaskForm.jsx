import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    // Importo el contexto taskContext
    const { addTask } = useContext(TaskContext);
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
            addTask({
                id: Date.now(),
                title: taskName,
                completed: false,
            });
        }
    };

    return (
        <form className="p-4 bg-gray-200 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Agregar tarea</h2>
            <input type="text"
                value={taskName}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                onChange={(e) => setTaskName(e.target.value)} />
            <button type="submit" value="xxx" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Agregar
            </button>
        </form>
    )
}

export default TaskForm