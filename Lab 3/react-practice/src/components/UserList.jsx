import User from "./User"

const UserList=(list)=>{
    return(
        <div>
        {
            list.map((user)=>{
                return <User {...user}/>
            })
        }
        </div>
    )
}

export default UserList;