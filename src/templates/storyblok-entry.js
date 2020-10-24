import React from "react"
import Components from "../storyblock/components"

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    const globalNavi = Object.assign({}, props.pageContext.globalNavi)
    story.content = JSON.parse(story.content)
    globalNavi.content = JSON.parse(globalNavi.content)

    return { story, globalNavi }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)

    console.log(props)
  }

  render() {
    let content = this.state.story.content

    return (
      <div>
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </div>
    )
  }
}

export default StoryblokEntry
