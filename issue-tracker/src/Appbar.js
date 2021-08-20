import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Nav from './Nav'

const Appbar = () => {
    return (
        <div className="Appbar">
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" style={{ flex: 1 }}>
                        Issue Tracker
                    </Typography>
                    <Nav></Nav>
                </Toolbar>
            </AppBar>
        </div> 
        
    );
}
 
export default Appbar;