"use server"

import createSupabaseServerClient from "@/lib/supabase/server"
import { revalidatePath, unstable_noStore as noStore } from "next/cache";


export async function createTodo(title: string) {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.from("todos").insert({ title}).single();
    revalidatePath("/todo");

    return JSON.stringify(result);
}

export async function readTodo() {
    noStore();
    const supabase = await createSupabaseServerClient();

    return await supabase.from("todos").select("*");
}

export async function deleteTodoById(id: string) {
    const supabase = await createSupabaseServerClient();
    await supabase.from("todos").delete().match({ id });
    revalidatePath("/todo");
}

export async function updateCompletedById(id: string, completed: boolean) {
    const supabase = await createSupabaseServerClient();
    await supabase.from("todos").update({completed}).match({ id });
    revalidatePath("/todo");
}

export async function updateTitleById(id: string, title: string) {
    const supabase = await createSupabaseServerClient();
    await supabase.from("todos").update({title}).match({ id });
    revalidatePath("/todo");
}
