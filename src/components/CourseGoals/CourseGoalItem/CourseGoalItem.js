import React from 'react';
import styled from 'styled-components';


const GoalItemControl = styled.li`
margin: 1rem 0;
background: #8b005d;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
color: white;
padding: 1rem 2rem;
cursor: pointer;
border-radius: 12px;
}
`;

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <GoalItemControl onClick={deleteHandler}>
      {props.children}
    </GoalItemControl>
  );
};

export default CourseGoalItem;
