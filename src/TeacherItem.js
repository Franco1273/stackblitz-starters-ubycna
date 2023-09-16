import React from 'react';

export default function TeacherItem({ teacher, toggleState }) {
  const selected = {
    padding: '5px',
    marginTop: '5px',
    borderBottom: 'solid 1px #333',
    color: '#ccc',
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  const notSelected = {
    padding: '5px',
    marginTop: '5px',
    borderBottom: 'solid 1px #333',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  const fieldStyle = {
    width: '25%',
  };

  return (
    <div style={teacher.selected ? selected : notSelected}>
      <div style={fieldStyle}>{teacher.Surname}</div>
      <div style={fieldStyle}>{teacher.Name}</div>
      <div style={fieldStyle}>{teacher.Subject}</div>
      <input type="checkbox" checked={teacher.selected} onClick={toggleState} />
    </div>
  );
}
