import axios from 'axios';

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues";

class IssueServices{

    getIssue(){
        return axios.get(ISSUE_API_BASE_URL);
    }

    createIssue(issue){
        return axios.post(ISSUE_API_BASE_URL, issue);
    }

    getIssueByID(issueID){
        return axios.get(ISSUE_API_BASE_URL + '/' + issueID);
    }

    updateIssue(issue, issueID){
        return axios.put(ISSUE_API_BASE_URL + '/' + issueID, issue);
    }

    deleteIssue(issueID){
        return axios.delete(ISSUE_API_BASE_URL + '/' + issueID);
    }

}

export default new IssueServices()