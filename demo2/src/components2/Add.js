import { Link } from "react-router-dom";

export function Add() {
    return (
        <>
            <div class="main">
                <Link to="/admin/students/list">Back to list</Link>
                <h1>Add</h1>
            </div>
        </>
    )
}