import React from "react";
import { useState } from "react";
const CreateUser = ({createCallback})=>{
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    return(
        <div>
            <table>
                <tr align="right">
                    <td>
                        <label>
                            Name:
                            <input type="text" name="name" id="name" onChange={event => setName(event.target.value)}/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Id:
                            <input type="number" name="id" id="id" onChange={event => setId(event.target.value)}/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Dept:
                            <input type="text" dept="dept" id="dept" onChange={event => setDept(event.target.value)}/>
                        </label>
                    </td>
                </tr>
            </table>
            <button onClick={()=>createCallback(id,name,dept)}>Create</button>
        </div>
    );
}

export default CreateUser;