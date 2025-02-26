package com.school.management.service;
import com.school.management.model.Course;
import com.school.management.repository.CourseRepository;
import com.school.management.repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    public List<Course> getAllStudents()
    {
        return courseRepository.findAll();
    }

public Course getCourseById(long id)
{
    return courseRepository.findById(id)
            .orElseThrow(()-> new EntityNotFoundException("Course is not present"));
}
    public void deleteStudent(Long id) {
        courseRepository.deleteById(id);
    }

}
