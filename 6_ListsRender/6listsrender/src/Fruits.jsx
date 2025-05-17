
function Fruits(props) {

    // static
    let Fruits = [
        {id : 1 , name : "Apple", calories : 95}, 
        {id : 2 , name : "Mango", calories : 155}, 
        {id : 3 , name : "Peach", calories : 255}, 
        {id : 4 , name : "Melon", calories : 395}, 
        {id : 5 , name : "Kiwi", calories : 35}
    ];

    let lowCalFruits = Fruits.filter(fruits => fruits.calories < 100);
    lowCalFruits.sort((a, b) => a.calories - b.calories)

    let highCalFruits = Fruits.filter(fruits => fruits.calories > 100);
    highCalFruits.sort((a, b) => b.calories - a.calories)

    // dynamic
    let customItems = props.customList;


  return (
    
    <>
    
        <h1 className="heading">Static Items below</h1>


        <div className="listBox">

            <div className="List">
                    
                <ul>

                    { Fruits.map(fruits => <li key={fruits.id}> {fruits.name} has {fruits.calories} calories. </li>) }
                    </ul>
                    
                </div> 

        </div>
        

<       div className="listBox">
            
            <div className="List">
                            
                <ul>
                
                    { lowCalFruits.map(fruits => <li>{fruits.name} has {fruits.calories} calories.</li>) }                
                </ul>
                            
            </div>

        </div>
        



        <div className="listBox">
            
            <div className="List">
                            
                <ul>
                
                    { highCalFruits.map(fruits => <li>{fruits.name} has {fruits.calories} calories</li>) }
                
                </ul>
                            
            </div>

        </div>
        



        <h1 className="heading">Dynamic Items below</h1>


        <div className="listBox">

            <div className="customList">

                    <ul>
                                    
                        <p>Category : {props.category}</p>
                        {customItems.map(x => <li key={x.id}>{x.name} has {x.calories} calories.</li>)}
                    </ul>
                </div>

        </div>
    
        
            

    </>
    
  )
}

export default Fruits