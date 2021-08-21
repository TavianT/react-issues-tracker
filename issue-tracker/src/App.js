import Appbar from "./Appbar";
import IssueList from "./IssueList";

function App() {
  return (
    <div className="App">
      <Appbar></Appbar>
      <div className="content">
        <IssueList></IssueList>
      </div>
    </div>
  );
}

export default App;
