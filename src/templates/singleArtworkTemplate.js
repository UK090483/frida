import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import SingleArtwork from '../components/artworks/singleArtwork/singleArtwork';
import Section from '../components/container/section';
import { graphql } from 'gatsby';

export default function SingleArtworkTemplate({ data }) {



  return (
    // <Layout title={data.artworks.artist_name}>
    //   <SEO title="aboute" />
    //   <Section>
    //     {data.artworks && <SingleArtwork artwork={data.artworks}></SingleArtwork>}
    //   </Section>
    // </Layout>
    <div></div>

  )

}

// export const query = graphql`
// query ($slug: String!) {
//     artworks(arwork_name: {eq: $slug}) {
//       artist_description
//       artist_name
//       artwork_description
//       arwork_name
//       availability
//       height
//       id
//       instagram_link
//       medium
//       price
//       stil
//       width
//       image {
//         large
//         original
//         srcset
//       }
//     }
//   }
// `