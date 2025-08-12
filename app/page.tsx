'use client'

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUsers } from "@/store/slices/usersSlice";
import TextClassificationForm, {
  type PredictionResult,
} from "@/components/TextClassificationForm";
import PredictionResults from "@/components/PredictionResults";
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.users);
  const { toast } = useToast();
  const [predictionResults, setPredictionResults] =
    useState<PredictionResult | null>(null);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handlePredictionSubmit = (results: PredictionResult) => {
    setPredictionResults(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-2xl mx-auto mb-12">
          <TextClassificationForm onSubmit={handlePredictionSubmit} />
        </div>

        {predictionResults && (
          <div className="mb-16">
            <PredictionResults results={predictionResults} />
          </div>
        )}
      </div>

      <footer className="border-t border-border/50">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              Built with Next.js, Redux Toolkit, Axios, React Hook Form, and
              Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
