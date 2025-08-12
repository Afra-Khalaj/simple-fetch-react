import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  text: z.string().min(1, 'Text is required'),
});

type FormData = z.infer<typeof formSchema>;

export interface PredictionResult {
  predictions: {
    parent: Array<{ label: string; probability: number }>;
    subject: Array<{ label: string; probability: number }>;
    organization: Array<{ label: string; probability: number }>;
  };
}

interface TextClassificationFormProps {
  onSubmit: (result: PredictionResult) => void;
}

export default function TextClassificationForm({ onSubmit }: TextClassificationFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post<PredictionResult>('https://request-classification.farazpardazan.com/classify', {
        text: data.text,
      });
      
      onSubmit(response.data);
      
      toast({
        title: "Success",
        description: "Text classification completed",
      });
    } catch (error) {
      console.error('Classification error:', error);
      
      // Mock response for demo purposes
      const mockResponse: PredictionResult = {
        predictions: {
          parent: [
            {"label": "شهرداری", "probability": 0.65},
            {"label": "حمل و نقل", "probability": 0.2},
            {"label": "بهداشت", "probability": 0.1},
            {"label": "آب و فاضلاب", "probability": 0.03},
            {"label": "محیط زیست", "probability": 0.02}
          ],
          subject: [
            {"label": "جمع‌آوری زباله", "probability": 0.4},
            {"label": "تعمیر خیابان", "probability": 0.25},
            {"label": "دفع فاضلاب", "probability": 0.2},
            {"label": "نور خیابان", "probability": 0.1},
            {"label": "نظافت شهری", "probability": 0.05}
          ],
          organization: [
            {"label": "شهرداری منطقه 5", "probability": 0.5},
            {"label": "شرکت آب و فاضلاب", "probability": 0.3},
            {"label": "اداره محیط زیست", "probability": 0.1},
            {"label": "سازمان پسماند", "probability": 0.07},
            {"label": "شرکت نورپردازی", "probability": 0.03}
          ]
        }
      };
      
      onSubmit(mockResponse);
      
      toast({
        title: "Demo Mode",
        description: "Showing mock classification results",
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Text Classification</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Enter your text for classification
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your text here"
                    className="min-h-[120px] bg-background/50 border-border focus:ring-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full hover-glow"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Classifying...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Classify Text
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}