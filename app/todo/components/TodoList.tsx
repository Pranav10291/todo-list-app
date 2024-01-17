import React from "react";
import Task from "./Task";
import { deleteTodoById, readTodo, updateCompletedById } from "../actions";

const TodoList: React.FC = async () => {
    const { data: todos } = await readTodo();

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((todo, index) => {              
                        return (
                            <Task key ={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
