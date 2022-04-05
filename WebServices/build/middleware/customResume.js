var ImportantSections;
(function (ImportantSections) {
    ImportantSections[ImportantSections["Skills"] = 0] = "Skills";
    ImportantSections[ImportantSections["Education"] = 1] = "Education";
})(ImportantSections || (ImportantSections = {}));
var ValidateInput = function (req, res, next) {
    for (var item in ImportantSections) {
        if (isNaN(Number(item))) {
            console.log(req.body[item], item, req.body);
            if (!req.body.hasOwnProperty.call(req.body, item))
                return res.status(400).json({
                    error: "".concat(item, " is missing"),
                });
            else if (req.body[item].length === 0) {
                return res.status(400).json({
                    error: "".concat(item, " cant be empty"),
                });
            }
        }
    }
    next();
};
export default {
    ValidateInput: ValidateInput
};
