// import PropTypes from 'prop-types'    it wasn't listed anywhere inside nodeModules


function Student(Props) {
  return (

    <div className='Card'>

        <p>Name : {Props.name}</p>
        <p>Age : {Props.age}</p>
        <p>Student : {Props.isStudent}</p>
        
    </div>
  )
}

// doesn't works, donno WHY EITHER??

// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool
// }

// doesn't works, donno WHY EITHER??

// Student.defaultProps = {
//   name: "Not defined",
//   age: 0,
//   isStudent: false
// }

export default Student