"use server";

import {
  getResumeInsights,
  type ResumeInsightsInput,
  type ResumeInsightsOutput,
} from "@/ai/flows/resume-insights";
import { z } from "zod";

const FormSchema = z.object({
  resumeText: z
    .string()
    .min(100, { message: "Resume text must be at least 100 characters long." }),
  jobDescription: z.string().optional(),
});

type State = {
  message: string | null;
  data: ResumeInsightsOutput | null;
  errors?: {
    resumeText?: string[];
    jobDescription?: string[];
  } | null;
};

export async function analyzeResume(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    resumeText: formData.get("resumeText"),
    jobDescription: formData.get("jobDescription"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getResumeInsights(
      validatedFields.data as ResumeInsightsInput
    );
    return { message: "Success", data: result, errors: null };
  } catch (error) {
    console.error("AI analysis failed:", error);
    return {
      message: "An error occurred while analyzing the resume. Please try again later.",
      data: null,
      errors: null,
    };
  }
}
