import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const LoadingCard = () => {
  return (
    <Card className="glass-card rounded-xl overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32 bg-muted/50" />
          <Skeleton className="h-5 w-16 rounded-full bg-muted/50" />
        </div>
        <Skeleton className="h-4 w-48 bg-muted/50" />
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-4 w-4 rounded bg-muted/50" />
              <Skeleton className="h-4 w-40 bg-muted/50" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};