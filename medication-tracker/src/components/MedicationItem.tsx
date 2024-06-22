import React from 'react';

interface Medication {
  name: string;
  dosage: string;
  time: string;
}

interface MedicationItemProps {
  medication: Medication;
}

const MedicationItem: React.FC<MedicationItemProps> = ({ medication }) => {
  return (
    <div>
      <h3>{medication.name}</h3>
      <p>Dosage: {medication.dosage}</p>
      <p>Time: {medication.time}</p>
    </div>
  );
}

export default MedicationItem;
