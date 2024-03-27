import React ,{useReducer, useState }  from 'react'





export default function TextAriya() {
  const [state , dispatch] = useReducer(reduce , {text : 'emter text'});

  function reduce(state, action) {
    switch (action.type) {
      case 'lower-case': {
        const lover = state.text.toLowerCase();
        return {
          text: lover
        };
      }
      case 'uper-case': {
        const lover = state.text.toUpperCase();
        return {
          text: lover
        };
      }
      case 'copy': {
        navigator.clipboard.writeText(state.text);
        alert('copied')
        return{
          text: state.text
        }
      }
      case 'clear': {
        return {
          text: ""
        };
      }
      case 'remove': {
        const lover = state.text.replace(/\s{2,}/g, "");
        return {
          text: lover
        };
      }
      case 'change':{
        return {text: action.value}
      }
      default: {
        return state;
      }
    }
  }
  

  return (
    <div className='container'>
    <div className="mb-3">
        <h2>text ariya</h2>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={state.text} onChange={(e) => dispatch({type:'change' , value :e.target.value})}></textarea>
    </div>
        <button className='btn btn-primary' style={{margin:'10px'}} onClick={()=> dispatch({type:'uper-case'})}>convert to upercase</button>
        <button className='btn btn-primary' style={{margin:'10px'}} onClick={()=> dispatch({type:'lower-case'})}>convert to lovercase</button>
        <button className='btn btn-primary' style={{margin:'10px'}} onClick={()=> dispatch({type:'clear'})}>Clear text</button>
        <button className='btn btn-primary' style={{margin:'10px'}} onClick={()=> dispatch({type:'copy'})}>Copy text</button>
        <button className='btn btn-primary' style={{margin:'10px'}} onClick={()=> dispatch({type:'remove'})}>Remove extra space</button>

        <div>
          <h2>your text count</h2>
          <p>{state.text.split(' ').length} words and {state.text.length} character</p>
        </div>
        <div>
          <h2>Privio</h2>
          <p>{state.text}</p>
        </div>
    </div>

  )
}
