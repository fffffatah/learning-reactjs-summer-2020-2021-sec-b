function EditUser(id) {
    return(
        <div>
            <p>{id}</p>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="dept" placeholder="Department"/>
        </div> 
    ); 
}

export default EditUser;