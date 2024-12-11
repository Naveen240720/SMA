import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { courses } from '../data/mockData';
import { Course } from '../types';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import CourseCard from '../components/courses/CourseCard';
import CourseForm from '../components/courses/CourseForm';
import Modal from '../components/ui/Modal';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log('Delete course:', id);
  };

  const handleSubmit = (data: Omit<Course, 'id'>) => {
    // TODO: Implement save functionality
    console.log('Save course:', data);
    setIsModalOpen(false);
    setSelectedCourse(undefined);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
          Add Course
        </Button>
      </div>

      <div className="mb-6 max-w-md">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search courses..."
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCourse(undefined);
        }}
        title={selectedCourse ? 'Edit Course' : 'Add Course'}
      >
        <CourseForm
          course={selectedCourse}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedCourse(undefined);
          }}
        />
      </Modal>
    </div>
  );
};

export default Courses;