import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import SingleArtwork from "../components/artworks/singleArtwork/singleArtwork"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Header from "../components/generic/header/header"
import Kreutz from "../assets/Menu_Kreutz.svg"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import { Link } from "gatsby"

export default function SingleArtworkTemplate(props) {
  const { pageContext } = props
  const { content: artwork } = pageContext

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        return (
          <div>
            {modal ? (
              <React.Fragment>
                <Header
                  title={artwork ? artwork.artistName : ""}
                  color="lila"
                  link={false}
                >
                  <Link
                    style={{ width: 40, pointerEvents: "all" }}
                    // onClick={handleCloseClick}
                    to={closeTo}
                    state={{
                      noScroll: true,
                    }}
                  >
                    <Kreutz
                      onMouseEnter={() => {
                        setMouse("link", true)
                      }}
                      onMouseLeave={() => {
                        setMouse("link", false)
                      }}
                    />
                  </Link>
                </Header>
                <SingleArtwork artwork={artwork}></SingleArtwork>
              </React.Fragment>
            ) : (
              <Layout title={artwork.artistName} color={"lila"}>
                <SEO title={artwork.artistName} />
                {/* <Section> */}
                <SingleArtwork artwork={artwork}></SingleArtwork>
                {/* </Section> */}
              </Layout>
            )}
          </div>
        )
      }}
    </ModalRoutingContext.Consumer>

    // <Layout title={artwork.artistName} color={"lila"}>
    //   <SEO title={artwork.artistName} />
    //   {/* <Section> */}
    //   <SingleArtwork artwork={artwork}></SingleArtwork>
    //   {/* </Section> */}
    // </Layout>
  )
}
