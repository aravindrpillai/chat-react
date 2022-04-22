import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function UserRegisterationForm() {

  const [nickname, setNickName] = React.useState("Anonymous User")
  const [username, setUsername] = React.useState(null)
  const [password, setPassword] = React.useState(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const [nicknameError, setNickNameError] = React.useState(null)
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
            image="login.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">Tell Me .com</Typography>
            <hr/>
            <Grid container spacing={3}>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth required
                  label="Nick name"
                  name="nickname"
                  variant="outlined"
                  value={nickname}
                  onChange={(e) => {
                    if (e.target.value === null || e.target.value === "" || e.target.value === undefined) {
                      setNickNameError("Nick Name cannot be empty.")
                    } else {
                      setNickNameError(null)
                    }
                    setNickName(e.target.value)
                  }}
                  helperText={nicknameError}
                  error={nicknameError !== null}
                />
                <font style={{ float: "left", fontSize: "12px", paddingLeft: "12px" }}>
                  Avoid real names. This name will be displayed to others.
                </font>
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth required
                  label="Username"
                  name="username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => {
                    if (e.target.value === null || e.target.value === "" || e.target.value === undefined) {
                      setUsernameError("Username cannot be empty.")
                    } else {
                      setUsernameError(null)
                    }
                    setUsername(e.target.value)
                  }}
                  helperText={usernameError}
                  error={usernameError !== null}
                />
                  <font style={{ float: "left", fontSize: "12px" }}>
                    <table>
                      <tr><td>People can talk to you anonymously using the below url</td></tr>
                      <tr><td><a style={{ color: "blue" }}>www.tellme.com/{username === null ? username : username.toLowerCase()}</a></td></tr>
                    </table>
                  </font>
               
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
                      if (e.target.value === null || e.target.value === "" || e.target.value === undefined) {
                        setPasswordError("Password cannot be empty.")
                      } else {
                        setPasswordError(null)
                      }
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
            <Button onClick={(e)=> navigate("/login") } variant="outlined" size="small">Back To Login Page</Button>
            <Button onClick={(e)=> navigate("/chat") }variant="outlined" size="small">Register</Button>
          </CardActions>
        </Card>
      </center>
    </React.Fragment>
  );
}
