import { useEffect, useState } from "react"

function FetchTest (){

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        console.log("use effect")
        let url = "https://dogapi.dog/api/v2/breeds"
        fetch(url)
        .then(x => x.json())
        .then(data => 
            {
                setDogs(data.data)
            } 
        )
    }, [])

    function handleClick(){
        let url = "https://dogapi.dog/api/v2/breeds?page[number]=2"
        fetch(url)
        .then(x => x.json())
        .then(data => 
            {
                setDogs(data.data)
            } 
        )
    }

    return (
        <>
        <h1>Fetch Test</h1>
        
        <button type="button" onClick={handleClick}>Pagina 2</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {dogs.map(dog => {
                            return(
                                <tr key={dog.id}>
                                    <td>{dog.id}</td>
                                    <td>{dog.attributes.name}</td>
                                    <td>{dog.attributes.description}</td>
                                </tr>
                            )
                        })}
            </tbody>
        </table>
        </>
    )
}

export {FetchTest}