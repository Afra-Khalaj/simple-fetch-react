import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchUsers } from '@/store/slices/usersSlice';
import { UserCard } from '@/components/UserCard';
import { LoadingCard } from '@/components/LoadingCard';
import TextClassificationForm, { type PredictionResult } from '@/components/TextClassificationForm';
import PredictionResults from '@/components/PredictionResults';
import { Button } from '@/components/ui/button';
import { RefreshCw, Users, Brain } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const { toast } = useToast();
  const [predictionResults, setPredictionResults] = useState<PredictionResult | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleRefresh = () => {
    dispatch(fetchUsers());
    toast({
      title: "Refreshing",
      description: "Fetching latest user data...",
    });
  };

  const handlePredictionSubmit = (results: PredictionResult) => {
    setPredictionResults(results);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Text Classification</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Text Classifier</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Advanced AI-powered text classification system with real-time predictions 
              for subject categorization and organization mapping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleRefresh}
                disabled={loading}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-xl hover-glow"
              >
                {loading ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Refresh Data
                  </>
                )}
              </Button>
              
              <div className="text-sm text-muted-foreground">
                {users.length > 0 && `${users.length} users loaded`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Classification Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto mb-12">
          <TextClassificationForm onSubmit={handlePredictionSubmit} />
        </div>
        
        {predictionResults && (
          <div className="mb-16">
            <PredictionResults results={predictionResults} />
          </div>
        )}
      </div>

      {/* Users Grid */}
      <div className="container mx-auto px-6 py-16 border-t border-border/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">User Directory</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Redux state management demonstration with user data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          ) : (
            users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          )}
        </div>
        
        {!loading && users.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No users found</h3>
              <p className="text-muted-foreground mb-4">
                Click refresh to load user data
              </p>
              <Button onClick={handleRefresh} variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Load Users
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>Built with React, Redux Toolkit, Axios, React Hook Form, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
