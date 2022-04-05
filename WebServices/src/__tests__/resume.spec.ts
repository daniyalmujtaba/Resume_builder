import { response } from "express";
import { agent as request } from "supertest"; 
import server from "../server";


 describe("Checking Authentication Header for every Call", ()=> {
    
    it('/readAll', async ()=>{
      return await request(server).get('/resume/readAll/Ogiec1eWlWTPa6A9OaY8e4m6D2B2')
      .auth("",{type:"bearer"}) 
      .expect(401);
       
    });

    it('/create', async ()=>{
      return await request(server).post('/resume/create')
      .auth("",{type:"bearer"}) 
      .expect(401);
       
    });

    it('/read/:id', async  ()=>{
      return await request(server).get('/resume/read/62497fbc6a077a3026357f29')
      .auth("",{type:"bearer"}) 
      .expect(401);
       
    });

    it('/update', async ()=>{
      return await request(server).patch('/resume/update/62497fbc6a077a3026357f29')
      .auth("",{type:"bearer"}) 
      .expect(401);
       
    });

    it('/delete', async ()=>{
      return await  request(server).delete('/resume/delete/62497fbc6a077a3026357f29')
      .auth("",{type:"bearer"}) 
  
      .expect(401);
       
    });


})


describe('Testing ReadAll', ()=>{
  
  it('GET /resume/:validtoken must get a resume object ',async ()=>{
    
    return await request(server).get('/resume/readAll/62497fbc6a077a3026357f29')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"})
    .expect('Content-Type', /json/).expect(200)
    .then((response)=>{
      expect(response.body).toEqual(expect.objectContaining({
        count : expect.any(Number),
        resumes : expect.any(Array)

      }));
    })
  })

  it('GET /resume/:userID=valid but wrong token must get count 0 and resumes = [] ', async ()=>{
    return await request(server).get('/resume/readAll/dadad')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"}) 
    .expect('Content-Type', /json/).expect(500)
    
  })

})


describe('Testing Read', ()=>{
  
  it('GET /resume/:validtoken must get a resume object ', async ()=>{
    
    return await request(server).get('/resume/read/624b63ca18bcde99b9228654')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"})
    .expect('Content-Type', /json/).expect(200)
    .then((response)=>{
      expect(response.body).toEqual(expect.objectContaining({
        resume : expect.any(Object)

      }));
    })
  })

  it('GET /resume/:userID=valid but wrong token must return 404 ',async ()=>{
    return await request(server).get('/resume/read/62497fbc6a077a3026357f29')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"}) 
    .expect('Content-Type', /json/).expect(404)
      
      
  })
  it('GET /resume/:userID=invalid 500 ', async ()=>{
    return await request(server).get('/resume/read/ddd')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"}) 
    .expect('Content-Type', /json/).expect(500)
      
      
  })



})



describe('Testing Create', ()=>{
  
  it('POST Create with missing body or incorrect must return 400 with error ',async ()=>{
    
    return await request(server).post('/resume/create')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"})
    .expect('Content-Type', /json/)
    .set({name:'valied'})
    .expect(400);
    
})

  it('POST create with valid body ', async ()=>{
    return await request(server).post('/resume/create')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"}) 
    .send({ 
      User : "62497d716a077a3026357f1e",
      BasicInfo:{
           Name: "Daniyal Mujtaba", 
          PhoneNumber : "923322296562",
          Email : "daniyal.mujtab10@gmail.com",
          Address : "A81 Street 3 "
      },
      Education: [{
          Institute : "Fast Nuces",
          startDate : "Aug 2017",
          endDate : "June 2021",
          present : false,
          Summary: "Nothing did ",
          Level : "Bachelors",
          Major: "Computer Science",
          GPA: "2.33"
      }],
      Experience: [{
          Company : "TripleK",
          startDate : "July 2021",
          endDate : "Dec 2021",
          present  : false,
        Summary: "SAsdkadkaa"
      }],
      Skills: [{
        name:"ReactJS",
        level:"Advanced"
      }]
  
  })
    .expect('Content-Type', /json/).expect(200)
    
      
  })

})


describe('Testing Delete ' , ()=>{
  it('Delete with invalid ID' , async ()=>{
    return await request(server).delete('/resume/delete/624b63ca18xcde99b922865r')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"}) 
    .expect(400)
  })
  it('Delete with valid ID' , async ()=>{
    return await request(server).delete('/resume/delete/624b63ca18bcde99b9228654')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTE2MTk1LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxMTYxOTUsImV4cCI6MTY0OTExOTc5NSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UWF_KiRj8XMuzMMQYlMDEJi32zZey3FFmEq1tM0MXyJPj73s3IY-_Foonb8nViHWJXT-8t-1lGcK7tGfdWeIRb4MvaPMX0gbC3WNMXUm2XmKKcD3_B-GT62g8IHCTx27mKF7ReClzrOu_KUueZJimGyDIOgYOOZIB78uctjoBxckBdc_-kdQuTc5CCRM9ScqX_CNAzmcNdS107YbpecAupoL1HSn4bFGbzu-CVWp8wxolOS8mPW_ZrgvDF2LQ_5U6qge37WvsG9wpdl-7dPVKlVDtaqY_B2z6qrZIKJzNGVnv-O3P70_2xWklKXVDw-OZJJPjjm5niIjFsODp9peDQ",{type:"bearer"}) 
    .expect(400)
  })
})


