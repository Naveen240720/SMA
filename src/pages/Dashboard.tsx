import React from 'react';
import { Users, BookOpen, Calendar } from 'lucide-react';
import { students, courses } from '../data/mockData';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Total Students</h3>
              <p className="text-2xl font-bold">{students.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold">Active Courses</h3>
              <p className="text-2xl font-bold">{courses.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold">Today's Classes</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Students</h2>
          <div className="space-y-4">
            {students.slice(0, 3).map((student) => (
              <div key={student.id} className="flex items-center gap-4">
                <img
                  src={student.profileImage}
                  alt={student.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.grade} Grade</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Active Courses</h2>
          <div className="space-y-4">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">{course.name}</p>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;