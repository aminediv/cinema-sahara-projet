import { motion } from 'framer-motion';
import { X, Ticket, MapPin, Clock, Calendar, CreditCard, CheckCircle } from 'lucide-react';

interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
}

interface BookingConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onConfirm: () => void;
  movieTitle: string;
  showtime: string;
  date: string;
  selectedSeats: Seat[];
  totalPrice: number;
}

export function BookingConfirmation({
  isOpen,
  onClose,
  onBack,
  onConfirm,
  movieTitle,
  showtime,
  date,
  selectedSeats,
  totalPrice
}: BookingConfirmationProps) {
  if (!isOpen) return null;

  const serviceFee = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + serviceFee;

  return (
    <motion.div 
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      {/* Content */}
      <motion.div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-white/10 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        {/* Header */}
        <div className="relative bg-white/5 border-b border-white/10 p-6 text-center">
          <motion.button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center"
          >
            <CheckCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-xl font-bold text-white">Booking Summary</h2>
          <p className="text-sm text-white/60 mt-1">Review your booking details</p>
        </div>

        {/* Booking Details */}
        <div className="p-6 space-y-4">
          {/* Movie Info */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">{movieTitle}</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 text-white/70">
                <Calendar className="w-4 h-4 text-white" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="w-4 h-4 text-white" />
                <span>{showtime}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-white" />
                <span>Cinema Sahara - Main Hall</span>
              </div>
            </div>
          </div>

          {/* Seats */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Ticket className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Selected Seats ({selectedSeats.length})</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedSeats.map(seat => (
                <span 
                  key={seat.id}
                  className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-sm font-semibold"
                >
                  {seat.id}
                </span>
              ))}
            </div>
            
            <div className="text-xs text-white/50 flex flex-wrap gap-3">
              {selectedSeats.filter(s => s.price === 80).length > 0 && (
                <span>Regular: {selectedSeats.filter(s => s.price === 80).length} × 80 MAD</span>
              )}
              {selectedSeats.filter(s => s.price === 150).length > 0 && (
                <span>VIP: {selectedSeats.filter(s => s.price === 150).length} × 150 MAD</span>
              )}
              {selectedSeats.filter(s => s.price === 200).length > 0 && (
                <span>Love Box: {selectedSeats.filter(s => s.price === 200).length} × 200 MAD</span>
              )}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Price Details</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Tickets ({selectedSeats.length})</span>
                <span>{totalPrice} MAD</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Service Fee</span>
                <span>{serviceFee} MAD</span>
              </div>
              <div className="border-t border-white/10 pt-2 mt-2 flex justify-between text-white font-bold">
                <span>Total</span>
                <span>{grandTotal} MAD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 flex gap-3">
          <motion.button
            onClick={onBack}
            className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-white hover:bg-white/90 text-black font-semibold shadow-lg transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CreditCard className="w-4 h-4" />
            Pay {grandTotal} MAD
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
