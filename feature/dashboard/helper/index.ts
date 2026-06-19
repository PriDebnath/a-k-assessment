
import { Course } from "@/types";
import { supabase } from "@/lib/supabase";

export async function getCourses(): Promise<Course[]> {
    const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error("Failed to fetch courses");
    }
    const result: Course[] = data ?? [] satisfies Course[]
    return result
}

