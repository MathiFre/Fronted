import { useEffect, useState } from "react"

const Home = () => {

    const [isLogged, setIsLogged] = useState(false);

    useEffect ( () => {
        let aux = localStorage.getItem("isLogged");
        if(aux != null && aux != undefined)
        {
            setIsLogged(true);
        }
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li key={1}>
                    <a href="/posts">Posts</a>
                    
                </li>
                <li key={2}>
                    <a href="/tags">Tags</a>
                </li>
            </ul>
            
        </div>

    )
}

export {Home}