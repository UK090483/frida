import React, { useEffect, useState } from "react"
import * as queryString from "query-string"
import Page from "../storyblock/page"

const sanityClient = require("@sanity/client")
const clientForPreview = sanityClient({
  projectId: "ypuaahj7",
  dataset: "test2",
  useCdn: false,
  withCredentials: true,
})

export default function Pages(props) {
  const query = queryString.parse(props.location.search)
  const { pageId, isDraft } = query

  const [state, setstate] = useState(null)

  const preparedPageId = isDraft ? `drafts.${pageId}` : pageId

  useEffect(() => {
    const query = `*[_id == "${pageId}" || _id == "drafts.${pageId}" ]`

    clientForPreview.fetch(query, {}).then(page => {
      setstate(page)
    })
    // const subscription = clientForPreview.listen(query, {}).subscribe(page => {
    //   console.log([page.result])
    //   setstate([page.result])
    // })
    // return () => {
    //   subscription.unsubscribe()
    // }
  }, [pageId, preparedPageId])

  return (
    <React.Fragment>
      {/* {state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      {state && <Page tree={state[state.length - 1]}></Page>}
    </React.Fragment>
  )
}
