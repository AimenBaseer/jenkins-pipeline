const fs = require("fs");
const _= require('lodash')

const processData = () => {
  const dir = `${__dirname}/data/`;
  const data = fs.readFileSync(`${dir}/pipelineContent.txt`, "utf8");
  const processedData= `length of content in file: ${_.map(data,(value)=>(value))}`;
  console.log(processedData)
  
  fs.writeFileSync(`${dir}/pipelineContent.txt`,processedData);
};

processData();
