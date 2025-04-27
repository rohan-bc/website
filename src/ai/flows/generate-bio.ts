'use server';
/**
 * @fileOverview Generates an AI-powered biography summary from resume details.
 *
 * - generateBio - A function that generates the biography.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  resumeDetails: z
    .string()
    .describe('The resume details to generate the summary from.'),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  summary: z.object({
    text: z.string().describe('The generated summary text.'),
  }),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {
    schema: z.object({
      resumeDetails: z
        .string()
        .describe('The resume details to generate the summary from.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.object({
        text: z.string().describe('The generated summary text.'),
      }),
    }),
  },
  prompt: `You are an expert resume writer specializing in creating engaging biographies.

  Given the following resume details, generate a personalized and engaging summary of the individual's experience and skills.
  The summary should be concise and highlight the most relevant information for an AI and Robotics engineer.

  Resume Details: {{{resumeDetails}}}`,
});

const generateBioFlow = ai.defineFlow<
  typeof GenerateBioInputSchema,
  typeof GenerateBioOutputSchema
>(
  {
    name: 'generateBioFlow',
    inputSchema: GenerateBioInputSchema,
    outputSchema: GenerateBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
