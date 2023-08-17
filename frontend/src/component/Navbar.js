import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Home, AddCircle, Group, AccountCircle, ExitToApp, Assignment } from '@material-ui/icons';

import isAuth, { userType } from "../lib/isAuth";

import Grid from '@material-ui/core/Grid';

import polylogo from "../images/polylogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed"   style={{ backgroundColor: "#D41F5D" }} >
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <img src={polylogo} alt="Polylogo" style={{ width: '10px' }} />
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              Polyjob
            </Typography>
          </Grid>
        </Grid>

        {isAuth() ? (
          // RECUITER PAGE 
          userType() === "recruiter" ? (
            <>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '50px' }}
                onClick={() => handleClick("/home")}
                startIcon={<Home />}
              >
                Home
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '50px' }}
                onClick={() => handleClick("/addjob")}
                startIcon={<AddCircle />}
              >
                Add Jobs
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '50px' }}
                onClick={() => handleClick("/myjobs")}
                startIcon={<Assignment />}
              >
                My Jobs
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '50px' }}
                onClick={() => handleClick("/employees")}
                startIcon={<Group />}
              >
                Employees
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '1150px' }}
                onClick={() => handleClick("/profile")}
                startIcon={<AccountCircle />}
              >
                Profile
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '10px' }}
                onClick={() => handleClick("/logout")}
                startIcon={<ExitToApp />}
              >
                Logout
              </Button>
            </>
          ) : (
            // JOBSEEKER
            <>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '50px' }}
                onClick={() => handleClick("/home")}
                startIcon={<Home />}
              >
                Home
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '50px' }}
                onClick={() => handleClick("/applications")}
                startIcon={<Assignment />}
              >
                Applications
              </Button>
              <Button
                color="inherit"
                style={{ whiteSpace: 'nowrap', marginRight: '1370px' }}
                onClick={() => handleClick("/profile")}
                startIcon={<AccountCircle />}
              >
                Profile
              </Button>
              <Button color="inherit" style={{ whiteSpace: 'nowrap' ,marginRight: '10px' }}  onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (


// WELCOME PAGEEEE else if is not logged 
          <>
            <Button color="inherit" style={{ whiteSpace: 'nowrap' ,marginRight: '10px' }}  onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" style={{ whiteSpace: 'nowrap' ,marginRight: '10px' }}   onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
