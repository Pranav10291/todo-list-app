import React from "react";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import CompletedCollapsible from "./components/CompletedCollapsible";

export default async function Page() {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect("/auth");
    }

    return (
        <main className="max-w-4xl mx-auto mt-4 min-h-screen h-dvh">
            <div className="min-h-full py-16">
                <TodoList />
                <CompletedCollapsible />
            </div>
            <div className="align-bottom">
                <AddTask />
            </div>
        </main>
    );
}
