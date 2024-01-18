import readUserSession from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
    const {data}= await readUserSession()
	if(data.session){
		return redirect("/todo")
	}

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5">
            <div className="pt-36">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/taskify_logo_light.svg"
                    alt="Taskify Logo"
                    width={180}
                    height={50}
                    priority
                />
            </div>
            <div className="pb-24">
                <h1 className="flex justify-center text-base font-bold text-gray-900">
                    Welcome to Taskify
                </h1>
                <p className="flex justify-center">Your Simple Task Management App</p>
                <p className="flex justify-center"><Link href="/auth" className="font-bold">Sign in </Link> &nbsp;to continue</p>
            </div>
        </main>
    );
}
