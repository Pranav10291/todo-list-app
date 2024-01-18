"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { createTodo } from "../actions";
import { toast } from "@/components/ui/use-toast";

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        const result = await createTodo(newTaskValue);
        const { error } = JSON.parse(result);
        if (error?.message)
         {
            toast({
                title: "Created Todo",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            {newTaskValue} is created
                        </code>
                    </pre>
                ),
            });
        }
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    };

    return (
        <div className="">
            <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary w-full"
            >
                Add new task <AiOutlinePlus className="ml-2" size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg">Add new task</h3>
                    <div className="modal-action">
                        <input
                            value={newTaskValue}
                            onChange={(e) => setNewTaskValue(e.target.value)}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            required
                        />
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;
