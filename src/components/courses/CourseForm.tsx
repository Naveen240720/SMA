import React, { useState } from 'react';
import { Course } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface CourseFormProps {
  course?: Course;
  onSubmit: (data: Omit<Course, 'id'>) => void;
  onCancel: () => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ course, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: course?.name || '',
    code: course?.code || '',
    instructor: course?.instructor || '',
    credits: course?.credits || 3,
    description: course?.description || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Course Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        label="Course Code"
        type="text"
        value={formData.code}
        onChange={(e) => setFormData({ ...formData, code: e.target.value })}
        required
      />
      <Input
        label="Instructor"
        type="text"
        value={formData.instructor}
        onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
        required
      />
      <Input
        label="Credits"
        type="number"
        min="1"
        max="6"
        value={formData.credits}
        onChange={(e) => setFormData({ ...formData, credits: parseInt(e.target.value) })}
        required
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>
      <div className="flex justify-end gap-2 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default CourseForm;