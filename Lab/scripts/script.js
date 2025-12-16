function getLearnerData(course, assignmentGroup, submissions) {
  try {
    if (assignmentGroup.course_id !== course.id) {
      throw new Error('Assignment group does not belong to this course')
    }

    const assignmentMap = {}
    for (const a of assignmentGroup.assignments) {
      assignmentMap[a.id] = a
    }
  } catch (error) {
    console.error(error.message)
  }
}
