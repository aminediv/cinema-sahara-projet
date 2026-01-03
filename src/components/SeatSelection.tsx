import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Armchair } from 'lucide-react';
import { BookingConfirmation } from './BookingConfirmation';
import { BookingSuccess } from './BookingSuccess';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'selected' | 'occupied' | 'vip';
  price: number;
}

interface SeatSelectionProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  showtime: string;
  date: string;
}

const generateSeats = (): Seat[][] => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = [8, 10, 10, 12, 12, 12, 10, 10];
  
  return rows.map((row, rowIndex) => {
    const seats: Seat[] = [];
    const count = seatsPerRow[rowIndex];
    const isVipRow = rowIndex >= 4 && rowIndex <= 5;
    
    for (let i = 1; i <= count; i++) {
      // Randomly mark some seats as occupied
      const isOccupied = Math.random() < 0.25;
      
      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        status: isOccupied ? 'occupied' : (isVipRow ? 'vip' : 'available'),
        price: isVipRow ? 120 : 80
      });
    }
    return seats;
  });
};

export function SeatSelection({ isOpen, onClose, movieTitle, showtime, date }: SeatSelectionProps) {
  const [seats] = useState<Seat[][]>(generateSeats);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const generateConfirmationNumber = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'SAH-';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'occupied') return;
    
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatColor = (seat: Seat) => {
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    if (isSelected) return 'bg-white text-black shadow-lg shadow-white/30';
    if (seat.status === 'occupied') return 'bg-white/10 text-white/20 cursor-not-allowed';
    if (seat.status === 'vip') return 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/40 border-amber-500/30';
    return 'bg-white/10 text-white/60 hover:bg-white/20 border-white/10';
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const saveBooking = async (bookingCode: string) => {
    if (!user) return;
    
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          user_id: user.id,
          movie_title: movieTitle,
          show_date: date,
          show_time: showtime,
          selected_seats: selectedSeats.map(s => s.id),
          total_price: totalPrice + Math.round(totalPrice * 0.05), // Including service fee
          booking_code: bookingCode,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error saving booking:', error);
      toast.error('Failed to save booking. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleConfirmBooking = async () => {
    if (!user) {
      toast.error('Please sign in to book tickets');
      navigate('/auth');
      return;
    }
    
    const newConfirmation = generateConfirmationNumber();
    setConfirmationNumber(newConfirmation);
    await saveBooking(newConfirmation);
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      {/* Content */}
      <motion.div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-white/10 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-zinc-900/95 backdrop-blur-sm border-b border-white/10 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">{movieTitle}</h2>
            <p className="text-sm text-white/60">{date} • {showtime}</p>
          </div>
          <motion.button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="p-6">
          {/* Screen */}
          <div className="relative mb-12">
            <div className="w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-2" />
            <div className="w-3/4 mx-auto h-8 bg-gradient-to-b from-primary/20 to-transparent rounded-t-full" />
            <p className="text-center text-white/40 text-sm font-medium tracking-widest">SCREEN</p>
          </div>

          {/* Seats Grid */}
          <div className="flex flex-col items-center gap-2 mb-8">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-2">
                {/* Row Label */}
                <span className="w-6 text-center text-white/40 text-sm font-medium">
                  {row[0]?.row}
                </span>
                
                {/* Seats */}
                <div className="flex gap-1 md:gap-2">
                  {row.map((seat, seatIndex) => {
                    // Add aisle gap
                    const hasGapBefore = seatIndex === Math.floor(row.length / 2);
                    
                    return (
                      <div key={seat.id} className={`flex ${hasGapBefore ? 'ml-4 md:ml-8' : ''}`}>
                        <motion.button
                          onClick={() => handleSeatClick(seat)}
                          disabled={seat.status === 'occupied'}
                          className={`w-6 h-6 md:w-8 md:h-8 rounded-t-lg border text-xs font-bold transition-all ${getSeatColor(seat)}`}
                          whileHover={seat.status !== 'occupied' ? { scale: 1.15 } : {}}
                          whileTap={seat.status !== 'occupied' ? { scale: 0.95 } : {}}
                        >
                          {seat.number}
                        </motion.button>
                      </div>
                    );
                  })}
                </div>
                
                {/* Row Label */}
                <span className="w-6 text-center text-white/40 text-sm font-medium">
                  {row[0]?.row}
                </span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-lg bg-white/10 border border-white/10" />
              <span className="text-white/60">Available (80 MAD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-lg bg-amber-500/20 border border-amber-500/30" />
              <span className="text-white/60">VIP (120 MAD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-lg bg-white" />
              <span className="text-white/60">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-lg bg-white/5" />
              <span className="text-white/60">Occupied</span>
            </div>
          </div>

          {/* Selected Seats Summary */}
          {selectedSeats.length > 0 && (
            <motion.div 
              className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Selected Seats</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSeats.map(seat => (
                      <span 
                        key={seat.id} 
                        className="px-3 py-1 rounded-lg bg-white/20 text-white text-sm font-semibold"
                      >
                        {seat.id}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm">Total</p>
                  <p className="text-2xl font-bold text-white">{totalPrice} MAD</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Confirm Button */}
          <motion.button
            onClick={() => selectedSeats.length > 0 && setShowConfirmation(true)}
            disabled={selectedSeats.length === 0}
            className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
              selectedSeats.length > 0 
                ? 'bg-white text-black hover:bg-white/90 shadow-lg' 
                : 'bg-white/10 text-white/30 cursor-not-allowed'
            }`}
            whileHover={selectedSeats.length > 0 ? { scale: 1.02 } : {}}
            whileTap={selectedSeats.length > 0 ? { scale: 0.98 } : {}}
          >
            <Armchair className="w-5 h-5" />
            {selectedSeats.length > 0 
              ? `Confirm ${selectedSeats.length} Seat${selectedSeats.length > 1 ? 's' : ''} - ${totalPrice} MAD`
              : 'Select Your Seats'
            }
          </motion.button>
        </div>

        {/* Booking Confirmation Modal */}
        <BookingConfirmation
          isOpen={showConfirmation}
          onClose={() => {
            setShowConfirmation(false);
            onClose();
          }}
          onBack={() => setShowConfirmation(false)}
          onConfirm={handleConfirmBooking}
          movieTitle={movieTitle}
          showtime={showtime}
          date={date}
          selectedSeats={selectedSeats}
          totalPrice={totalPrice}
        />

        {/* Booking Success Modal */}
        <BookingSuccess
          isOpen={showSuccess}
          onClose={() => {
            setShowSuccess(false);
            setSelectedSeats([]);
            onClose();
          }}
          movieTitle={movieTitle}
          showtime={showtime}
          date={date}
          selectedSeats={selectedSeats}
          totalPrice={totalPrice}
          confirmationNumber={confirmationNumber}
        />
      </motion.div>
    </motion.div>
  );
}