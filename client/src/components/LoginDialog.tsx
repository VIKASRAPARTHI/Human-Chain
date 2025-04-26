import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { User } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
  const { login } = useAuth();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: !name.trim(),
      email: !validateEmail(email)
    };
    
    setErrors(newErrors);
    
    if (!newErrors.name && !newErrors.email) {
      const success = login(name, email);
      
      if (success) {
        toast({
          title: "Login successful",
          description: `Welcome back, ${name}!`,
        });
        resetForm();
        onClose();
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again.",
          variant: "destructive"
        });
      }
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setErrors({
      name: false,
      email: false
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary bg-opacity-20 sm:mx-0">
              <User className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle className="text-lg leading-6 font-medium">
              Sign in to your account
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="mt-4 space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="login-name">Name</Label>
              <Input
                id="login-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Name is required
                </p>
              )}
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Valid email is required
                </p>
              )}
            </div>
          </div>
          
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">
              Sign in
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
