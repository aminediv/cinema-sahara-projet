import { motion } from 'framer-motion';
import { X, CheckCircle, Calendar, Clock, Ticket, Download, Share2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
}

interface BookingSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  showtime: string;
  date: string;
  selectedSeats: Seat[];
  totalPrice: number;
  confirmationNumber: string;
}

export function BookingSuccess({
  isOpen,
  onClose,
  movieTitle,
  showtime,
  date,
  selectedSeats,
  totalPrice,
  confirmationNumber
}: BookingSuccessProps) {
  if (!isOpen) return null;

  const serviceFee = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + serviceFee;
  
  // Generate QR code data
  const qrData = JSON.stringify({
    confirmation: confirmationNumber,
    movie: movieTitle,
    date,
    time: showtime,
    seats: selectedSeats.map(s => s.id)
  });

  return (
    <motion.div 
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
      
      {/* Content */}
      <motion.div 
        className="relative w-full max-w-md bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        {/* Header */}
        <div className="relative p-6 text-center border-b border-white/10">
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
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center"
          >
            <CheckCircle className="w-8 h-8 text-black" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white">Booking Confirmed</h2>
        </div>

        {/* QR Code */}
        <div className="p-8 flex flex-col items-center border-b border-white/10">
          <div className="bg-white p-4 rounded-xl mb-4">
            <QRCodeSVG value={qrData} size={150} level="H" />
          </div>
          <p className="text-xs text-white/50 uppercase tracking-wider">Confirmation</p>
          <p className="text-xl font-bold text-white font-mono">{confirmationNumber}</p>
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          <h3 className="font-semibold text-white">{movieTitle}</h3>
          
          <div className="flex gap-4 text-sm text-white/70">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-white/40" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-white/40" />
              <span>{showtime}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-white/70">
            <Ticket className="w-4 h-4 text-white/40" />
            <span>Seats: {selectedSeats.map(s => s.id).join(', ')}</span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-white/10">
            <span className="text-white/60 text-sm">Total</span>
            <span className="text-lg font-bold text-white">{grandTotal} MAD</span>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 pt-0 flex gap-2">
          <motion.button
            className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            Save
          </motion.button>
          <motion.button
            className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            <Share2 className="w-4 h-4" />
            Share
          </motion.button>
        </div>

        <p className="text-center text-xs text-white/40 pb-4">
          Show this QR code at the entrance
        </p>
      </motion.div>
    </motion.div>
  );
}