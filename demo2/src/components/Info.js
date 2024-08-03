import { useParams } from "react-router-dom"

export function Info() {
    const params = useParams();
    let id = params.id;
    //<=> const {id} =  useParams();
    return (
        <h1>User: {id}</h1>
    )
}