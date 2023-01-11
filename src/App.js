import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AddUpdate from './components/AddUpdate';
import Books from './components/Books';
import EditBooks from './components/EditBooks';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<SignupForm/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/addbooks' element={<AddUpdate/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/editbooks/:id' element={<EditBooks/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
