import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Article from './Article';
import Nav from './Nav';
import Control from './Control';
import CreateCont from './CreateCont';
import UpdateCont from './UpdateCont';

function App() {
  const [title, setTitle] = useState('WEB');
  const [sub, setSub] = useState('World Wide Web');  
  const [subject, setSubject] = useState({
    // title : 'WEB', sub : 'World Wide Web'
    title, sub
  });

  const [mode, setMode] = useState('read');
  const [welcome, setWelcome] = useState({
    title : 'Welcome', desc : 'Welcome React'
  });
  let _title, _desc = null;
  const [key, setKey] = useState(null);
  const [contents, setContents] = useState([
    {id : 0, title : 'HTML', desc : 'this is mark-up language'},
    {id : 1, title : 'CSS', desc : 'this is cascading style sheet'},
    {id : 2, title : 'Javascript', desc : 'this is interpret language'}
  ])
  let _article = null;
  const getReadContents = () => {
    let data;
    for(let i = 0; i<contents.length; i++){
      if(key === contents[i].title){
        data = contents[i];
        _title = contents[i].title;
        _desc = contents[i].desc;
        break;
      }
    }
    // console.log(data, _title, _desc);
    return data;
  }

  if(mode === 'welcome'){
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <Article title={_title} desc={_desc}/>
  }
  else if(mode === 'read'){
    let i = 0;
    while(i < contents.length){
      if(key === contents[i].title){
        _title = contents[i].title;
        _desc = contents[i].desc;
        break;
      }
      i++;
    }
    _article = <Article title={_title} desc={_desc}/>
  }
  else if(mode === 'create'){
    _article = <CreateCont 
    onSubmit = {(_title, _desc) => {
      console.log(_title, _desc);
      setContents([...contents, {title : _title, desc : _desc}]);
    }}
    />
  }
  else if(mode === 'update'){
    let _content = getReadContents();
    _article = <UpdateCont 
      data={_content}
      onSubmit={(_title, _desc) => {
        _content.title = _title;
        _content.desc = _desc;
        console.log(_content.title);
      }}
    />
  }

  return(
    <div>
      <Header 
        title={subject.title}
        sub={subject.sub}
        onChangePage={()=>{
          setMode('welcome');
        }}
      />
      <Nav 
        data={contents}
        onChangePage={(key)=>{
          setMode('read');
          setKey(key);
        }}
      />
      <Control 
        onChangeMode={(mode) => {
          setMode(mode);
          if(mode === 'delete'){
            let data = getReadContents();
            let _content = Array.from(contents);
            if(window.confirm('Are you sure to delete?')){
              _content.splice(data.id, 1);
              setContents(_content);
              setMode('welcome');
            }
          }
          // console.log(mode);
        }}
      />
      {_article}
    </div>
  );
}

export default App;
