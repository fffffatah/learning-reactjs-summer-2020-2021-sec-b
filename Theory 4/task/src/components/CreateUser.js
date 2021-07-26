
const CreateUser = ()=>{
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
                            <input type="number"/>
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
            <button>Delete</button>
        </div>
    );
}

export default CreateUser;