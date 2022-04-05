import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { RootState } from '../data/store';
import IResume from '../interfaces/resume';
import Iuser from '../interfaces/user';
import { FetchResumes } from '../modules/Resume';

interface HomeProps {

}



const Home: React.FunctionComponent<HomeProps> = ({}) => {
    
    const [resumes, setResumes] = React.useState<IResume[] | []>([]);

    const [count, setCount] = React.useState<Number>(0);

    const user = useSelector((state:RootState) => state.authReducer.user);

    const token = useSelector((state:RootState) => state.authReducer.fire_token);


    const navigate = useNavigate();
  
    React.useEffect(()=>{

      async function asyncFetch() {
        let response = await FetchResumes(user._id,token);
        await setCount(response.count);
        await setResumes(response.resumes);
      }
      asyncFetch();

    },[user])
    
    return <Container style={{minHeight:'100%',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        {count > 0 ? <div className='resumes'>
                    {resumes?.map(resume=> {
                      return <><p>{resume?.Title}</p></>
                    })}
                  </div> : <>

            <h6>No Resume Found </h6>
          
          </>}

        <Button className='add-new' onClick={()=>navigate('/create')}>
          Add New Resume
        </Button>
      </Container>;
};

export default Home 