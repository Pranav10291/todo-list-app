import React from "react";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import { deleteTodoById, readTodo, updateCompletedById } from "./actions";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

export default async function Page() {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect("/auth");
    }

    const { data: todos } = await readTodo();

    return (
        <main className="max-w-4xl mx-auto mt-4 h-screen">
            <div className="text-center my-5 flex flex-col gap-4 ">
                <h1 className="text-2xl font-bold">Your Tasks</h1>
                <AddTask />
            </div>
            <TodoList />
        </main>
    );
}
