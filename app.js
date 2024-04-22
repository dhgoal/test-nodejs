const download = require('download');
const fs = require('fs');

const username = 'BAML2';
const password = 'Merrill1$';
// Encode username and password in base64 for basic auth
const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

// URL of the file you want to download
const fileUrl = 'https://services.yesenergy.com/PS/rest/timeseries/multiple.csv?agglevel=5min&datacollections=102486&timezone=EST&items=LPI_GEN_EARLY:10016471628';

// Local path to save the downloaded file
const outputPath = 'ercot.csv';

// Setting the Authorization header for basic authentication
const options = {
    headers: {
        'Authorization': basicAuth
    }
};

download(fileUrl, options).then(data => {
    fs.writeFileSync(outputPath, data);
    console.log('File downloaded successfully!');
}).catch(err => {
    console.error('Error downloading the file:', err);
});
