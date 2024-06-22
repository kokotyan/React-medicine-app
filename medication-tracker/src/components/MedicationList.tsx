import React from 'react';
import MedicationItem from './MedicationItem';

interface Medication {
  name: string;
  dosage: string;
  time: string;
}

interface MedicationListProps {
  medications: Medication[];
}

const MedicationList: React.FC<MedicationListProps> = ({ medications }) => {
  return (
    <div>
      <h2>Medication List</h2>
      {medications.map((medication, index) => (
        <MedicationItem key={index} medication={medication} />
      ))}
    </div>
  );
}

export default MedicationList;
