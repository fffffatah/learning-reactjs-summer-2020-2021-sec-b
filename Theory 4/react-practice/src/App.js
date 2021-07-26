import './App.css';
import UserList from './components/UserList';
import {users} from './UserData';
import {useState} from 'react';
import EditUser from './components/EditUser';

function App() {
  const [myuser, setUsers] = useState(users);
  const deleteCallback = (id)=>{
    const data = myuser.filter((user)=>user.id !== id);
    return setUsers(data);
  }
  const editCallback = (id)=>{
    return EditUser(id);
  }
  return (
    <div>
      <UserList list={myuser} deletecallback={deleteCallback} editcallback={editCallback}/>
    </div>
  );
}

export default App;
