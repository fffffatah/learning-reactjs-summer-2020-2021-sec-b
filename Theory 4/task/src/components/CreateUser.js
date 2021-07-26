import React from "react";
const CreateUser = ({createCallback})=>{
    return(
        <div>
            <table>
                <tr align="right">
                    <td>
                        <label>
                            Name:
                            <input type="text" name="name" id="name"/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Id:
                            <input type="number" name="id" id="id"/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Dept:
                            <input type="text" dept="dept" id="dept"/>
                        </label>
                    </td>
                </tr>
            </table>
            <button onClick={()=>createCallback()}>Create</button>
        </div>
    );
}

export default CreateUser;