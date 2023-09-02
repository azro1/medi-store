import { useParams, useHistory, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import useFetch from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

// import projectFirestore object from firebase config file
import { projectFirestore } from '../../firebase/config'

// styles
import './Medication.css'

const Medication = () => {
const { id } = useParams()
const [medication, setMedication] = useState(null)
const [isPending, setIsPending] = useState(false)
const [error, setError] = useState(false)
// const { deleteData, data } = useFetch(`http://localhost:3000/medications/${id}`, "DELETE")
const history = useHistory()
const { mode } = useTheme()

// delete medication
const handleDelete = async () => {
  // deleteData()
}

// we use useEffect to connect to firestore
useEffect(() => {
setIsPending(true)
// when we want a single document from the collection we need to get a reference to that single document and to do that we use the doc method which accepts an argument whcih is the id of the document that we want - once we have that reference we can then use the get method to fetch that document
projectFirestore.collection("medications").doc(id).get().then((doc) => {
  // the document that is return has an exists property which is a boolean and we need to check if the document exists so that if a user tries to access a document that doesn't exist we can display an error letting them know that
  if (doc.exists) {
    setIsPending(false)
    setMedication(doc.data())
  } else {
    setIsPending(false)
    setError("Sorry! That medication doesn't exist...")
  }
})
}, [id])

useEffect(() => {
  // if (data) {
  //    history.push("/")
  // }
  if (error) {
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }
}, [error, history])

  return (
    <div className={`medication ${mode}`}>
        {isPending && <p className={`loading ${mode}`}>please wait...</p>}
        {error && <p style={{position: "relative", top: "1rem"}} className={`error ${mode}`}>{error}</p>}
        {medication && (
        <>
        <h2 className={`page-title ${mode}`}>{medication.name}</h2>
  
        <div className="info">
            <div className="dates">
              <p>Start Date: <span>{medication.startDate}</span></p>
              <p>End Date: <span>{medication.endDate}</span></p>
            </div>

            <section>
              <p>Dosage: <span>{medication.dosage}</span></p>
              <p>Type: <span>{medication.dosageForm}</span></p>
              <p>To be taken: <span>{medication.frequency}</span></p>
              <p>Administration: <span>{medication.adminRoute}</span></p>
            </section>

            <div className="instructions">
              <p>Instructions: <span>{medication.instructions}</span></p>
            </div>

            <section>
              <p>Prescribing Dr: <span>{medication.doctorName}</span></p>
              <p>Email: <span>{medication.doctorEmail}</span></p>
              <p>Pharmacy: <span>{medication.pharmacyName}</span></p> 
              <p>Email: <span>{medication.pharmacyEmail}</span></p>
            </section>

            <section>
              <p>Contains: {medication.contains.map((ingredient) =>(
                    <span key={ingredient}>
                        {ingredient}
                    </span>
                ))}
                </p> 
              <p>Side Effects: <span>{medication.sideEffects}</span></p>
              <p>Advice: <span>{medication.warning}</span></p>
            </section>
          </div>
          <div className="buttons">
              <button className="delete" onClick={handleDelete} >Delete</button> 
              <Link className="editBtn" to={`/edit/${id}`} >Edit</Link>
          </div>
        </>
       )}
    </div>
  )
}

export default Medication