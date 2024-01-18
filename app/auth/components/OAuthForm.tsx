"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { createClient } from "@supabase/supabase-js";

export default function OAuthForm() {
	const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

	const signInWithGoogle = async () => {
		let { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
		});
		if (error) {
			console.log(error)
			return
		}
		else {
			console.log(data)
		}
	};

	return <Button onClick={signInWithGoogle} className="w-full">Login With Google</Button>;
}
