import { TextField, MenuItem, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [triage, setTriage] = useState('None')
    const history = useHistory();

    const triages = [
        "None",
        "Not a shipstopper",
        "Shipstopper"
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        const issue = {title, body, author, triage}
        fetch('http://localhost:8000/issues/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(issue)
        }).then(() => {
            history.push('/');
        })
    }


    return ( 
        <div className="create">
            <h2>Create a new issue</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                    </TextField>
                </div>
                <div>
                    <TextField
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                    label="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                    </TextField>
                </div>
                <div>
                    <TextField
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    </TextField>
                </div>
                <div>
                    <TextField
                    required
                    variant="outlined"
                    margin="normal"
                    select
                    helperText="Please select a triage"
                    label="Triage"
                    value={triage}
                    onChange={(e) => setTriage(e.target.value)}>
                        {triages.map((triage) => (
                            <MenuItem value={triage}>
                                {triage}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                            SUBMIT
                    </Button>
                </div>
            </form>
        </div>
     );
}
 
export default Create;