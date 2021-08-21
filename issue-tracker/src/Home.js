import IssueList from "./IssueList";
import useFetch from "./useFetch";

const Home = () => {
    const { error, isPending, data: issues } = useFetch('http://localhost:8000/issues')

    
    return ( 
        <div>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { issues && <IssueList issues={issues} /> }
        </div>
     );
}
 
export default Home;