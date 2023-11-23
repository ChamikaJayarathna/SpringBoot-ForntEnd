import React, { useState } from 'react';
import IssueServices from '../services/IssueServices';
import { useNavigate } from 'react-router-dom';

const CreateIssueComponents = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    title: '',
    description: '',
    status: 'Open', //drop down
    assigned_to: '',
    priority: 'Low', //drop down
    type: '',
    created_by: '',
    created_at: '',
    due_date: ''
  });

  const saveRequest = (e) => {
    e.preventDefault();

    const issue = {
        title: state.title,
        description: state.description,
        status: state.status,
        assigned_to: state.assigned_to,
        priority: state.priority,
        type: state.type,
        created_by: state.created_by,
        created_at: state.created_at,
        due_date: state.due_date
    };

    IssueServices.createIssue(issue)
      .then((res) => {
        alert('Issue Successfully Addedd!!!');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const cancel = () => {
    navigate('/create-issue');
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Add Issue</h3>
              <form>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" name="title" id="title" placeholder="Enter title" value={state.title} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" name="description" id="description" placeholder="Enter description" value={state.description} onChange={handleInputChange}></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Status</label>
                  <select className="form-select" name="status" id="status" value={state.status} onChange={handleInputChange}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="assigned_to" className="form-label">Assigned Person</label>
                  <input type="text" className="form-control" name="assigned_to" id="assigned_to" placeholder="Enter assigned person" value={state.assigned_to} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="priority" className="form-label">Priority</label>
                  <select className="form-select" name="priority" id="priority" value={state.priority} onChange={handleInputChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="type" className="form-label">Issue Type</label>
                  <input type="text" className="form-control" name="type" id="type" placeholder="Enter issue type" value={state.type} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="created_by" className="form-label">Created By</label>
                  <input type="text" className="form-control" name="created_by" id="created_by" placeholder="created by" value={state.created_by} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="created_at" className="form-label">Date</label>
                  <input type="date" className="form-control" name="created_at" id="created_at" placeholder="created at...." value={state.created_at} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="due_date" className="form-label">Due Date</label>
                  <input type="date" className="form-control" name="due_date" id="due_date" placeholder="Enter due date" value={state.due_date} onChange={handleInputChange} />
                </div>

                <div className="mt-4">
                  <button type="button" className="btn btn-primary" onClick={saveRequest}>Submit</button>
                  <button type="button" className="btn btn-danger" onClick={cancel} style={{marginLeft: "12px"}}>Cancel</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateIssueComponents;
