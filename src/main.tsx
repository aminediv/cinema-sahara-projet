import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import HelpCenter from "./pages/HelpCenter.tsx";
import Auth from "./pages/Auth.tsx";
import MyBookings from "./pages/MyBookings.tsx";
import Offers from "./pages/Offers.tsx";
import SeatSelectionPage from "./pages/SeatSelectionPage.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/select-seats" element={<SeatSelectionPage />} />
          </Routes>
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);
