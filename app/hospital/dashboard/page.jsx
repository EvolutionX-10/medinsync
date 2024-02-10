import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar2';

const Dashboard = () => {
  const [hospitalName, setHospitalName] = useState('Default Hospital');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setHospitalName(storedName);
    }
  }, []);

  return (
    <div>
      <Navbar hospitalName={hospitalName} />
    </div>
  );
}

export default Dashboard;
