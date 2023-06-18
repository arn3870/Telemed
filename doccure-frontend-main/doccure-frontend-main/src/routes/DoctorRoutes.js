import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorSignup from "../pages/Doctor/DoctorSignup";
import DoctorVerification from "../pages/Doctor/DoctorVerification";
import DoctorLogin from "../pages/Doctor/DoctorLogin";
import DoctorDashboard from "../pages/Doctor/DoctorDashboard";
import DoctorTimeSchedule from "../pages/Doctor/DoctorTimeSchedule";

function DoctorRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/doctor_login" element={<DoctorLogin />} />
        <Route path="/doctor_signup" element={<DoctorSignup />} />
        <Route path="/doctor_verification" element={<DoctorVerification />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/schedule_timing" element={<DoctorTimeSchedule />} />

      </Routes>
    </div>
  );
}

export default DoctorRoutes;
