import React, { useState, useEffect } from "react"
// // import Components from "../components/components.js"
import SbEditable from "storyblok-react"
import SingleArtwork from "../components/artworks2/singleArtwork/singleArtwork"
import getArtwork from "../components/artworks2/helper/getArtwork"

export default function StoryblokEntry() {
  const [data, setData] = useState(null)
  const [artwork, setArtwork] = useState(null)

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
  const loadStoryblokBridge = function (cb) {
    let script = document.createElement("script")
    script.id = "bla"
    script.type = "text/javascript"
    script.src = `//app.storyblok.com/f/storyblok-latest.js?t=ObvzIeHZVi9TkIUctkrfHQtt`
    script.onload = cb
    document.getElementsByTagName("head")[0].appendChild(script)
  }

  const initStoryblokEvents = () => {
    // loadStory()

    let sb = window.storyblok

    sb.on(["change", "published"], payload => {
      // loadStory(payload)
      console.log("change")
      console.log(payload)
      console.log("----------------")
    })

    sb.on("input", payload => {
      if (data) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        )
      }
      // loadStory(payload)
      console.log("input")
      console.log(payload)
      console.log("----------------")

      // if (this.state.story && payload.story.id === this.state.story.id) {
      //   payload.story.content = sb.addComments(
      //     payload.story.content,
      //     payload.story.id
      //   )
      //   this.setState({ story: payload.story })
      // }
    })

    // sb.pingEditor(() => {
    //   if (sb.inEditor) {
    //     sb.enterEditmode()
    //   }
    // })
  }
  const loadStory = payload => {
    console.log("load.................. ")
    window.storyblok.get(
      {
        slug: getParam("path"),
        version: "draft",
        resolve_relations: "artist",
      },
      data => {
        setArtwork(data.story)
        setData(data)
        // console.log(payload)
        // console.log(data)
        // this.setState({ story: data.story })
        // this.loadGlovalNavi(data.story.lang)
      }
    )
  }

  useEffect(() => {
    loadStoryblokBridge(() => {
      initStoryblokEvents()
    })
  }, [initStoryblokEvents])

  return (
    <React.Fragment>
      {artwork && data && (
        <SbEditable content={data.story.content}>
          <SingleArtwork artwork={getArtwork(artwork)}></SingleArtwork>
        </SbEditable>
      )}
    </React.Fragment>
  )
}
