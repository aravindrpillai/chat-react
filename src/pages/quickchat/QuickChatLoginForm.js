import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function QuickChatLoginForm() {

  const [username, setUsername] = React.useState(null)
  const [password, setPassword] = React.useState(null)
  const [showPassword, setShowPassword] = React.useState(false)
  const [newRegistration, setNewRegistration] = React.useState(false)

  const [nickname, setNickName] = React.useState("Anonymous User")
  const [nicknameError, setNickNameError] = React.useState(null)

  const [usernameError, setUsernameError] = React.useState(null)
  const [passwordError, setPasswordError] = React.useState(null)

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <center>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {
                newRegistration ? "New User Registration" : "Login Here"
              }
            </Typography>
            <hr />
            <Grid container spacing={3}>

              {
                newRegistration &&
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
                    This name will NOT be displayed to others.
                  </font>
                </Grid>

              }


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
                  {showPassword ? "Hide Password" : "Show Password"}
                </font>
              </Grid>


            </Grid>
          </CardContent>

          <CardActions sx={{ float: "right", paddingRight: "20px" }}>
            {
              !newRegistration &&
              <React.Fragment>
                <Button onClick={(e) => setNewRegistration(true)} variant="outlined" size="small">New Registration</Button>
                <Button onClick={(e) => navigate("/chat")} variant="outlined" size="small">Login</Button>
              </React.Fragment>
            }{
              newRegistration &&
              <React.Fragment>
                <Button onClick={(e) => setNewRegistration(false)} variant="outlined" size="small">Already have account</Button>
                <Button onClick={(e) => navigate("/chat")} variant="outlined" size="small">Register</Button>
              </React.Fragment>
            }

          </CardActions>
        </Card>
      </center>
    </React.Fragment>
  );
}
