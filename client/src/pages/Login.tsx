import React, { useEffect, useState } from "react";
import { Authenticate, SignInWithSocialMedia } from "../modules/Auth";
import { Providers } from "../configs/firebase";
import firebase from "firebase/compat";
import { login } from "../data/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
// import { useDispatch } from "react-redux";
import { RootState, useAppDispatch } from "../data/store";
import { useSelector } from "react-redux";
import { DEFAULT_USER } from "../interfaces/user";

import _ from 'lodash';


interface loginProps {};

const Login: React.FunctionComponent<loginProps> = ({}) => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState)=>state.authReducer.user);

  const isLogin = window.location.pathname.includes("login");

  useEffect(()=>{
      if(!_.isEqual(user,DEFAULT_USER)) navigate('/');

  },[user])

  const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
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
              let response  = await Authenticate(uid, name, fire_token);
              
                if(response) {
                  await dispatch(login({ user: response, fire_token }));
                  await navigate("/");
                }
            } catch (error) {
              setAuthenticating(false);
            }
          } else {
            
            setAuthenticating(false);
          }
        } else {
          setAuthenticating(false);
        }
      })
      .catch((error) => {
        setAuthenticating(false);
      });
  };
  return (

    <Container style={{minHeight:'100%',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Row>
          <Col>
          <h4 >Resume Builder</h4>
          </Col>
          
        </Row>
        <Row>
          
          <Col>
            <Button
              block
              disabled={authenticating}
              onClick={() => signInWithSocialMedia(Providers.google)}
              style={{ backgroundColor: "#ea4335", borderColor: "#ea4335" }}
            >
              <i className="fab fa-google mr-2"></i> Continue With Google
            </Button>
          </Col>
          
        </Row>
    </Container>
    
  );
};

export default Login;
