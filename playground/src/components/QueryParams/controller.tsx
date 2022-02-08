import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks';
import { ParamKey, Params } from '../../types';

const QueryParamsController:React.FC =({children})=> {
    
    const [ searchParams, setSearchParams ] = useState<Params>({});
    const [ toBeSearched, setToBeSearched] = useState<Params>({});
    
    const intialURLParams = useQuery();
    const history = useHistory();
    
    useEffect(()=>{
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
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const paramsEncoded = encodeURIComponent(JSON.stringify(toBeSearched));
        console.log(paramsEncoded);
        history.push(`?query=${paramsEncoded}`);
    }

    return (
        <>
            {React.cloneElement(children as React.ReactElement,{ searchParams, updateToBeSearched, handleSubmit })}
        </>
    )
      
        
}

export default QueryParamsController;
