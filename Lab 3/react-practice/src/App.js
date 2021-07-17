import './App.css';
import UserList from './components/UserList';

function App() {
  const users=[
    { id:"1", name:"Fatah", dept:"CIS"},
    { id:"1", name:"Fatah", dept:"CIS"},
    { id:"1", name:"Fatah", dept:"CIS"},
    { id:"1", name:"Fatah", dept:"CIS"}
  ];
  return (
    <div>
      <UserList {...users}/>
    </div>
  );
}

export default App;
