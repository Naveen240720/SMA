import { Student, Course, Attendance } from '../types';

export const students: Student[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@school.com',
    grade: '10th',
    enrollmentDate: '2023-09-01',
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    name: 'Emma Johnson',
    email: 'emma.johnson@school.com',
    grade: '11th',
    enrollmentDate: '2023-09-01',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    code: 'MATH301',
    instructor: 'Dr. Sarah Wilson',
    credits: 4,
    description: 'Advanced mathematical concepts including calculus and linear algebra'
  },
  {
    id: '2',
    name: 'Physics',
    code: 'PHY201',
    instructor: 'Prof. Michael Chen',
    credits: 3,
    description: 'Fundamental principles of physics and mechanics'
  }
];

export const attendance: Attendance[] = [
  {
    id: '1',
    studentId: '1',
    courseId: '1',
    date: '2024-03-15',
    status: 'present'
  },
  {
    id: '2',
    studentId: '2',
    courseId: '1',
    date: '2024-03-15',
    status: 'late'
  }
];