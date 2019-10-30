import React,{Link} from 'react';
import Search from './Search'; 


const Navbar =() => {
	return(
 <div className="navbar">
 
 
 
  < Link to ="/" className="active">Home</Link>
    <div className="dropdown">
    <button className="dropbtn">Categories 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
	
      <a href ="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
<div className="dropdown">  
	  <button className="dropbtn">Region
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a> 
    </div>
	</div>
	<div className="dropdown">
	 <button className="dropbtn">Indegrients
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a> 
    </div>
	</div>
	<Search />
  </div>
  
);
}
export default Navbar;