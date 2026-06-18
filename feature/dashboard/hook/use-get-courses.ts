"use client";
import { Course } from "@/types";
import { useEffect, useState } from "react";
import { getCourses } from "@/feature/dashboard/helper";


export function useCourses() {
  const [data, setData] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);

    const res = await getCourses();

    if (res.status === "error") {
      setError(res.error);
      setData(null);
    } else {
      setData(res.data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchCourses,
  };
}