"use client";

import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodoById, updateCompletedById, updateTitleById } from "../actions";
import { MdOutlineDone } from "react-icons/md";
import { cn } from "@/lib/utils";

interface TaskProps {
    id: string;
    title: string;
    completed: boolean;
}

const Task: React.FC<TaskProps> = ({ id, title, completed }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(title);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        await updateTitleById(id, taskToEdit);
        setOpenModalEdit(false);
        router.refresh();
    };

    const handleDeleteTask = async (id: string) => {
        await deleteTodoById(id);
        setOpenModalDeleted(false);
        router.refresh();
    };


    return (
        <tr key={id}>
            <td className="w-full"><h1 className={cn({"line-through":completed})}>{title}</h1></td>
            <td className="flex gap-5">
                <MdOutlineDone 
                    onClick={() => updateCompletedById(id, !completed)}
                    cursor="pointer"
                    className="text-green-500"
                    size={25}
                />
                <FiEdit
                    onClick={() => setOpenModalEdit(true)}
                    cursor="pointer"
                    className="text-black-500"
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
                                onChange={(e) => setTaskToEdit(e.target.value)}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                            <button type="submit" className="btn">
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
                            className="btn"
                        >
                            Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    );
};

export default Task;
