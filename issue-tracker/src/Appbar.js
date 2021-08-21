import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Nav from './Nav'

const Appbar = () => {
    return (
        <div className="Appbar">
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h4">
                        Issue Tracker
                    </Typography>
                    <Nav></Nav>
                </Toolbar>
            </AppBar>
        </div> 
        
    );
}
 
export default Appbar;