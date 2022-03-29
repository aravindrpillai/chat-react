import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { useLogin } from './use-login';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "130px"
  },
  avatar: {
    margin: 1,
    backgroundColor: 'white',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: 3,
    backgroundColor: '#FDB619'
  },
}));

const isValidEmail = (email) => {
  if (!email) {
      return false;
  }
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
}

function Login(props) {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useLogin(props);

  return (
    <React.Fragment>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <b>Chat Portal</b>
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("email",{
              required: 'Email address is required',
              validate: email =>
                isValidEmail(email) || 'Email address is invalid.',
            })}
            helperText={errors && errors.email && errors.email.message}
            error={errors && errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password",{
              required: 'Password is required.',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters.',
              },
            })}
            helperText= {errors && errors.password && errors.password.message}
            error={errors && errors.password}
           />
         <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Log in
          </Button>
          <br></br> <br></br>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </React.Fragment>
  );
}

export default Login;

