import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const IssueDetails = () => {
    const { id } = useParams();
    const { data: issue, error, isPending } = useFetch('http://localhost:8000/issues/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/issues/' + issue.id, {
        method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="issue-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {issue && (
                <article>
                    <Typography variant="h3" gutterBottom="true">
                        {issue.title}
                        <IconButton aria-label="Delete issue" onClick={handleDelete}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </Typography>
                    <Typography variant="body1" paragraph="true">
                        {issue.body}
                    </Typography>
                    <Typography variant="body2" style={{ fontWeight: 600 }}>
                        Triage: {issue.triage}
                    </Typography>
                    <Typography variant="subtitle1" paragraph="true">
                        {issue.author}
                    </Typography>
                </article>
            )}
        </div>
     );
}
 
export default IssueDetails;