'use server';

/**
 * @fileOverview Provides AI-powered suggestions for improving a user's resume.
 * 
 * - getResumeInsights - A function that analyzes a resume and provides improvement suggestions.
 * - ResumeInsightsInput - The input type for the getResumeInsights function.
 * - ResumeInsightsOutput - The return type for the getResumeInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeInsightsInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to be analyzed.'),
  jobDescription: z.string().optional().describe('The job description for which the resume is being tailored (optional).'),
});
export type ResumeInsightsInput = z.infer<typeof ResumeInsightsInputSchema>;

const ResumeInsightsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of suggestions for improving the resume.'),
  overallScore: z.number().describe('An overall score representing the quality of the resume.'),
});
export type ResumeInsightsOutput = z.infer<typeof ResumeInsightsOutputSchema>;

export async function getResumeInsights(input: ResumeInsightsInput): Promise<ResumeInsightsOutput> {
  return resumeInsightsFlow(input);
}

const resumeInsightsPrompt = ai.definePrompt({
  name: 'resumeInsightsPrompt',
  input: {schema: ResumeInsightsInputSchema},
  output: {schema: ResumeInsightsOutputSchema},
  prompt: `You are an AI resume expert. Analyze the provided resume and provide specific, actionable suggestions for improvement.

Resume Text: {{{resumeText}}}

Job Description (Optional): {{{jobDescription}}}

Consider the following aspects:
* Content: Is the content clear, concise, and relevant to the target job?
* Formatting: Is the resume well-formatted and easy to read?
* Skills: Are the relevant skills highlighted effectively?
* Experience: Is the work experience described in a compelling manner?
* Keywords: Does the resume contain relevant keywords for the industry?

Provide an overall score (out of 100) representing the quality of the resume and suggestions in JSON format.
`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const resumeInsightsFlow = ai.defineFlow(
  {
    name: 'resumeInsightsFlow',
    inputSchema: ResumeInsightsInputSchema,
    outputSchema: ResumeInsightsOutputSchema,
  },
  async input => {
    const {output} = await resumeInsightsPrompt(input);
    return output!;
  }
);
