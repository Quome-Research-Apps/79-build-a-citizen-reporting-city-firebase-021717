'use server';

/**
 * @fileOverview Summarizes issue details using AI to provide a concise summary for city employees.
 *
 * - summarizeIssueDetails - A function that summarizes issue details.
 * - SummarizeIssueDetailsInput - The input type for the summarizeIssueDetails function.
 * - SummarizeIssueDetailsOutput - The return type for the summarizeIssueDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeIssueDetailsInputSchema = z.object({
  issueDetails: z.string().describe('The detailed description of the issue reported by the citizen.'),
  category: z.string().describe('The category of the issue reported by the citizen.'),
});
export type SummarizeIssueDetailsInput = z.infer<typeof SummarizeIssueDetailsInputSchema>;

const SummarizeIssueDetailsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the issue details.'),
});
export type SummarizeIssueDetailsOutput = z.infer<typeof SummarizeIssueDetailsOutputSchema>;

export async function summarizeIssueDetails(input: SummarizeIssueDetailsInput): Promise<SummarizeIssueDetailsOutput> {
  return summarizeIssueDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeIssueDetailsPrompt',
  input: {schema: SummarizeIssueDetailsInputSchema},
  output: {schema: SummarizeIssueDetailsOutputSchema},
  prompt: `You are an AI assistant helping city employees quickly understand citizen-submitted issue details.

  Summarize the issue details provided below, extracting the key problem and assessing its urgency. The summary should be concise and informative.

  Category: {{{category}}}
  Issue Details: {{{issueDetails}}}`,
});

const summarizeIssueDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeIssueDetailsFlow',
    inputSchema: SummarizeIssueDetailsInputSchema,
    outputSchema: SummarizeIssueDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
