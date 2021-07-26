import './User.css'
const User=({name,id,dept,deleteCallback,editCallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Dept: {dept}</p>
            <button onClick={()=>deleteCallback(id)}>Delete</button>
            <button onClick={()=>document.getElementById('EditBox').innerHTML=editCallback(id)}>Edit</button>
            <div id='EditBox'></div>
        </div>
    );
}
export default User;