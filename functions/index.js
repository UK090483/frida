const functions = require('firebase-functions');
const https = require('https');
const faker = require('faker');
const admin = require('firebase-admin');
const os = require('os');
const fs = require('fs');
const path = require('path');
admin.initializeApp();
const request = require('request');


function parseArtwork(artwork) {

    const answers = artwork.answers

    const artistName = answers['1'].hasOwnProperty('answer') ? answers['1'].answer : 'no name';
    const artistEmail = answers['5'].hasOwnProperty('answer') ? answers['5'].answer : 'no name';
    const artistDescription = answers['10'].hasOwnProperty('answer') ? answers['10'].answer : 'no name';
    // const artworkName = answers['10'].hasOwnProperty('answer') ? answers['10'].answer : 'no name';

    return {
        artistName: artistName,
        artistEmail: artistEmail,
        artistDescription: artistDescription,
        artworkName: '',
        artworkDescription: '',
        availability: '',
        images: {
            url: '',
        },
        height: '',
        width: '',
        price: '',
        stil: '',
        medium: '',
        instagramLink: ''
    }
}

exports.helloWorld = functions.https.onRequest((request, response) => {

    const url = 'https://eu-api.jotform.com/form/201882655258059/submissions?apiKey=031974a65f427ea31e551072408be244&limit=1000&filter={"status":"ACTIVE"}'

    var req = https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk; });
        resp.on('end', () => {
            var result = JSON.parse(data);

            var res = []
            result.content.forEach((artwork) => {
                res.push(parseArtwork(artwork))
                console.log(artwork)
            })

            response.send(res);

        });
    }).on("error", (err) => { console.log("Error: " + err.message); });

    //response.send('bam');

});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomItem(array) {
    return array[Math.floor((Math.random() * array.length))];
}

function getFakerArtwork() {

    return {
        artistName: faker.name.findName(),
        artistEmail: faker.internet.email(),
        artistDescription: faker.lorem.words(),
        artworkName: faker.lorem.words(),
        artworkDescription: faker.lorem.words(),
        availability: randomItem(['sold', 'availabil']),
        images: {
            url: `https://picsum.photos/${getRandomInt(1000, 2000)}/${getRandomInt(1000, 2000)}.jpg`,
        },
        height: getRandomInt(100, 20000),
        width: getRandomInt(100, 20000),
        price: getRandomInt(100, 2000),
        stil: randomItem(['abstrakt', 'Bildlich']),
        medium: randomItem(['Mixed-Media', 'Malerei', 'Print', 'Photo', 'Zeichnung']),
        instagramLink: faker.internet.url(),
    }
}

function getFake(number) {
    var faker = new Array(number).fill('bla')
    var res = []

    faker.forEach(() => {
        res.push(getFakerArtwork())
    })
    return res
}



exports.helloMrfaker = functions.https.onRequest((request, response) => {
    let res = getFake(50);
    response.send(res);
});





exports.fakeFirerstore = functions.https.onRequest(async (request, response) => {


    const newArtwork = getFakerArtwork();

    const writeResult = await admin.firestore().collection('Artworks').add(newArtwork);
    // Send back a message that we've succesfully written the message
    response.json({ result: `Message with ID: ${writeResult.id} added.` });
    // let res = getFake(5);
    // response.send(res);
});



function saveImage(url) {

    const bucket = admin.storage().bucket();
    const randomFileName = 'blaaaaaa';

    // Fetch image info using a HTTP HEAD request.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
    request.head(url, (error, info) => {
        if (error) {
            return console.error(error);
        }

        request(url)
            .pipe(
                bucket.file(`sample/images/${randomFileName}`).createWriteStream({
                    metadata: {
                        contentType: info.headers['content-type']
                    }
                })
            )
            .on('error', (err) => {

                // Do something if the upload fails.
                console.error(err);
            })
            .on('finish', () => {

                // Do something when everything is done.

                // Get download url for stored image
                console.log('Image successfully uploaded to Firebase Storage!')
            });
    });
}






exports.saveFile = functions.https.onRequest(async (request, response) => {

    let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
    download(url, 'blllaa')

    response.json({ result: `Done` });

});


async function download(url, fileName) {

    const filePath = path.join(os.tmpdir(), fileName);
    const proto = !url.charAt(4).localeCompare('s') ? https : http;

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        const fileInfo = null;

        const request = proto.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }

            fileInfo = {
                mime: response.headers['content-type'],
                size: parseInt(response.headers['content-length'], 10),
            };

            response.pipe(

                bucket.file(`sample/images/${fileName}`).createWriteStream({
                    metadata: {
                        contentType: info.headers['content-type']
                    }
                })
            );
        });

        // The destination stream is ended by the time it's called
        file.on('finish', () => resolve(fileInfo));

        request.on('error', err => {
            fs.unlink(filePath, () => reject(err));
        });

        file.on('error', err => {
            fs.unlink(filePath, () => reject(err));
        });

        request.end();
    });
}