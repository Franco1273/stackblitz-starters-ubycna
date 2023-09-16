import React from 'react';
import TeacherItem from './TeacherItem';

const teachers = [
  {
    Surname: 'Lagreca',
    Name: 'Franco',
    Subject: 'Math',
    selected: false,
  },
  {
    Surname: 'Lapolla',
    Name: 'Luigi',
    Subject: 'IT',
    selected: false,
  },
  {
    Surname: 'Mussella',
    Name: 'Vincenzza',
    Subject: 'History',
    selected: false,
  },
  {
    Surname: 'Loglisci',
    Name: 'Antonio',
    Subject: 'Chemistry',
    selected: false,
  },
  {
    Surname: 'Colonna',
    Name: 'Giulia',
    Subject: 'Physics',
    selected: false,
  },
];

export default function TeachersList() {
  const [teachersList, setTeachersList] = React.useState([...teachers]);

  const toggleState = (index) => {
    setTeachersList((currentState) => {
      const newState = [...currentState];
      return newState.map((item, ind) => {
        return ind === index ? { ...item, selected: !item.selected } : item;
      });
    });
  };

  const UnselectAll = () => {
    setTeachersList((currentState) => {
      const newState = [...currentState];
      return newState.map((item) => {
        return { ...item, selected: false };
      });
    });
  };

  return (
    <>
      <div>
        Selected Teachers :{' '}
        {teachersList.filter((item) => item.selected === true).length}
      </div>

      <button onClick={UnselectAll}>Uselect All</button>
      {teachersList.map((teacher, index) => (
        <TeacherItem
          key={index}
          teacher={teacher}
          toggleState={() => toggleState(index)}
        />
      ))}
    </>
  );
}
/*

*/
