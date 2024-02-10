"use client";
import React from 'react';
import Navbar from '@/components/Navbar2';
import { useHospitalDetails } from '@/store';

const DashboardPage = () => {
  const { name } = useHospitalDetails();
  alert(name);
  return (
    <div>
      <Navbar username={username} />
    </div>
  );
};

export default DashboardPage;
