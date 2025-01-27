import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { RideBookingPanel } from "./components/RideBookingPanel";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ClerkProvider } from '@clerk/clerk-react';
import PrivateRoute from "./components/PrivateRoute";
import { Envios } from "./components/Order/Envios";


export function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<PrivateRoute element={<RideBookingPanel />} />} />
          <Route path="/envios" element={<PrivateRoute element={<Envios />} />} />
        </Routes>
      </LocalizationProvider>
    </ClerkProvider>
  );
}
