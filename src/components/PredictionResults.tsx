import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Building, Tags, Users } from 'lucide-react';
import type { PredictionResult } from './TextClassificationForm';

interface PredictionResultsProps {
  results: PredictionResult;
}

interface CategoryConfig {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  parent: {
    title: 'Parent Subject',
    icon: Tags,
    gradient: 'from-primary/20 to-primary/5',
  },
  subject: {
    title: 'Subject',
    icon: Building,
    gradient: 'from-secondary/20 to-secondary/5',
  },
  organization: {
    title: 'Organization',
    icon: Users,
    gradient: 'from-accent/20 to-accent/5',
  },
};

export default function PredictionResults({ results }: PredictionResultsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gradient-text mb-6">
        Classification Results
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(results.predictions).map(([category, predictions]) => {
          const config = categoryConfigs[category as keyof PredictionResult['predictions']];
          const IconComponent = config.icon;
          
          return (
            <Card key={category} className="glass-card border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <IconComponent className="h-5 w-5 text-primary" />
                  {config.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {predictions.map((prediction, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg bg-gradient-to-r ${config.gradient} border border-border/30`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground text-sm">
                        {prediction.label}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {(prediction.probability * 100).toFixed(1)}%
                      </Badge>
                    </div>
                    
                    <Progress 
                      value={prediction.probability * 100} 
                      className="h-2 bg-muted/30"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}