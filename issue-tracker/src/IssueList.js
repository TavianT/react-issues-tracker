import { Container, Grid, Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

const IssueList = ({issues}) => {

    return ( 
        <Container className="issue-list">
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing="3">

            {issues.map(issue => (
                <Grid item className="issue-item">
                    <Link to={`/issues/${issue.id}`}>
                        <Card>
                            <CardHeader
                            title={issue.title}>
                            </CardHeader>
                            <CardContent>
                                <Typography noWrap >
                                    {issue.body}
                                </Typography>
                                <Typography variant="body2" style={{ fontWeight: 600 }} noWrap >
                                    {issue.author} | Triage: {issue.triage}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                        
                </Grid>
            ))}

            </Grid>
        </Container>
     );
}
 
export default IssueList;