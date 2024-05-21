import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useApi from '../../hooks/useApi';
import { endpoints } from '../../services/defaults';

function ProjectList() {
    const { request: getInnovatorProjects } = useApi("hget");
    const [innovatorProjects, setInnovatorProjects] = useState([]);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        try {
            const url = `${endpoints.GET_INNOVATOR_PROJECTS}`;
            const { response, error } = await getInnovatorProjects(url);
            if (!error && response) {
                setInnovatorProjects(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mt-2'>
            <h3>My Projects</h3>
            <br />
            <Table >
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Target Amount</th>
                        <th>DeadLine</th>
                        <th>Investors</th>
                    </tr>
                </thead>
                <tbody>
                    {innovatorProjects.map(project => (
                        <tr key={project.id}>
                            <td>{project.project_name}</td>
                            <td>{project.amount}</td>
                            <td>{project.end_date}</td>
                            <td>{project.investors}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProjectList;
