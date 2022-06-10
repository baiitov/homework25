
import './App.css';
import Login from './components/Login';
import Header from './UI/Header';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { actionsLogin } from './store/reducers/uiLogin';

function App() {
  const dispatch = useDispatch()
  const {loadint, isShow} = useSelector((state)=> state.uiSlice)
  const newData = localStorage.getItem('add')
  if(newData ==='1'){
    dispatch(actionsLogin.ShotHandler())
  }
console.log(isShow);
  return (
    <div className="App">
    { isShow && <Header/>}
    {!isShow  &&<Login/>}
    </div>
  );
}

export default App;
