var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { agent as request } from "supertest";
import server from "../server";
describe("Checking Authentication Header for every Call", function () {
    it('/readAll', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/readAll/Ogiec1eWlWTPa6A9OaY8e4m6D2B2')
                        .auth("", { type: "bearer" })
                        .expect(401)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('/create', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).post('/resume/create')
                        .auth("", { type: "bearer" })
                        .expect(401)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('/read/:id', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/read/62497fbc6a077a3026357f29')
                        .auth("", { type: "bearer" })
                        .expect(401)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('/update', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).patch('/resume/update/62497fbc6a077a3026357f29')
                        .auth("", { type: "bearer" })
                        .expect(401)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('/delete', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).delete('/resume/delete/62497fbc6a077a3026357f29')
                        .auth("", { type: "bearer" })
                        .expect(401)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
describe('Testing ReadAll', function () {
    it('GET /resume/:validtoken must get a resume object ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/readAll/62497fbc6a077a3026357f29')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/).expect(200)
                        .then(function (response) {
                        expect(response.body).toEqual(expect.objectContaining({
                            count: expect.any(Number),
                            resumes: expect.any(Array)
                        }));
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('GET /resume/:userID=valid but wrong token must get count 0 and resumes = [] ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/readAll/dadad')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/).expect(500)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
describe('Testing Read', function () {
    it('GET /resume/:validtoken must get a resume object ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/read/624c1d677fe80718c8b99e34')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/).expect(200)
                        .then(function (response) {
                        expect(response.body).toEqual(expect.objectContaining({
                            resume: expect.any(Object)
                        }));
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('GET /resume/:userID=valid but wrong token must return 404 ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/read/624c1d677fe80718c8b99e31')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/).expect(404)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('GET /resume/:userID=invalid 500 ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).get('/resume/read/ddd')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/).expect(500)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
describe('Testing Create', function () {
    it('POST Create with missing body or incorrect must return 400 with error ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).post('/resume/create')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/)
                        .set({ name: 'valied' })
                        .expect(400)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('POST create with valid body ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).post('/resume/create')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .send({
                        Title: "Resume 1",
                        User: "62497d716a077a3026357f1e",
                        BasicInfo: {
                            Name: "Daniyal Mujtaba",
                            PhoneNumber: "923322296562",
                            Email: "daniyal.mujtab10@gmail.com",
                            Address: "A81 Street 3 "
                        },
                        Education: [{
                                Institute: "Fast Nuces",
                                StartDate: "Aug 2017",
                                EndDate: "June 2021",
                                Present: false,
                                Summary: "Nothing did ",
                                Level: "Bachelors",
                                Major: "Computer Science",
                                GPA: "2.33",
                                Location: "Karachi",
                            }],
                        Experience: [{
                                Company: "TripleK",
                                StartDate: "July 2021",
                                EndDate: "Dec 2021",
                                Present: false,
                                Summary: "SAsdkadkaa",
                                Type: "Full-time"
                            }],
                        Skills: [{
                                Name: "ReactJS",
                                Level: "Advanced"
                            }]
                    })
                        .expect('Content-Type', /json/).expect(200)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
describe('Testing Delete ', function () {
    it('Delete with invalid ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).delete('/resume/delete/624b63ca18xcde99b922865r')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect(500)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('Delete with valid ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).delete('/resume/delete/624b63ca18bcde99b9228654')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect(201)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
describe("Testing Update", function () {
    it('PATCH with invalid Token  ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).patch('/resume/update/dadafa')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/)
                        .send({
                        Title: "Resume 1",
                        User: "62497d716a077a3026357f1e",
                        BasicInfo: {
                            Name: "Daniyal Mujtaba",
                            PhoneNumber: "923322296562",
                            Email: "daniyal.mujtab10@gmail.com",
                            Address: "A81 Street 3 "
                        },
                        Education: [{
                                Institute: "Fast Nuces",
                                StartDate: "Aug 2017",
                                EndDate: "June 2021",
                                Present: false,
                                Summary: "Nothing did ",
                                Level: "Bachelors",
                                Major: "Computer Science",
                                GPA: "2.33",
                                Location: "Karachi",
                            }],
                        Experience: [{
                                Company: "TripleK",
                                StartDate: "July 2021",
                                EndDate: "Dec 2021",
                                Present: false,
                                Summary: "SAsdkadkaa",
                                Type: "Full-time"
                            }],
                        Skills: [{
                                Name: "ReactJS",
                                Level: "Advanced"
                            }]
                    })
                        .expect(500)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('update with valid Token but wrong body ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).patch('/resume/update/624c1d677fe80718c8b99e34')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .expect('Content-Type', /json/)
                        .send({
                        Title: "Resume 1",
                        User: "62497d716a077a3026357f1e",
                        BasicInfo: {
                            Name: "Daniyal Mujtaba",
                            PhoneNumber: "923322296562",
                            Email: "daniyal.mujtab10@gmail.com",
                            Address: "A81 Street 3 "
                        },
                        Education: [{
                                Institute: "Fast Nuces",
                                StartDate: "Aug 2017",
                                EndDate: "June 2021",
                                Present: false,
                                Summary: "Nothing did ",
                                Level: "Bachelors",
                                Major: "Computer Science",
                                GPA: "2.33",
                            }],
                        Experience: [{
                                Company: "TripleK",
                                StartDate: "July 2021",
                                EndDate: "Dec 2021",
                                Present: false,
                            }],
                        Skills: [{
                                Name: "ReactJS",
                                Level: "Advanced"
                            }]
                    })
                        .expect(500)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('update with valid body and token', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(server).patch('/resume/update/624c1d677fe80718c8b99e34')
                        .auth("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGFuaXlhbCBNdWp0YWJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpGQ2tBWV82YnlkMjZUczhGT1AzcXVUVzdmM0tRRFJIckFvUHFYPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc3VtZS1idWlsZGVyLWF1dGgtZDAzNzIiLCJhdWQiOiJyZXN1bWUtYnVpbGRlci1hdXRoLWQwMzcyIiwiYXV0aF90aW1lIjoxNjQ5MTY5ODg5LCJ1c2VyX2lkIjoiT2dpZWMxZVdsV1RQYTZBOU9hWThlNG02RDJCMiIsInN1YiI6Ik9naWVjMWVXbFdUUGE2QTlPYVk4ZTRtNkQyQjIiLCJpYXQiOjE2NDkxNjk4ODksImV4cCI6MTY0OTE3MzQ4OSwiZW1haWwiOiJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNjQ1MTkyNzIxMzkyNjg1MTIzNCJdLCJlbWFpbCI6WyJkYW5peWFsLm11anRhYmExMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VGTp_XbHbG7XUIfYPh-mbmbgKGnFbTdpMSSPDaOJK1L-Ih1Dd2uoV6D4cJHv7kVJC37RtN9mYaYnSFGlwZMKAR5F0HyZXX8tkGa19MuGrZCUXArXtEMz7ae6pK1Tr17ONrFls2L-lpFPgExOiBTmLiG353sjgLPNPx9M1lcvJP05_wOWefZCBmsWXPjJAOFHrXvf9Ku3d3qtsWza0mz36xGa8lCGVVgOc-k1t6fbia7d706E9N1KfvU6NFufYAqZq4P6Rgi9EEUjlvsiz3CtfsempzML1jsk8lO3wG6okmv51YysT1vYaHucVNkikBEH5iIzk6m0aQcwWflUlZNtlw", { type: "bearer" })
                        .send({
                        Title: "Resume 1",
                        User: "62497d716a077a3026357f1e",
                        BasicInfo: {
                            Name: "Daniyal Mujtaba",
                            PhoneNumber: "923322296562",
                            Email: "daniyal.mujtab10@gmail.com",
                            Address: "A81 Street 3 "
                        },
                        Education: [{
                                Institute: "Fast Nuces",
                                StartDate: "Aug 2017",
                                EndDate: "June 2021",
                                Present: false,
                                Summary: "Nothing did ",
                                Level: "Bachelors",
                                Major: "Computer Science",
                                GPA: "2.33",
                                Location: "Karachi",
                            }],
                        Experience: [{
                                Company: "TripleK",
                                StartDate: "July 2021",
                                EndDate: "Dec 2021",
                                Present: false,
                                Summary: "SAsdkadkaa",
                                Type: "Full-time"
                            }],
                        Skills: [{
                                Name: "ReactJS",
                                Level: "Advanced"
                            }]
                    })
                        .expect('Content-Type', /json/).expect(200)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
