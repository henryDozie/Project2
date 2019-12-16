import React from 'react';

const MainBody = (props) => {
  return (
    <form>
      <input
        type="text" name="0"
        onChange={props.handleChange}
        placeholder="Find a GameInfo"
      />
    </form>
  )
}          
  
export default MainBody
