
import { Course } from "@/types";
import { supabase } from "@/lib/supabase";

interface Result {
    status: "error" | "success"
    data?: Course[];
    error?: unknown;
}

export async function getCourses(): Promise<Result> {
    const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching courses:", error);
        return {
            status: "error",
            error: error
        };
    } else {
        return {
            status: "success",
            data: data as Course[]
        }
    }
}