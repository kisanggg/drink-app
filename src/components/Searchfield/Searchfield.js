import React, { useRef } from 'react'

const Searchfield = (props) => {
    const SearchRef=useRef();
    const handleSearch=()=>{
        let value=SearchRef.current.value;
        props?.onSearchInitiate(value)
    }
  return (
    <div>
      <input ref={SearchRef}/>
      <button onClick={()=>handleSearch()}></button>
    </div>
  )
}

export default Searchfield
