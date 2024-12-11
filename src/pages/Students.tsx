import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { students } from '../data/mockData';
import { Student } from '../types';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import StudentCard from '../components/students/StudentCard';
import StudentForm from '../components/students/StudentForm';
import Modal from '../components/ui/Modal';

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log('Delete student:', id);
  };

  const handleSubmit = (data: Omit<Student, 'id'>) => {
    // TODO: Implement save functionality
    console.log('Save student:', data);
    setIsModalOpen(false);
    setSelectedStudent(undefined);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
          Add Student
        </Button>
      </div>

      <div className="mb-6 max-w-md">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search students..."
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredStudents.map(student => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedStudent(undefined);
        }}
        title={selectedStudent ? 'Edit Student' : 'Add Student'}
      >
        <StudentForm
          student={selectedStudent}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedStudent(undefined);
          }}
        />
      </Modal>
    </div>
  );
};

export default Students;