import Profile from './ProfilePic.jpg'
function App() {


  let handle1 = () => console.log("clicked me bro");


  let handle2 = (name) => () => console.log(`${name} clicked me bro`);
  

  let count = 0;
  let handle3 = (name) => {

      return count < 5? 
          (console.log(`${name} clicked me ${count} times.`) & ++count)
          :
          console.log(`${name} stop clicking me`);
                 
  }


  let handle4 = (event) => {
    
    if (count % 2 == 0){
    
      event.target.textContent = "OUCH!!!";
      count++;
    }
    else{

      event.target.textContent = "WOW!!!"
      count++;
    }
  }

  let handle5count = 0;
  let handle5 = (e) => {

      if(handle5count % 2 == 0){
        
        e.target.innerHTML = `<img src="${Profile}" style="width:50px; height:50px;"/>`;
        handle5count++;
    }
    else{

      e.target.innerHTML = `<p> Img Here </p>`;
      handle5count++;
    }
  }
  return (

    <>
  
        <button className="border-2 rounded-2xl p-2 m-2 cursor-pointer" onClick={handle2("Ezio")}>
          
          Clicked me
        </button>    


        <button className="border-2 rounded-2xl p-2 m-2 cursor-pointer" onClick={() => handle3("Chad")}>

          Count clicker
        </button>
        

        <button className="border-2 rounded-2xl p-2 m-2 cursor-pointer" onClick={(event) => handle4(event)}>

          Click to Happen
        </button>


        <button className="border-2 rounded-2xl p-2 m-2 cursor-pointer" onClick={(e) => handle5(e)}>

          Img Here
        </button>
        
    </>

  )
}

export default App
