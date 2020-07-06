module.exports = {
  siteMetadata: {
    title: `Frida`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: 'https://frida.konradullrich.com/wp-json/frida/v1/artworks/1/?filter={"künstler":null,"medium":null,"stil":null,"price":null}',
        imageKeys: ["image"],
        rootKey: "artworks",
        schemas: {
          artworks: `
              url: String
              image: image
          `,
          image: `
              original: String
              
          `,
        }
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAAYD757BUfXf0TCdeM3C4Jx88a0LynuMk",
          authDomain: "frida-f2f3c.firebaseapp.com",
          databaseURL: "https://frida-f2f3c.firebaseio.com",
          projectId: "frida-f2f3c",
          storageBucket: "frida-f2f3c.appspot.com",
          messagingSenderId: "1058184616168",
          appId: "1:1058184616168:web:4be69e0c2f682df866915d",
          measurementId: "G-SEDC77C9YL"
        }
      }
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
