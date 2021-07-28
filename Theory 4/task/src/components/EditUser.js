import {useParams} from 'react-router-dom';
import { useState } from 'react';
const EditUser = ({editCallback})=>{
    const {id:eid} = useParams();
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    return(
        <div>
            <table>
                <tr align="right">
                    <td>
                        <label>
                            Id: {eid}
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Name:
                            <input type="text" onChange={event => setName(event.target.value)}/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Dept:
                            <input type="text" onChange={event => setDept(event.target.value)}/>
                        </label>
                    </td>
                </tr>
            </table>
            <button onClick={()=>editCallback(eid,name,dept)}>Edit</button>
        </div>
    );
}

export default EditUser;