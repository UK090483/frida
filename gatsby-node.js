// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const path = require(`path`); // you will need it later to point at your template component


// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;

//     // we use a Promise to make sure the data are loaded
//     // before attempting to create the pages with them
//     return new Promise((resolve, reject) => {
//         // fetch your data here, generally with graphQL.
//         // for example, let say you use your data from Contentful using its associated source plugin
//         graphql(`
//             query MyQuery {
//                 artworks {
//                 artworks {
//                     arwork_name
//                 }
//                 }
//             }
//     `).then(result => {
//             // first check if there is no errors
//             if (result.errors) {
//                 // reject Promise if error
//                 reject(result.errors);
//             }


//             // if no errors, you can map into the data and create your static pages
//             result.data.artworks.artworks.forEach((artwork) => {
//                 // create page according to the fetched data


//                 createPage({
//                     path: `/artwork/${artwork.arwork_name}`, // your url -> /categories/animals
//                     component: path.resolve('./src/templates/singleArtworkTemplate.js'), // your template component
//                     context: {
//                         // optional,
//                         // data here will be passed as props to the component ``,
//                         // as well as to the graphql query as graphql arguments.
//                         slug: artwork.arwork_name,
//                     },
//                 });
//             });

//             resolve();
//         });
//     });
// };