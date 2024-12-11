import React from 'react';
import { Course } from '../../types';
import { BookOpen, Users, Pencil, Trash2 } from 'lucide-react';
import Button from '../ui/Button';

interface CourseCardProps {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-sm text-gray-600">{course.code}</p>
            </div>
          </div>
          <p className="text-gray-600 mb-2">{course.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.instructor}</span>
            </div>
            <span>Credits: {course.credits}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            icon={Pencil}
            onClick={() => onEdit(course)}
            aria-label="Edit course"
          />
          <Button
            variant="danger"
            icon={Trash2}
            onClick={() => onDelete(course.id)}
            aria-label="Delete course"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;