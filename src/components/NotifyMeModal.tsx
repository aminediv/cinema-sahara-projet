import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Bell, X, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface NotifyMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  movieId: number;
  onNotified: (movieId: number) => void;
}

// Helper functions for localStorage
const getNotifiedMovies = (): number[] => {
  const stored = localStorage.getItem('notifiedMovies');
  return stored ? JSON.parse(stored) : [];
};

const addNotifiedMovie = (movieId: number): void => {
  const current = getNotifiedMovies();
  if (!current.includes(movieId)) {
    localStorage.setItem('notifiedMovies', JSON.stringify([...current, movieId]));
  }
};

export const isMovieNotified = (movieId: number): boolean => {
  return getNotifiedMovies().includes(movieId);
};

export function NotifyMeModal({ isOpen, onClose, movieTitle, movieId, onNotified }: NotifyMeModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Save to localStorage
    addNotifiedMovie(movieId);
    onNotified(movieId);
    
    setIsSubmitted(true);
    toast({
      title: "You're on the list!",
      description: `We'll notify you when "${movieTitle}" is available.`,
    });
    
    setTimeout(() => {
      onClose();
      setEmail('');
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent hideCloseButton className="max-w-md p-0 border-none shadow-2xl bg-transparent overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-lg" />
        
        {/* Close Button */}
        <motion.button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="w-4 h-4" />
        </motion.button>

        <div className="relative z-10 p-6">
          {!isSubmitted ? (
            <>
              <DialogHeader className="mb-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <DialogTitle className="text-xl font-bold text-white text-center">
                  Get Notified
                </DialogTitle>
                <p className="text-white/60 text-sm text-center mt-2">
                  Be the first to know when <span className="text-white font-medium">{movieTitle}</span> hits theaters
                </p>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  required
                />
                
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gray-200 hover:bg-gray-100 text-black font-semibold flex items-center justify-center gap-2 transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  <Bell className="w-4 h-4" />
                  Notify Me
                </motion.button>
              </form>

              <p className="text-white/40 text-xs text-center mt-4">
                We'll only send you one email when the movie is released
              </p>
            </>
          ) : (
            <motion.div 
              className="text-center py-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You're All Set!</h3>
              <p className="text-white/60 text-sm">
                We'll email you when <span className="text-white font-medium">{movieTitle}</span> is available
              </p>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}