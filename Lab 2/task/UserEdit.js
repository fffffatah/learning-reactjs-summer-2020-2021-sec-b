export default function UserEdit(id, name, dept){
	return (
		`<table border=1>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPT</th>
            </tr>
            <td>${id}</td>
            <td><input type='text' placeholder='name' value='${name}'></td>
						<td><input type='text' placeholder='name' value='${dept}'></td>
        </table>`
	);
}
