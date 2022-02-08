import React from 'react';
import { Params, ParamKey } from '../../types';

interface IQPViewProps {
    searchParams?:Params,
    updateToBeSearched?: (updateType: ParamKey, updateValue: any) => void,
    handleSubmit?:(e: React.FormEvent) => void
}

const QueryParamsView:React.FC<IQPViewProps> = ({searchParams,updateToBeSearched,handleSubmit}) => {
    if(!searchParams || !updateToBeSearched || !handleSubmit) {
        throw new Error("missing props");
        return <>error occurred...</>
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

export default QueryParamsView
