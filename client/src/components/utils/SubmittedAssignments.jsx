import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRemark } from './../../actions/teacherActions';

const SubmittedAssignments = ({ file, remarks, firstName, rollNo, identity }) => {
  const [isForm, setIsForm] = useState(false);
  const [formRemarks, setFormRemarks] = useState(remarks);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(identity);
    console.log(formRemarks);
    dispatch(addRemark({ remarks: formRemarks }, identity));
    setIsForm(!isForm);
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control form-control-lg"
        name={``}
        onChange={(event) => setFormRemarks(event.target.value)}
        value={formRemarks}
      />
      <input type="submit" className="btn btn-info btn-block mt-4" />
    </form>
  );

  return (
    <tr>
      <td>{firstName}</td>
      <td>{rollNo}</td>
      <td>
        <a
          href={`http://localhost:8000/static/assignments/submitted/${file}`}
          target="_blank"
          rel="noopener noreferrer"
          download={`${file}`}>
          {file}
        </a>
      </td>
      {isForm ? <td>{form}</td> : <td onClick={() => setIsForm(!isForm)}>{remarks}</td>}
    </tr>
  );
};

export default SubmittedAssignments;
