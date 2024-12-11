import React, { useState, useEffect } from 'react';
import { Student } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface StudentFormProps {
  onSubmit: (data: Omit<Student, 'id'>) => void;
  onCancel: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    enrollmentDate: '',
    profileImage: ''
  });
  const [students, setStudents] = useState<Student[]>([]); // To hold all students
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all students from the API when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data); // Store fetched student data
      } catch (err) {
        setError('Error fetching students');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Handle form submission to create a new student
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST', // Use POST to create a new student
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to save student data');
      }
      const data = await response.json();
      onSubmit(data); // Call onSubmit with the newly created student data
    } catch (err) {
      setError('Error submitting data');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      <Input
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        label="Grade"
        type="text"
        value={formData.grade}
        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
        required
      />
      <Input
        label="Enrollment Date"
        type="date"
        value={formData.enrollmentDate}
        onChange={(e) => setFormData({ ...formData, enrollmentDate: e.target.value })}
        required
      />
      <Input
        label="Profile Image URL"
        type="url"
        value={formData.profileImage}
        onChange={(e) => setFormData({ ...formData, profileImage: e.target.value })}
      />
      <div className="flex justify-end gap-2 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>

      <h2>All Students</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name} - {student.grade}</li>
          ))}
        </ul>
      ) : (
        <div>No students found</div>
      )}
    </form>
  );
};

export default StudentForm;
