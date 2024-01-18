import React from "react";
import { AuthForm } from "./components/AuthForm";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function page() {

	const {data}= await readUserSession()
	if(data.session){
		return redirect("/todo")
	}

	return (
		<div className="flex justify-center items-top h-screen py-36 px-5">
			<div className="w-96">
				<AuthForm />
			</div>
		</div>
	);
}
