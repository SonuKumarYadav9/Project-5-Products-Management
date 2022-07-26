const mongoose =require("mongoose")


const isValid = function (value) {
    if (!value || typeof value != "string" || value.trim().length == 0)
      return false;
    return true;
  };
  const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
  };
  
  const isValidFiles = (files) => {
    if (files && files.length > 0) return true;
  };
  const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId);
  };

module.exports={isValid,isValidFiles,isValidRequestBody,isValidObjectId}  