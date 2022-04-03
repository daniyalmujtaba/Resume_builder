import React, { useEffect, useState } from "react";
import { Authenticate, SignInWithSocialMedia } from "../modules/Auth";
import { Providers } from "../configs/firebase";
import firebase from "firebase/compat";
import { login } from "../data/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
// import { useDispatch } from "react-redux";
import { RootState, useAppDispatch } from "../data/store";
import { useSelector } from "react-redux";
import { DEFAULT_USER } from "../interfaces/user";

interface loginProps {}

const Login: React.FunctionComponent<loginProps> = ({}) => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState)=>state.authReducer.user);

  const isLogin = window.location.pathname.includes("login");


  useEffect(()=>{
      if(user !== DEFAULT_USER ) navigate('/');

  },[user])

  const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
    if (error !== "") setError("");

    setAuthenticating(true);

    SignInWithSocialMedia(provider)
      .then(async (result) => {
        let user = result.user;

        if (user) {
          let uid = user.uid;
          let name = user.displayName;
          if (name) {
            try {
              let fire_token = await user.getIdToken();
              Authenticate(uid, name, fire_token, async (error, _user) =>  {
                if (error) {
                  setError(error);
                  setAuthenticating(false);
                } else if (_user) {
                  await dispatch(login({ user: _user, fire_token }));
                  await navigate("/");
                }
              });
            } catch (error) {
              setError("Invalid token.");
              // logging.error(error);
              setAuthenticating(false);
            }
          } else {
            
            setError("The identify provider is missing a display name.");
            setAuthenticating(false);
          }
        } else {
          setError(
            "The social media provider does not have enough information. Please try a different provider."
          );
          setAuthenticating(false);
        }
      })
      .catch((error) => {
        setAuthenticating(false);
        setError(error.message);
      });
  };
  return (
    <Card>
      <CardHeader>{isLogin ? "Login" : "Sign Up"}</CardHeader>
      <CardBody>
        <Button
          block
          disabled={authenticating}
          onClick={() => signInWithSocialMedia(Providers.google)}
          style={{ backgroundColor: "#ea4335", borderColor: "#ea4335" }}
        >
          <i className="fab fa-google mr-2"></i> Sign {isLogin ? "in" : "up"}{" "}
          with Google
        </Button>
        {/* {authenticating && <LoadingComponent card={false} />}  */}
      </CardBody>
    </Card>
  );
};

export default Login;
