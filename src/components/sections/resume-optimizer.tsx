"use client";

import { useFormState, useFormStatus } from "react-dom";
import { analyzeResume } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Wand2, Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" /> Get Insights
        </>
      )}
    </Button>
  );
}

const ResumeOptimizerSection = () => {
  const initialState = { message: null, data: null, errors: null };
  const [state, dispatch] = useFormState(analyzeResume, initialState);

  return (
    <section id="resume-optimizer">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">AI Resume Optimizer</h2>
        <p className="max-w-2xl mx-auto text-foreground/80 md:text-lg">
          Paste your resume and an optional job description to get AI-powered feedback and improve your chances of landing an interview.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <form action={dispatch}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Analyze Your Resume</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid w-full gap-2">
              <Label htmlFor="resumeText">Your Resume Text</Label>
              <Textarea
                id="resumeText"
                name="resumeText"
                placeholder="Paste the full text of your resume here..."
                rows={12}
                required
              />
              {state.errors?.resumeText && (
                <p className="text-sm text-destructive">{state.errors.resumeText[0]}</p>
              )}
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="jobDescription">Target Job Description (Optional)</Label>
              <Input
                id="jobDescription"
                name="jobDescription"
                placeholder="Paste the job description here for tailored feedback..."
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.message && state.data && (
        <Card className="max-w-4xl mx-auto mt-8 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Your Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-lg">Overall Score: {state.data.overallScore}/100</Label>
              <Progress value={state.data.overallScore} className="w-full mt-2 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                Improvement Suggestions
              </h3>
              <ul className="space-y-3 list-disc list-inside text-foreground/80">
                {state.data.suggestions.map((suggestion: string, index: number) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
       {state.message && !state.data && !state.errors && (
         <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
        </Alert>
       )}
    </section>
  );
};

export default ResumeOptimizerSection;
