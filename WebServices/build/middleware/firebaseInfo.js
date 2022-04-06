import firebaseAdmin from "firebase-admin";
var extractFirebaseInfo = function (req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    console.log("yahan aya kiya");
    if (token) {
        firebaseAdmin
            .auth()
            .verifyIdToken(token)
            .then(function (result) {
            if (result)
                res.locals.firebase = result;
            res.locals.fire_token = token;
            next();
        })
            .catch(function (error) {
            console.log(error);
            return res.status(401).json({
                error: error,
                message: "Not authorized",
            });
        });
    }
    else {
        return res.status(401).json({
            message: "Not authorized",
        });
    }
};
export default extractFirebaseInfo;
