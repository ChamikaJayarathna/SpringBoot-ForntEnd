import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import ListIssueComponents from "./components/ListIssueComponents";
import CreateIssueComponents from "./components/CreateIssueComponents";
import UpdateIssueComponents from "./components/UpdateIssueComponents";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponents/>
        <div className="container">
          <Routes>
          
            <Route path="/" element={<ListIssueComponents/>}/>
            <Route path="/create-issue" element={<CreateIssueComponents/>}/>
            <Route path="/update-issue" element={<UpdateIssueComponents/>}/>
            <Route path="/update-issue/:issueID" element={<UpdateIssueComponents/>}/>

          </Routes>
        </div>
        <FooterComponents/>
      </div>
    </Router>


  );
}

export default App;
