import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SignOut from "./SignOut";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

const NavBar = async () => {
    const { data } = await readUserSession();
    if (!data.session) {
    return (
        <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 ">
            <div className="flex flex-wrap items-center justify-between mx-10">
                <div className="flex items-center flex-shrink-0">
                    <Link href="/">
                        <img
                            src="taskify_title.png"
                            alt="HomePage"
                            className="h-10"
                        />
                    </Link>
                </div>
                <div className=" flex flex-wrap flex-shrink-0 items-center space-x-4">
                    <div className=" hover:bg-gray-800 hover:text-white hover:shadow hover: rounded-lg py-1.5 px-2">
                        <Link href="/todo">
                            Tasks
                        </Link>
                    </div>
                    <div>
                        <Link className={buttonVariants()} href="/auth">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    else{
        return (
            <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 ">
                <div className="flex flex-wrap items-center justify-between mx-10">
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/">
                            <img
                                src="taskify_title.png"
                                alt="HomePage"
                                className="h-10"
                            />
                        </Link>
                    </div>
                    <div className=" flex flex-wrap flex-shrink-0 items-center space-x-4">
                        <div className=" hover:bg-gray-800 hover:text-white hover:shadow hover: rounded-lg py-1.5 px-2">
                            <Link href="/todo">
                                Tasks
                            </Link>
                        </div>
                        <div>
                            <SignOut />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;
