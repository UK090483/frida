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
import ComponentNotFound from "./component_not_found"

const ComponentList = {
  page: Page,
  ArtworkBlock: ArtworksBlock,
  artwork: Artwork,
  header: Header,
  section: Section,
  text: Text,
  button: Button,
  spacer: Spacer,
  //   teaser: Teaser,
  //   feature: Feature,
  //   nav_item: NavItem,
  Hero: Hero,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
