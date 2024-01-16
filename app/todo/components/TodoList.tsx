import React from "react";
import Task from "./Task";
import { deleteTodoById, readTodo, updateCompletedById } from "../actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
                        const deleteTodo = deleteTodoById.bind(null, todo.id);
                        const updateTodo = updateCompletedById.bind(
                            null,
                            todo.id,
                            !todo.completed
                        );

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
