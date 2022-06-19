const fs = require("fs");

const uploadData = () => {
  const dir = `${__dirname}/data/`;
  const data = fs.readFileSync(`${dir}/pipelineContent.txt`, "utf8");
  console.log("uploadData",data);

};

uploadData();
