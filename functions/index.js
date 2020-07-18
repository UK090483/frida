const functions = require("firebase-functions")
const faker = require("faker")
const admin = require("firebase-admin")
admin.initializeApp()
const request = require("request")

exports.createUserDoc = functions.auth.user().onCreate(user => {
  const NewUser = {
    name: "No Name",
    email: user.email,
  }
  return Promise.all([
    admin.firestore().collection("users").doc(user.uid).set(NewUser),
  ])
})

function parseArtwork(artwork) {
  const answers = artwork.answers

  const artistName = answers["1"].hasOwnProperty("answer")
    ? answers["1"].answer
    : "no name"
  const artistEmail = answers["5"].hasOwnProperty("answer")
    ? answers["5"].answer
    : "no name"
  const artistDescription = answers["10"].hasOwnProperty("answer")
    ? answers["10"].answer
    : "no name"
  // const artworkName = answers['10'].hasOwnProperty('answer') ? answers['10'].answer : 'no name';

  return {
    artistName: artistName,
    artistEmail: artistEmail,
    artistDescription: artistDescription,
    artworkName: "",
    artworkDescription: "",
    availability: "",
    images: {
      url: "",
    },
    height: "",
    width: "",
    price: "",
    stil: "",
    medium: "",
    instagramLink: "",
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getFakerArtwork() {
  return {
    artistName: faker.name.findName(),
    artistEmail: faker.internet.email(),
    artistDescription: faker.lorem.words(),
    artworkName: faker.lorem.words(),
    artworkDescription: faker.lorem.words(),
    availability: randomItem(["sold", "availabil"]),
    images: {
      url: `https://picsum.photos/${getRandomInt(1000, 2000)}/${getRandomInt(
        1000,
        2000
      )}.jpg`,
    },
    height: getRandomInt(100, 20000),
    width: getRandomInt(100, 20000),
    price: getRandomInt(100, 2000),
    stil: randomItem(["abstrakt", "Bildlich"]),
    medium: randomItem([
      "Mixed-Media",
      "Malerei",
      "Print",
      "Photo",
      "Zeichnung",
    ]),
    instagramLink: faker.internet.url(),
  }
}

function getFake(number) {
  var faker = new Array(number).fill("bla")
  var res = []

  faker.forEach(() => {
    res.push(getFakerArtwork())
  })
  return res
}

exports.helloMrfaker = functions.https.onRequest((request, response) => {
  let res = getFake(50)
  response.send(res)
})

exports.getImage = functions.https.onRequest(async (request, response) => {
  let id = request.params[0].replace("/picture.jpg", "")
  let bucket = admin.storage().bucket()

  const file = bucket.file(`artworks${id}/picture`)
  const readStream = file.createReadStream()
  readStream.pipe(response)
})

exports.helloRealData = functions.https.onRequest(async (request, response) => {
  const onlineArtworksArray = await admin
    .firestore()
    .collection("einstellungen")
    .doc("options")
    .get()
  let ActiveArray = []
  let artists = []
  let res = []

  if (!onlineArtworksArray.exists) {
    console.log("No such document! onlineArtworksArray")
    response.send(["nono onlineArtworksArray"])
  } else {
    console.log("Document data:", onlineArtworksArray.data())
    ActiveArray = onlineArtworksArray.data().ArtworksActive
  }

  const fetchedArtists = await admin.firestore().collection("users").get()

  if (fetchedArtists.empty) {
    console.log("No such document! fetchedArtists")
    response.send(["nono fetchedArtists"])
  } else {
    fetchedArtists.forEach(doc => {
      console.log(doc.id, " => ", doc.data())
      artists.push({ ...doc.data(), id: doc.id })
    })
  }

  const onlineArtworks = await admin
    .firestore()
    .collection("artworks")
    .where("__name__", "in", ActiveArray)
    .get()

  if (onlineArtworks.empty) {
    console.log("No such document! onlineArtworks")
    response.send(["nono onlineArtworks"])
  } else {
    onlineArtworks.forEach(doc => {
      let item = doc.data()
      let findArtist = artists.find(a => {
        return a.id === item.user_id
      })

      const safe = {
        artistDescription: findArtist
          ? findArtist.description
          : "artist not found",
        artistEmail: findArtist ? findArtist.email : "artist not found",
        artistName: findArtist ? findArtist.name : "artist not found",
        artistInstagramLink: findArtist
          ? findArtist.instagramLink
          : "artist not found",
        artistAnzeigeName: findArtist
          ? findArtist.anzeigeName || ""
          : "artist not found",
        artworkDescription: item.description,
        artworkName: item.title,
        availability: item.availability,
        height: item.height,
        artworkInstagramLink: item.instagramLink,
        medium: item.medium,
        price: item.price,
        stil: item.stil,
        width: item.width,
        images: {
          url: `https://us-central1-frida-f2f3c.cloudfunctions.net/getImage/${doc.id}/picture.jpg`,
        },
      }

      res.push(safe)
    })
    response.send(res)
  }
})

exports.getArtworks = functions.https.onRequest(async (request, response) => {
  const onlineArtworksArray = await admin
    .firestore()
    .collection("einstellungen")
    .doc("options")
    .get()
  let ActiveArray = []
  let artists = []
  let res = []

  if (!onlineArtworksArray.exists) {
    console.log("No such document! onlineArtworksArray")
    response.send(["nono onlineArtworksArray"])
  } else {
    console.log("Document data:", onlineArtworksArray.data())
    ActiveArray = onlineArtworksArray.data().ArtworksActive
  }

  const fetchedArtists = await admin.firestore().collection("users").get()

  if (fetchedArtists.empty) {
    console.log("No such document! fetchedArtists")
    response.send(["nono fetchedArtists"])
  } else {
    fetchedArtists.forEach(doc => {
      console.log(doc.id, " => ", doc.data())
      artists.push({ ...doc.data(), id: doc.id })
    })
  }

  const onlineArtworks = await admin
    .firestore()
    .collection("artworks")
    .where("online", "==", true)
    .get()

  if (onlineArtworks.empty) {
    console.log("No such document! onlineArtworks")
    response.send(["nono onlineArtworks"])
  } else {
    onlineArtworks.forEach(doc => {
      let item = doc.data()
      let findArtist = artists.find(a => {
        return a.id === item.user_id
      })

      const safe = {
        artistDescription: findArtist
          ? findArtist.description
          : "artist not found",
        artistEmail: findArtist ? findArtist.email : "artist not found",
        artistName: findArtist ? findArtist.name : "artist not found",
        artistInstagramLink: findArtist
          ? findArtist.instagramLink
          : "artist not found",
        artistAnzeigeName: findArtist
          ? findArtist.anzeigeName || ""
          : "artist not found",
        artworkDescription: item.description,
        artworkName: item.title,
        availability: item.availability,
        height: item.height,
        artworkInstagramLink: item.instagramLink,
        medium: item.medium,
        price: item.price,
        stil: item.stil,
        width: item.width,
        images: {
          url: `https://us-central1-frida-f2f3c.cloudfunctions.net/getImage/${doc.id}/picture.jpg`,
        },
      }

      res.push(safe)
    })
    response.send(res)
  }
})

exports.helloRealData = functions.https.onRequest(async (request, response) => {
  const onlineArtworksArray = await admin
    .firestore()
    .collection("einstellungen")
    .doc("options")
    .get()
  let ActiveArray = []
  let artists = []
  let res = []

  if (!onlineArtworksArray.exists) {
    console.log("No such document! onlineArtworksArray")
    response.send(["nono onlineArtworksArray"])
  } else {
    console.log("Document data:", onlineArtworksArray.data())
    ActiveArray = onlineArtworksArray.data().ArtworksActive
  }

  const fetchedArtists = await admin.firestore().collection("users").get()

  if (fetchedArtists.empty) {
    console.log("No such document! fetchedArtists")
    response.send(["nono fetchedArtists"])
  } else {
    fetchedArtists.forEach(doc => {
      console.log(doc.id, " => ", doc.data())
      artists.push({ ...doc.data(), id: doc.id })
    })
  }

  const onlineArtworks = await admin
    .firestore()
    .collection("artworks")
    .where("__name__", "in", ActiveArray)
    .get()

  if (onlineArtworks.empty) {
    console.log("No such document! onlineArtworks")
    response.send(["nono onlineArtworks"])
  } else {
    onlineArtworks.forEach(doc => {
      let item = doc.data()
      let findArtist = artists.find(a => {
        return a.id === item.user_id
      })

      const safe = {
        artistDescription: findArtist
          ? findArtist.description
          : "artist not found",
        artistEmail: findArtist ? findArtist.email : "artist not found",
        artistName: findArtist ? findArtist.name : "artist not found",
        artistInstagramLink: findArtist
          ? findArtist.instagramLink
          : "artist not found",
        artistAnzeigeName: findArtist
          ? findArtist.anzeigeName || ""
          : "artist not found",
        artworkDescription: item.description,
        artworkName: item.title,
        availability: item.availability,
        height: item.height,
        artworkInstagramLink: item.instagramLink,
        medium: item.medium,
        price: item.price,
        stil: item.stil,
        width: item.width,
        images: {
          url: `https://us-central1-frida-f2f3c.cloudfunctions.net/getImage/${doc.id}/picture.jpg`,
        },
      }

      res.push(safe)
    })
    response.send(res)
  }
})
