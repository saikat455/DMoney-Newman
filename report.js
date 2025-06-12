const newman = require('newman');

newman.run({
    collection: `https://api.postman.com/collections/33516761-0a7dc7ad-31de-4d5f-9a93-556e26b49182?access_key=${process.env.pmatKey}`,
    reporters: `htmlextra`,
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});