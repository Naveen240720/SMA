import React, { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import { students, courses, attendance } from '../data/mockData';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

const Attendance = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const getAttendanceStatus = (studentId: string, courseId: string) => {
    const record = attendance.find(
      (a) => a.studentId === studentId && 
             a.courseId === courseId && 
             a.date === selectedDate
    );
    return record?.status || 'absent';
  };

  const statusColors = {
    present: 'bg-green-100 text-green-800',
    absent: 'bg-red-100 text-red-800',
    late: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <div className="flex items-center gap-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
          <Button icon={Calendar}>Mark Attendance</Button>
        </div>
      </div>

      <div className="mb-6 max-w-md">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search students or courses..."
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student
              </th>
              {courses.map((course) => (
                <th
                  key={course.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {course.code}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students
              .filter((student) =>
                student.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={student.profileImage}
                        alt={student.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {student.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {student.grade} Grade
                        </div>
                      </div>
                    </div>
                  </td>
                  {courses.map((course) => (
                    <td key={course.id} className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full
                          ${statusColors[getAttendanceStatus(student.id, course.id)]}`}
                      >
                        {getAttendanceStatus(student.id, course.id)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;