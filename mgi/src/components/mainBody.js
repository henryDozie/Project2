import React from 'react';
import { findGames } from './loadAPI';

const MainBody = (props) => {
  return (
    <form>
      <input
        type="text" name="textarea"
        onChange={props.handleChange}
        placeholder="Find a GameInfo"
      />
      <input t
        type="submit"
        value="submit game"
        id="gameSearchSubmit" />
    </form>
  )
}          
  
export default MainBody
