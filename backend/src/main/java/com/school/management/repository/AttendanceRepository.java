package com.school.management.repository;

import com.school.management.model.Attendance;
import com.school.management.model.Course;
import com.school.management.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    List<Attendance> findByDateAndCourse(LocalDate date, Course course);
    List<Attendance> findByDateAndStudent(LocalDate date, Student student);
}