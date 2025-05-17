

function Greeting(props) {

    return (

         props.isLoggedIn ? <p className="loggedIn">"{props.name}" logged in Successfully</p>
                                    :
                            <p className="notLoggedIn">"{props.name}" is not logged in</p>

    )
}

export default Greeting