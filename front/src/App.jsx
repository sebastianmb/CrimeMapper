import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { RideBookingPanel } from "./components/RideBookingPanel";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';





export function App() {
  


  
  return (
    
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<RideBookingPanel />} />
          
        </Routes>
      </LocalizationProvider>
    
  );
}
