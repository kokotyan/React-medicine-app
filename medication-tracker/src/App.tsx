import React, { useState, useEffect, useCallback } from 'react';
import MedicationList from './components/MedicationList';
import AddMedication from './components/AddMedication';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import './App.css';

interface Medication {
  name: string;
  dosage: string;
  time: string;
}

const App: React.FC = () => {
  const [medications, setMedications] = useState<Medication[]>([]);

  const checkReminders = useCallback(() => {
    const now = moment().format('LT');
    medications.forEach(medication => {
      if (medication.time === now) {
        toast.info(`Time to take your medication: ${medication.name}`);
      }
    });
  }, [medications]);

  useEffect(() => {
    const interval = setInterval(() => {
      checkReminders();
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [checkReminders]);

  const addMedication = (medication: Medication) => {
    setMedications([...medications, medication]);
    toast.success("Medication added!");
  };

  return (
    <div className="App">
      <h1>Medication Tracker</h1>
      <AddMedication addMedication={addMedication} />
      <MedicationList medications={medications} />
      <ToastContainer />
    </div>
  );
}

export default App;
