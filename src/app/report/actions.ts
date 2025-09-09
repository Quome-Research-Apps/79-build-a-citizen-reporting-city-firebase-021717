"use server";

import { z } from 'zod';
import { summarizeIssueDetails } from '@/ai/flows/summarize-issue-details';

const issueSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
});

export type FormState = {
  message: string;
  success: boolean;
  fields?: Record<string, string>;
  issues?: Record<string, string[]>;
};

export async function submitIssue(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData);
  const parsed = issueSchema.safeParse(data);

  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors;
    return {
      message: 'Invalid form data.',
      success: false,
      issues,
    };
  }

  const { category, description } = parsed.data;

  try {
    const { summary } = await summarizeIssueDetails({
      issueDetails: description,
      category,
    });

    // In a real application, you would save the issue to your database here.
    console.log('New Issue Submitted:');
    console.log('Category:', category);
    console.log('Description:', description);
    console.log('AI Summary:', summary);
    if (parsed.data.email) {
      console.log('Citizen Email:', parsed.data.email);
    }
    console.log('---');

    return {
      message: `Your issue has been submitted successfully! AI Summary: "${summary}"`,
      success: true,
    };
  } catch (error) {
    console.error('Error during issue submission:', error);
    return {
      message: 'There was an error processing your request. Please try again.',
      success: false,
    };
  }
}
