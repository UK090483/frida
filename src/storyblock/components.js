import Page from "./page"
// import Grid from "./grid";
// import Teaser from "./teaser";
// import Feature from "./feature";
// import NavItem from "./nav_item";
import Button from "./button"
import Text from "./text"
import Section from "./section"
import Header from "./Header"
import ArtworksBlock from "./ArtworkBlock"
import Artwork from "./Artwork"
import Hero from "./Hero"
import Spacer from "./spacer"
import Störer from "../components/hero/StartHero/stoerer"
import ComponentNotFound from "./component_not_found"

import RT from "./ritchText"
import Supporter from "./Supporter"

const ComponentList = {
  page: Page,
  artworks: ArtworksBlock,
  artwork: Artwork,
  header: Header,
  section: Section,
  text: Text,
  button: Button,
  spacer: Spacer,
  störer: Störer,
  richText: RT,
  supporter: Supporter,
  hero: Hero,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
