import React, { useState, useEffect } from 'react';
import IssueServices from '../services/IssueServices';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment'; //add moment library

function ListIssueComponents() {
    const navigate = useNavigate();
    const [issue, setIssue] = useState([]);

    const editIssue = (id) => {
        navigate(`/update-issue/${id}`);
    };

    const deleteHandler = (id) => {
        IssueServices.deleteIssue(id)
            .then(() => {
                alert('The Issue has been Deleted Successfully!!');
                setIssue(issue.filter(issue => issue.issueID !== id));
            })
            .catch((error) => {
                console.error('Error Deleting Issue!!' + error);
            });
    };

    
    //Report Generation
    const handleReport = () => {
        const doc = new jsPDF();
    
        doc.text("Issue Request Report", 20,8);
        doc.autoTable({
            head: [
                ["Title", "Description", "Status", "Assigned To" ,"Priority", "Type", "Created By", "Created At", "Due Date"]
            ],
            body: issue.map(issue => [issue.title, issue.description, issue.status, issue.assigned_to, issue.priority, issue.type, issue.created_by, moment(issue.created_at).format('ll'), moment(issue.due_date).format('ll')]),
            theme: 'grid'
        });
    
        doc.save('issueReport.pdf');
    }



        
    useEffect(() => {
        IssueServices.getIssue().then((res) => {
            setIssue(res.data);
        });
    }, []);
    
    return (
        <div>
            <h2 className="text-center mt-4">Issue Item Requests</h2>
            <button type="button" className="btn btn-secondary m-2" onClick={() => handleReport()}><i className="fa fa-print"></i></button>

            <div className="row mt-5">
                <table className="table table-bordered">
                    <thead className="light">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Assigned To</th>
                            <th>Priority</th>
                            <th>Type</th>
                            <th>Created By</th>
                            <th>Created At</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issue.map((issue) => (
                            <tr key={issue.issueID}>
                                <td>{issue.title}</td>
                                <td>{issue.description}</td>
                                <td>{issue.status}</td>
                                <td>{issue.assigned_to}</td>
                                <td>{issue.priority}</td>
                                <td>{issue.type}</td>
                                <td>{issue.created_by}</td>
                                <td>{moment(issue.created_at).format('ll')}</td>
                                <td>{moment(issue.due_date).format('ll')}</td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-success" onClick={() => editIssue(issue.issueID)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-primary" onClick={() => deleteHandler(issue.issueID)} style={{ marginLeft: '8px' }}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListIssueComponents;