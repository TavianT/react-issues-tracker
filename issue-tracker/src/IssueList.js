import { Container, Grid, Paper, Card, CardHeader, CardContent, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";

const IssueList = () => {

    const [issues,setIssues] = useState([
            {
                title: "floating list",
                body: "List in home page is floating slightly to the right.",
                author: "Tavian",
                triage: "Not shipstopper"
            },
            {
                title: "Double button click causing crash",
                body: "Double button click causing website front end to crash",
                author: "Tavian",
                triage: "Shipstopper"
            },
            {
                title: "CSS looking flat",
                body: "CSS doesn't look amazing",
                author: "Law",
                triage: "None"
            },
            {
                title: "CSS looking flat dfgfdsghfsdgfsdgfdsgfsdgsd",
                body: "CSS doesn't look amazing",
                author: "Law",
                triage: "None"
            }
        ])
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
                    <Card>
                        <CardHeader
                        title={issue.title}
                        action={
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }>
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
                </Grid>
            ))}

            </Grid>
        </Container>
     );
}
 
export default IssueList;