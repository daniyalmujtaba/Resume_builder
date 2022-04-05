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
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"})
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
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .expect('Content-Type', /json/).expect(500)
    
  })

})


describe('Testing Read', ()=>{
  
  it('GET /resume/:validtoken must get a resume object ', async ()=>{
    
    return await request(server).get('/resume/read/624c1d677fe80718c8b99e34')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"})
    .expect('Content-Type', /json/).expect(200)
    .then((response)=>{
      expect(response.body).toEqual(expect.objectContaining({
        resume : expect.any(Object)

      }));
    })
  })

  it('GET /resume/:userID=valid but wrong token must return 404 ',async ()=>{
    return await request(server).get('/resume/read/624c1d677fe80718c8b99e31')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .expect('Content-Type', /json/).expect(404)
      
      
  })
  it('GET /resume/:userID=invalid 500 ', async ()=>{
    return await request(server).get('/resume/read/ddd')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .expect('Content-Type', /json/).expect(500)
      
      
  })



})



describe('Testing Create', ()=>{
  
  it('POST Create with missing body or incorrect must return 400 with error ',async ()=>{
    
    return await request(server).post('/resume/create')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"})
    .expect('Content-Type', /json/)
    .set({name:'valied'})
    .expect(400);
    
})

  it('POST create with valid body ', async ()=>{
    return await request(server).post('/resume/create')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .send({ 
      Title:"Resume 1",
      User : "62497d716a077a3026357f1e",
      BasicInfo:{
          Name: "Daniyal Mujtaba", 
          PhoneNumber : "923322296562",
          Email : "daniyal.mujtab10@gmail.com",
          Address : "A81 Street 3 "
      },
      Education: [{
          Institute : "Fast Nuces",
          StartDate : "Aug 2017",
          EndDate : "June 2021",
          Present : false,
          Summary: "Nothing did ",
          Level : "Bachelors",
          Major: "Computer Science",
          GPA: "2.33",
          Location:"Karachi",

      }],
      Experience: [{
          Company : "TripleK",
          StartDate : "July 2021",
          EndDate : "Dec 2021",
          Present  : false,
          Summary: "SAsdkadkaa",
          Type:"Full-time"
      }],
      Skills: [{
        Name:"ReactJS",
        Level:"Advanced"
      }]
  
    })
    .expect('Content-Type', /json/).expect(200)
    
      
  })

})


describe('Testing Delete ' , ()=>{
  it('Delete with invalid ID' , async ()=>{
    return await request(server).delete('/resume/delete/624b63ca18xcde99b922865r')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .expect(500)
  })
  it('Delete with valid ID' , async ()=>{
    return await request(server).delete('/resume/delete/624b63ca18bcde99b9228654')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .expect(201)
  })
})


describe("Testing Update", ()=>{
  it('PATCH with invalid Token  ',async ()=>{
    
    return await request(server).patch('/resume/update/dadafa')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"})
    .expect('Content-Type', /json/)
    .send({ 
      Title:"Resume 1",
      User : "62497d716a077a3026357f1e",
      BasicInfo:{
          Name: "Daniyal Mujtaba", 
          PhoneNumber : "923322296562",
          Email : "daniyal.mujtab10@gmail.com",
          Address : "A81 Street 3 "
      },
      Education: [{
          Institute : "Fast Nuces",
          StartDate : "Aug 2017",
          EndDate : "June 2021",
          Present : false,
          Summary: "Nothing did ",
          Level : "Bachelors",
          Major: "Computer Science",
          GPA: "2.33",
          Location:"Karachi",

      }],
      Experience: [{
          Company : "TripleK",
          StartDate : "July 2021",
          EndDate : "Dec 2021",
          Present  : false,
          Summary: "SAsdkadkaa",
          Type:"Full-time"
      }],
      Skills: [{
        Name:"ReactJS",
        Level:"Advanced"
      }]
  
    })
    .expect(500);
    
})
  it('update with valid Token but wrong body ',async ()=>{
    
    return await request(server).patch('/resume/update/624c1d677fe80718c8b99e34')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"})
    .expect('Content-Type', /json/)
    .send({ 
      Title:"Resume 1",
      User : "62497d716a077a3026357f1e",
      BasicInfo:{
          Name: "Daniyal Mujtaba", 
          PhoneNumber : "923322296562",
          Email : "daniyal.mujtab10@gmail.com",
          Address : "A81 Street 3 "
      },
      Education: [{
          Institute : "Fast Nuces",
          StartDate : "Aug 2017",
          EndDate : "June 2021",
          Present : false,
          Summary: "Nothing did ",
          Level : "Bachelors",
          Major: "Computer Science",
          GPA: "2.33",

      }],
      Experience: [{
          Company : "TripleK",
          StartDate : "July 2021",
          EndDate : "Dec 2021",
          Present  : false,
      }],
      Skills: [{
        Name:"ReactJS",
        Level:"Advanced"
      }]

    })
    .expect(500);
    
  })
  it('update with valid body and token', async ()=>{
    return await request(server).patch('/resume/update/624c1d677fe80718c8b99e34')
    .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw",{type:"bearer"}) 
    .send({ 
      Title:"Resume 1",
      User : "62497d716a077a3026357f1e",
      BasicInfo:{
          Name: "Daniyal Mujtaba", 
          PhoneNumber : "923322296562",
          Email : "daniyal.mujtab10@gmail.com",
          Address : "A81 Street 3 "
      },
      Education: [{
          Institute : "Fast Nuces",
          StartDate : "Aug 2017",
          EndDate : "June 2021",
          Present : false,
          Summary: "Nothing did ",
          Level : "Bachelors",
          Major: "Computer Science",
          GPA: "2.33",
          Location:"Karachi",

      }],
      Experience: [{
          Company : "TripleK",
          StartDate : "July 2021",
          EndDate : "Dec 2021",
          Present  : false,
          Summary: "SAsdkadkaa",
          Type:"Full-time"
      }],
      Skills: [{
        Name:"ReactJS",
        Level:"Advanced"
      }]
  
    })
    .expect('Content-Type', /json/).expect(200)
    
      
  })
})