const fs = require("fs");

const processData = () => {
  const dir = `${__dirname}/data/`;
  const data = fs.readFileSync(`${dir}/pipelineContent.txt`, "utf8");
  const processedData= `length of content in file: ${data.length}`
  fs.writeFileSync(`${dir}/pipelineContent.txt`,processedData);
};

processData();
