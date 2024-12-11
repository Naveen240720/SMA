import React from 'react';
import { Student } from '../../types';
import { Mail, Pencil, Trash2 } from 'lucide-react';
import Button from '../ui/Button';

interface StudentCardProps {
  student: Student;
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={student.profileImage}
            alt={student.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>{student.email}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Grade: {student.grade}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            icon={Pencil}
            onClick={() => onEdit(student)}
            aria-label="Edit student"
          />
          <Button
            variant="danger"
            icon={Trash2}
            onClick={() => onDelete(student.id)}
            aria-label="Delete student"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;