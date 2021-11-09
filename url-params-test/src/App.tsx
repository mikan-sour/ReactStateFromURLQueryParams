import React from 'react';
import { 
  BrowserRouter as Router, Link,
  useLocation, useHistory } from "react-router-dom";
import './App.css';

// to get the url param values
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

interface Params {
  text?:string
  dateFrom?:string,
  dateTo?:string,
  countries?:string[],
  areas?:string[],
  isLimited?:boolean,
  categories?:string[]
}

type ParamKey = 'text'|'dateFrom'|'dateTo'|'countries'|'areas'|'isLimited'|'categories'

const BusinessLogic = () => {
  const [ searchParams, setSearchParams ] = React.useState<Params>({});
  const [ toBeSearched, setToBeSearched] = React.useState<Params>({});

  const intialURLParams = useQuery();
  const history = useHistory();

  React.useEffect(()=>{
    try{
      const unparsed = intialURLParams.get('query')
      if(!unparsed) return 
      const parsedToString = decodeURIComponent(unparsed);
      setSearchParams(JSON.parse(parsedToString));
    }catch(e){
      alert(`Error: ${e}`);
      console.error(e);
      return;
    }
  },[intialURLParams])

  const updateToBeSearched = (updateType:ParamKey,updateValue:any):void => {
    let newValue:Params = {}
    newValue[updateType] = updateValue
    setToBeSearched({...toBeSearched,...newValue});
  }
;
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const paramsEncoded = encodeURIComponent(JSON.stringify(toBeSearched));
    console.log(paramsEncoded);
    history.push(`?query=${paramsEncoded}`);
  }

  return (
    <div className='App'>
      <ul>
        {Object.keys(searchParams).map((key:string,i:number)=>(
          <li key={i}>{`${key} | ${searchParams[key as ParamKey]}`}</li>
        ))}
      </ul>
      <hr/>
      <div>
        <form onSubmit={()=>console.log('s')}>
          <input type='string' placeholder='text' onChange={(e)=>updateToBeSearched('text',e.currentTarget.value)}/>
          <input type='string' placeholder='date from' onChange={(e)=>updateToBeSearched('dateFrom',e.currentTarget.value)}/>
          <input type='string' placeholder='date to' onChange={(e)=>updateToBeSearched('dateTo',e.currentTarget.value)}/>
          <select onChange={(e)=>updateToBeSearched('countries',e.currentTarget.value)}>
            <option>Brasil</option>
            <option>Uraguay</option>
            <option>Jamaica</option>
          </select>
          <button onClick={handleSubmit}>Sub</button>
        </form>
      </div>
    </div>
  )
}

function App() {

  return (
      <Router>
        <Link to='/'>
          <BusinessLogic/>
        </Link>
      </Router>
  );
}

export default App;
