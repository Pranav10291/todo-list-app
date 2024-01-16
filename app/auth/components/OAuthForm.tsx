"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function OAuthForm() {
	const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

	const signInWithGoogle = async () => {
			const result = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo:'{location.origin}/auth/callback/'},
			});
	};

	return <Button onClick={signInWithGoogle} className="w-full">Login With Google</Button>;
}
