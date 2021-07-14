import Button from "./Button.js";
import UserEdit from "./UserEdit.js";

export default function User({id, name, dept}){
	const editClick = (id)=>{
		//console.log(`edit buttion in action: ${id}`);
		//return `alert('edit id:${id}')`;
	}

	const deleteClick = (id)=>{
		//console.log('Delete buttion in action: '+id);
		//return `alert('delete id:${id}')`;
		return `if(confirm('Delete User With Id ${id} ?')){
			alert('deleted');
		}`;
	}

	return (
		`<tr>
			<td>${id}</td>
			<td>${name}</td>
			<td>${dept}</td>
			<td>
				${ Button('Edit', editClick, id)} | ${ Button('Delete', deleteClick, id)}
			</td>
		</tr>
		<div id='editBox'>

    </div>`
	);
}
