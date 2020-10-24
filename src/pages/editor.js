import React from "react"
import SbEditable from "storyblok-react"
import config from "../../gatsby-config"
import Components from "../storyblock/components"

let sbConfigs = config.plugins.filter(item => {
  return item.resolve === "gatsby-source-storyblok"
})
let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

const loadStoryblokBridge = function (cb) {
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName("head")[0].appendChild(script)
}

const getParam = function (val) {
  var result = ""
  var tmp = []
  window.location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=")
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: null, globalNavi: { content: {} } }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory(payload) {
    window.storyblok.get(
      {
        slug: getParam("path"),
        version: "draft",
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        this.setState({ story: data.story })
        // this.loadGlovalNavi(data.story.lang)
      }
    )
  }

  loadGlovalNavi(lang) {
    const language = lang === "default" ? "" : lang + "/"
    window.storyblok.get(
      {
        slug: `${language}global-navi`,
        version: "draft",
      },
      data => {
        this.setState({ globalNavi: data.story })
      }
    )
  }

  initStoryblokEvents() {
    this.loadStory({ storyId: getParam("path") })

    let sb = window.storyblok

    sb.on(["change", "published"], payload => {
      this.loadStory(payload)
    })

    sb.on("input", payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        )

        const nextStory = {
          ...payload.story,
        }

        this.setState({ story: nextStory })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return <div></div>
    }

    console.log(this.state)

    let content = this.state.story.content
    // let globalNavi = this.state.globalNavi.content

    return (
      <React.Fragment>
        <SbEditable content={content}>
          {React.createElement(Components(content.component), {
            key: content._uid,
            blok: content,
          })}
        </SbEditable>
      </React.Fragment>
    )
  }
}

export default StoryblokEntry
