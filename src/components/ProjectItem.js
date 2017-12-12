import React from 'react';

const ProjectItem = (props) => (
  <div>
    <h3>A thing that i have done</h3>
    <p>This project has the ID of : {props.match.params.id}</p>
  </div>
);

export default ProjectItem;