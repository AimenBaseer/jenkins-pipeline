const fs = require("fs");
downloadFileFromS2 = () => {
    const dir=`${__dirname}/data/`;
    try {
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir,{recursive: true});
        }

        fs.writeFileSync(`${dir}/pipelineContent.txt`, "S3 bucket file");
      } catch (err) {
        console.error(err);
      }
};

downloadFileFromS2();
