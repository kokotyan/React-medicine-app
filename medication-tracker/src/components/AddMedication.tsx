import React, { useState } from 'react';
import moment from 'moment';

interface Medication {
  name: string;
  dosage: string;
  time: string;
}

interface AddMedicationProps {
  addMedication: (medication: Medication) => void;
}

const AddMedication: React.FC<AddMedicationProps> = ({ addMedication }) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMedication({ name, dosage, time: moment(time, 'HH:mm').format('LT') });
    setName('');
    setDosage('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Medication Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Dosage:</label>
        <input type="text" value={dosage} onChange={(e) => setDosage(e.target.value)} required />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <button type="submit">Add Medication</button>
    </form>
  );
}

export default AddMedication;
