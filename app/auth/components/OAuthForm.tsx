import { Button } from "@/components/ui/button";
import React from "react";
import { signInWithGoogle } from "../actions";

export default function OAuthForm() {
	return <Button onClick={signInWithGoogle} className="w-full">Login With Google</Button>;
}
