import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function LoginForm() {

  const [username, setUsername] = React.useState(null)
  const [password, setPassword] = React.useState(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const [usernameError, setUsernameError] = React.useState(null)
  const [passwordError, setPasswordError] = React.useState(null)

  const navigate = useNavigate();
  
  return (
    <React.Fragment>
      <center>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="140"
            image="register.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">Tell Me .com</Typography>
            <hr/>
            <Grid container spacing={3}>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth required
                  label="Username"
                  name="username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                  helperText={usernameError}
                  error={usernameError !== null}
                />
               
              </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth required
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    helperText={passwordError}
                    error={passwordError !== null}
                  />
                  <font onClick={(e) => { setShowPassword(!showPassword) }} style={{ cursor: "pointer", float: "left", fontSize: "12px", paddingLeft: "12px" }}>
                    {showPassword ? "Hide Password" : "Show Password" }
                  </font>
                </Grid>


            </Grid>
          </CardContent>

          <CardActions sx={{ float: "right", paddingRight:"20px" }}>
            <Button onClick={(e)=> navigate("/register") } variant="outlined" size="small">New Registration</Button>
            <Button onClick={(e)=> navigate("/chat") }variant="outlined" size="small">Login</Button>
          </CardActions>
        </Card>
      </center>
    </React.Fragment>
  );
}
