import React from "react";
import { readTodo } from "../actions";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import CompletedTask from "./CompletedTask";

const CompletedCollapsible: React.FC = async () => {
    const { data: todos } = await readTodo();

    return (
        <Collapsible>
            <div className="flex items-center space-x-5 px-4 py-5">
                <h4 className="font-bold text-xs text-gray-500 ">
                    Completed Tasks
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="xs">
                        <CaretSortIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-1">
                {todos?.map((todo) => {
                    if (todo.completed === true) {
                        return (
                                <CompletedTask  
                                    key={todo.id}
                                    id={todo.id}
                                    title={todo.title}
                                    completed={todo.completed} />
                        );
                    }
                })}
            </CollapsibleContent>
        </Collapsible>
    );
};

export default CompletedCollapsible;
