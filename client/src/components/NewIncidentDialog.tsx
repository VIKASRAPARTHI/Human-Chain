import { useState } from 'react';
import { useIncidents } from '@/contexts/IncidentContext';
import { Severity } from '@/types';
import { Shield } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface NewIncidentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewIncidentDialog({ isOpen, onClose }: NewIncidentDialogProps) {
  const { addIncident } = useIncidents();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('High');
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    severity: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      title: !title.trim(),
      description: !description.trim(),
      severity: !severity
    };
    
    setErrors(newErrors);
    
    if (!newErrors.title && !newErrors.description && !newErrors.severity) {
      addIncident(title, description, severity);
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSeverity('High');
    setErrors({
      title: false,
      description: false,
      severity: false
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 sm:mx-0">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <DialogTitle className="text-lg leading-6 font-medium">
              Report New Incident
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="mt-4 space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="incident-title">Title</Label>
              <Input
                id="incident-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={errors.title ? "border-red-500" : ""}
              />
              {errors.title && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Title is required
                </p>
              )}
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="incident-description">Description</Label>
              <Textarea
                id="incident-description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Description is required
                </p>
              )}
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label>Severity</Label>
              <RadioGroup 
                value={severity} 
                onValueChange={(value) => setSeverity(value as Severity)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Low" id="severity-low" />
                  <Label htmlFor="severity-low">Low</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Medium" id="severity-medium" />
                  <Label htmlFor="severity-medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="High" id="severity-high" />
                  <Label htmlFor="severity-high">High</Label>
                </div>
              </RadioGroup>
              {errors.severity && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Please select a severity level
                </p>
              )}
            </div>
          </div>
          
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
