package com.sms.entity.service;

import java.util.List;

import com.sms.entity.Student;

public interface IStudentService {

	List<Student> getStudents();

	Student addStudent(Student student);

	Student updateStudent(Student student, Long id);

	Student getStudentById(Long id);

	void deleteStudent(Long id);
}
