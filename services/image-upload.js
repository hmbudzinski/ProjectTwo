var fs = require('fs');
var AWS = require('aws-sdk');

const BUCKET_NAME = 'neena.johnbritto'
const REGION = 'us-east-2'
const ACCESS_KEY = 'AKIAJHQS5QWGLGXXHWJA'
const SECRET_KEY = '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'

AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
    region: REGION
});

var s3 = new AWS.S3()

// Uploading files to the bucket
function upload(image) {
    // Setting up S3 upload parameters
    console.log("image" + image);
    var date = new Date();
    var timestamp = date.getTime();
    var location;
    var fileLocation;

    const params = {
        Bucket: BUCKET_NAME,
        Key: "image" + timestamp + ".jpg", // File name you want to save as in S3
        Body: image
    };


    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully1. ${data.Location}`);
        // fileLocation = data.Location;
    });
    console.log(`File uploaded successfully2. ${fileLocation}`);
    fileLocation = `https://s3.us-east-2.amazonaws.com/${params.Bucket}/${params.Key}`;
    return fileLocation;
    // https://s3.us-east-2.amazonaws.com/neena.johnbritto/image1582698214475.jpg
}

// function download(image) {
//     s3.getObject({ Bucket: BUCKET_NAME, Key: image },
//         function(error, data) {
//             if (error != null) {
//                 alert("Failed to retrieve an object: " + error);
//             } else {
//                 alert("Loaded " + data.ContentLength + " bytes");
//             }
//         }
//     );

module.exports = upload;