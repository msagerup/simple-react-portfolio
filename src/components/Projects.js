import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
	<div>
		<h2>My work</h2>
      <p>Check out these projects:</p>
      <Link to="projects/1">Project One</Link>
      <Link to="projects/2">Project Two</Link>
      
	</div>
)

export default Projects;