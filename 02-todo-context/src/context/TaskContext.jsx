import { createContext, useState } from "react";

/**
 * Una tarea tipica ha de ser:
 * {
 *  id: string,
 *  title: string,
 *  completed: boolean
 * }
 */


// Crear un contexto se divide en dos partes
// 1. Crear el contexto
export const TaskContext = createContext();

// 2. Crear el proveedor (provider) del contexto
export const TaskProvider = ({ children }) => {

    // 1. Hooks
    const [task, setTask] = useState(() => {
        // Obtener las tareas del localStorage
        const savedTask = localStorage.getItem("task");
        return savedTask ? JSON.parse(savedTask) : [];
    });

    // 2. Funciones
    //    - Añadir tarea
    //    - Eliminar tarea
    //    - editar tarea
    //    - Marcar como completada
    // No olvidar que las tareas han de estar guardadas en el localStorage

    const addTask = (task) => {
        setTask((prevTasks) => [...prevTasks, task]);
    }
    const removeTask = (taskId) => {
        setTask((prevTasks) => prevTasks.filter(task => task.id === taskId));
    }
    const editTask = (taskId, task) => {    // Hacer yo

    }
    const toggleTaskCompletion = (taskId) => {
        setTask((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task));
    };


    // 3. Return -> Debe retornar algo que envuelva al children
    return (
        <TaskContext.Provider value={   // Se le pasa un objeto (task)
            {
                task: task,
                addTask: addTask,
                removeTask: removeTask,
                editTask: editTask,
                toggleTaskCompletion: toggleTaskCompletion,
            }
        }  > {/* Aquí se deben pasar las props que se desean compartir con el componente hijo */}
            {children}
        </TaskContext.Provider>

    );

};


