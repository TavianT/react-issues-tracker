import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const IssueDetails = () => {
    const { id } = useParams();
    const { data: issue, error, isPending } = useFetch('http://localhost:8000/issues/' + id);
    const history = useHistory();
    return ( 
        <div className="issue-details">
            <h2>{issue.title}</h2>
        </div>
     );
}
 
export default IssueDetails;