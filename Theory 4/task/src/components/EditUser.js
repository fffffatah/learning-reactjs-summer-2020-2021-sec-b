import {useParams} from 'react-router-dom';
const EditUser = ()=>{
    const {id:eid} = useParams();
    return(
        <div>
            <table>
                <tr align="right">
                    <td>
                        <label>
                            Name:
                            <input type="text"/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Id:
                            <input type="number" value={eid}/>
                        </label>
                    </td>
                </tr>
                <tr align="right">
                    <td>
                        <label>
                            Dept:
                            <input type="text"/>
                        </label>
                    </td>
                </tr>
            </table>
            <button>Edit</button>
        </div>
    );
}

export default EditUser;