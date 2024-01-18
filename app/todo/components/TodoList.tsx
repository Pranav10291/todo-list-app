import React from "react";
import Task from "./Task";
import { readTodo } from "../actions";

const TodoList: React.FC = async () => {
    const { data: todos } = await readTodo();

    return (
        <div className="overflow-x-auto ">
            <table className="table h-full w-full border-seperate border-transparent">
                <thead>
                    <tr>
                        <th className="border-transparent rounded-l-lg text-gray-500">
                            Tasks
                        </th>
                        <th className="border-transparent rounded-r-lg text-gray-500">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((todo) => {
                        if (todo.completed === false) {
                            return (
                                <Task
                                    key={todo.id}
                                    id={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                />
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
