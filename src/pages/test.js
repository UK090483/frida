import React from "react"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => {




    return (<Layout title={'frida'}>
        <SEO title="Home" />

        <h1>Test</h1>
        <Component></Component>



    </Layout>)
}

export default IndexPage

function Component() {

    console.log(firebase)
    const [data, setData] = React.useState(null)

    React.useEffect(() => {

        firebase
            .firestore()
            .collection("Artworks")
            .get()
            .then(snapshot => {

                snapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });

            })


    }, [])

    return <div>{data ? data : "Loading..."}</div>
}

