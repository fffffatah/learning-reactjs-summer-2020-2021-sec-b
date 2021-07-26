import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const [userlist, setUserList] = useState(users);
  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }
  const adduser = (id, name, dept)=>{
    const list = userlist.concat({id, name, dept});
    setUserList(list);
  }

  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser createCallback={adduser}/>
          </Route>
          <Route path='/edit/:id' children={<EditUser/>}></Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
