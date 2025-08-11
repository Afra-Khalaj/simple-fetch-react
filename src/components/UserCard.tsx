import { User } from '@/store/slices/usersSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Globe, Building } from 'lucide-react';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card className="glass-card hover-glow rounded-xl overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground">
            {user.name}
          </CardTitle>
          <Badge variant="secondary" className="rounded-full">
            @{user.username}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          {user.company.catchPhrase}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-foreground">{user.email}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-foreground">{user.phone}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-foreground">{user.website}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-foreground">
              {user.address.city}, {user.address.zipcode}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Building className="h-4 w-4 text-primary" />
            <span className="text-foreground">{user.company.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};