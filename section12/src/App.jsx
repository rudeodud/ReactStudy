import './App.css';
import { useReducer, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  },
];


function reducer(state, action) {
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state];
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);


  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data:{
        i: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };


  return (
    <>
    <button onClick={() => {
      onCreate(new Date().getTime(), 1, 'Hello')
    }}>일기 추가 테스트</button>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/diary/:id' element={<Diary />}/>
      <Route path='/edit/:id' element={<Edit />}/>
      <Route path='*' element={<Notfound />}/>
    </Routes>
    </>
  )
}

export default App
