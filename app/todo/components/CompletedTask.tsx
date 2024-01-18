"use client";

import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import {
    deleteTodoById,
    updateCompletedById,
    updateTitleById,
} from "../actions";
import { MdOutlineDone } from "react-icons/md";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

interface TaskProps {
    id: string;
    title: string;
    completed: boolean;
}

const CompletedTask: React.FC<TaskProps> = ({ id, title, completed }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(title);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        await updateCompletedById(id, !completed);
        await updateTitleById(id, taskToEdit);
        setOpenModalEdit(false);
        router.refresh();
        toast({
            variant: "info",
            title: "Task has been edited!",
        });
    };

    const handleDeleteTask = async (id: string) => {
        await deleteTodoById(id);
        setOpenModalDeleted(false);
        router.refresh();
        toast({
            variant: "destructive",
            title: "Task has been deleted!",
        });
    };

    return (
        
        <div className="flex items-center p-4 text-gray-600 hover:bg-green-300 border rounded-lg h-12">
            <td className="w-full border-transparent rounded-l-lg">
                <h1 className=" text-sm line-through">{title}</h1>
            </td>
            <td className="border-transparent rounded-r-lg overflow-hidden">
                <div className="flex gap-5">
                    <FiEdit
                        onClick={() => setOpenModalEdit(true)}
                        cursor="pointer"
                        className="text-green-500"
                        size={25}
                    />
                    <Modal
                        modalOpen={openModalEdit}
                        setModalOpen={setOpenModalEdit}
                    >
                        <form onSubmit={handleSubmitEditTodo}>
                            <h3 className="font-bold text-lg">Edit task</h3>
                            <div className="modal-action">
                                <input
                                    value={taskToEdit}
                                    onChange={(e) =>
                                        setTaskToEdit(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full"
                                />
                                <button type="submit" className="btn ">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Modal>
                    <FiTrash2
                        onClick={() => setOpenModalDeleted(true)}
                        cursor="pointer"
                        className="text-red-500"
                        size={25}
                    />
                    <Modal
                        modalOpen={openModalDeleted}
                        setModalOpen={setOpenModalDeleted}
                    >
                        <h3 className="text-lg">
                            Are you sure, you want to delete this task?
                        </h3>
                        <div className="modal-action">
                            <button
                                onClick={() => handleDeleteTask(id)}
                                className="btn "
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setOpenModalDeleted(false)}
                                className="btn"
                            >
                                No
                            </button>
                        </div>
                    </Modal>
                </div>
            </td>
        </div>
    );
};

export default CompletedTask;
