import jsonData from "../todo.json";
import {Priority, Todo} from "../type";
import {useCallback, useState} from "react";
import {getPriorityString, getStatusString} from "../const";
import { useNavigate} from "react-router-dom";


const data: Todo[] = jsonData;

const Home = () => {
    const [items, setItems] = useState<Todo[]>(data);
    const [searchValue, setSearchValue] = useState<string>("");
    const [priority, setPriority] = useState<number>(-1);
    const navigate = useNavigate();
    const handleSearch = useCallback(()  => {
        if (!searchValue) {
            setItems(Array.from(data));
            return;
        }
        let list = Array.from(data);
        list = list.filter(item => item.title.includes(searchValue) || item.content.includes(searchValue));
        setItems(list);
    },[searchValue]);
    const gotoDetail = (id: number, item: Todo) => {
        navigate("/" + id,  { state: item });
    }
    return <div className="Home">
        <div>
            <div className="input-group mb-3">
                <input value={searchValue} onChange={event => setSearchValue(event.target.value)} type="text" className="form-control" placeholder="Search todo..."
                       aria-label="Search todo..." aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>Search</button>
            </div>
            <p>Filter by: </p>
            <div className="Filter">
                <div>
                    <label>Priority: </label>
                    <select className="form-select" defaultValue={-1} onChange={event => setPriority(+event.target.value)}>
                        <option value={-1}>Open this select priority</option>
                        <option value={Priority.HIGH}>HIGH</option>
                        <option value={Priority.MEDIUM}>MEDIUM</option>
                        <option value={Priority.LOW}>LOW</option>
                    </select>
                </div>
            </div>
        </div>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            {items.filter(i => i.priority === priority || priority === -1).map((item, index) => {
                return <tr className="Row" key={index} onClick={() => gotoDetail(item.id, item)}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{getPriorityString(item.priority)}</td>
                    <td>{getStatusString(item.status)}</td>
                </tr>
            })}

            </tbody>
        </table>
    </div>
}

export default Home;