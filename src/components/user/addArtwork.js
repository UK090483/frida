/* src/App.js */
import React, { useEffect, useState } from 'react'
import firebase from "gatsby-plugin-firebase"


const initialState = { name: '', description: '' }

const AddArtwork = (props) => {


    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetchTodos()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    function fetchTodos() {
        // try {
        //     const todoData = await API.graphql(graphqlOperation(listArtworks))
        //     // const todos = todoData.data.listTodos.items
        //     console.log(todoData)
        //     // setTodos(todos)
        // } catch (err) { console.log('error fetching todos', err) }
    }

    function addArtwork() {
        firebase
            .firestore()
            .collection("Artworks").add({
                name: formState.name,
                state: "CA",
                country: "USA"
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

    }



    return (
        <div style={styles.container}>
            <input
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <input
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />
            <input
                onChange={event => setInput('availability', event.target.value)}
                style={styles.input}
                value={formState.availability}
                placeholder="Availability"
            />
            <input
                onChange={event => setInput('stil', event.target.value)}
                style={styles.input}
                value={formState.stil}
                placeholder="stil"
            />
            <input
                onChange={event => setInput('price', event.target.value)}
                style={styles.input}
                value={formState.price}
                placeholder="price"
            />
            <input
                onChange={event => setInput('medium', event.target.value)}
                style={styles.input}
                value={formState.medium}
                placeholder="medium"
            />
            <input
                onChange={event => setInput('width', event.target.value)}
                style={styles.input}
                value={formState.width}
                placeholder="width"
            />
            <input
                onChange={event => setInput('height', event.target.value)}
                style={styles.input}
                value={formState.height}
                placeholder="height"
            />
            <input
                onChange={event => setInput('insta_link', event.target.value)}
                style={styles.input}
                value={formState.instaLink}
                placeholder="Instagram Link"
            />

            <button style={styles.button} onClick={addArtwork}>Create Artwork</button>
            {
                todos.map((todo, index) => (
                    <div key={todo.id ? todo.id : index} style={styles.todo}>
                        <p style={styles.todoName}>{todo.name}</p>
                        <p style={styles.todoDescription}>{todo.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: { marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default AddArtwork