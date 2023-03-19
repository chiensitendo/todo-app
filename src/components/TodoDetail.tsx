import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { Todo} from "../type";
import {getPriorityString, getStatusString} from "../const";
import jsonData from "../todo.json";
import {useMemo} from "react";
const data: Todo[] = jsonData;

const TodoDetail = (props: any) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const item: Todo | undefined | null = useMemo(() => {
        if ((!location.state) && id) {
            return data.find(i => i.id === +id);
        }
        return location.state;
    },[location, id]);

    const handleOnBack = () => {
        navigate("/",);
    }
    return <div>
        <button type="button" className="btn btn-primary pb-2" onClick={handleOnBack}>Back to list</button>
        {item && <React.Fragment>
            <h1>{item.title}</h1>
            <p>Detail:</p>
            <ul className="list-group">
                <li className="list-group-item">id: {item.id}</li>
                <li className="list-group-item">title: {item.title}</li>
                <li className="list-group-item">content: {item.content}</li>
                <li className="list-group-item">priority: {getPriorityString(item.priority)}</li>
                <li className="list-group-item">status: {getStatusString(item.status)}</li>
            </ul>
        </React.Fragment>}
    </div>
}

export default TodoDetail;