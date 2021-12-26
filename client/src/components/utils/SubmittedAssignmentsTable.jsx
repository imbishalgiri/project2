import React from 'react';
import { useSelector } from 'react-redux';
import SubmittedAssignments from './SubmittedAssignments';

const SubmittedAssignmentsTable = () => {
  const assignments = useSelector((state) => state.datasFetched.data.assignments);

  const allAssignments = assignments.map((assignment) => (
    <SubmittedAssignments
      key={assignment._id}
      identity={assignment._id}
      file={assignment.file}
      remarks={assignment.remarks}
      firstName={assignment.student.firstName}
      rollNo={assignment.student.user.rollNo}
    />
  ));

  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">student_name</th>
          <th scope="col">roll_number</th>
          <th scope="col">submitted_assignment</th>
          <th scope="col">grade</th>
        </tr>
      </thead>
      <tbody>
        {allAssignments} {/* file, remarks firstName, rollNo, ID*/}
      </tbody>
    </table>
  );
};

export default SubmittedAssignmentsTable;
