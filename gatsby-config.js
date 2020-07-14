module.exports = {
  siteMetadata: {
    title: `Frida`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'myNodes',
        imagePath: 'path.to.image',
      },
    },

    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: 'https://us-central1-frida-f2f3c.cloudfunctions.net/helloRealData',
        imageKeys: ["images"],
        rootKey: "Artworks",
        schemas: {
          artworks: `
          artistName: String
          artistEmail: String

          `,
          images: `
          url: String
        `
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://eu-api.jotform.com/form/201882655258059/submissions?apiKey=031974a65f427ea31e551072408be244",
        rootKey: 'testArtworks',
        schemas: {
          testArtworks: `
                  id: String
              `,

        }
      }
    },
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: "AIzaSyAAYD757BUfXf0TCdeM3C4Jx88a0LynuMk",
    //       authDomain: "frida-f2f3c.firebaseapp.com",
    //       databaseURL: "https://frida-f2f3c.firebaseio.com",
    //       projectId: "frida-f2f3c",
    //       storageBucket: "frida-f2f3c.appspot.com",
    //       messagingSenderId: "1058184616168",
    //       appId: "1:1058184616168:web:4be69e0c2f682df866915d",
    //       measurementId: "G-SEDC77C9YL"
    //     },
    //     features: {
    //       auth: true,
    //       database: true,
    //       firestore: true,
    //       storage: true,
    //       messaging: true,
    //       functions: true,
    //     },
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`, `800`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f5c5d9`,
        theme_color: `#f5c5d9`,
        display: `minimal-ui`,
        icon: `src/images/frida-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby - plugin - offline`,
  ],
}
