import './User.css'
const User=({name,id,dept})=>{
    return(
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Dept: {dept}</p>
        </div>
    );
}
export default User;