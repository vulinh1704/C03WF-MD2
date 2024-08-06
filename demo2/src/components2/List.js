import { Link } from "react-router-dom";

export function List() {
    return (
        <>
            <div class="main">
                <Link to="/admin/students/add">Add</Link>
                <h1>List</h1>
            </div>
        </>
    )
}