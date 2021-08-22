import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"

const Nav = () => {
    return ( 
        <div className="nav">
        <Button color="inherit" component={Link} to="/create">
            Create Issue
        </Button>
        <Button color="inherit">
            About
        </Button>
        <Button color="inherit">
            Contact
        </Button>
        </div>
     );
}
 
export default Nav;