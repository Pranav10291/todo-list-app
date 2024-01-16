import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";
import SignOut from "./SignOut";

const NavBar = () => {
    return (
        <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 ">
                <div className="flex flex-wrap items-center justify-between ml-10 mr-10"><Link href="/">
                    <img
                        src="taskify_title.png"
                        alt="HomePage"
                        className="h-10"
                    />
                </Link>
                <Link href="/todo">Tasks</Link>
                <div className="flex flex-wrap ">
                    <Link 
                        className={buttonVariants()}
                        href="/auth"
                    >
                        Sign in
                    </Link>
                    <SignOut />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
