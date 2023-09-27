import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';
import { useEdit } from '../../hooks/useEdit';

// styles
import './Edit.css'

const Edit = () => {
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [dosageForm, setDosageForm] = useState('');
    const [frequency, setFrequency] = useState('');
    const [adminRoute, setAdminRoute] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [doctorEmail, setDoctorEmail] = useState('');
    const [pharmacyName, setPharmacyName] = useState('');
    const [pharmacyEmail, setPharmacyEmail] = useState('');
    const [instructions, setInstructions] = useState('');
    const [storage, setStorage] = useState('');
    const [sideEffects, setSideEffects] = useState('');
    const [warning, setWarning] = useState('');
  
    const [newIngredient, setNewIngredient] = useState('');
    const [contains, setContains] = useState([]);
    const ingredientInput = useRef(null);
    const { id } = useParams()

    const { mode } = useTheme()
    const { data, isPending, error, update } = useEdit(id) // get medication

    useEffect(() => {
      if (data) {
        setName(data.name);
        setDosage(data.dosage);
        setDosageForm(data.dosageForm);
        setFrequency(data.frequency);
        setAdminRoute(data.adminRoute);
        setStartDate(data.startDate);
        setEndDate(data.endDate);
        setDoctorName(data.doctorName);
        setDoctorEmail(data.doctorEmail);
        setPharmacyName(data.pharmacyName);
        setPharmacyEmail(data.pharmacyEmail);
        setNewIngredient(data.contains);
        setContains(data.contains);
        setInstructions(data.instructions);
        setStorage(data.storage);
        setSideEffects(data.sideEffects);
        setWarning(data.warning);
      }
    }, [data]);

    // form submit function
    const handleSubmit = (e) => {
      e.preventDefault()

      const doc = {
          name: name,
          dosage: dosage,
          dosageForm: dosageForm,
          frequency: frequency,
          adminRoute: adminRoute,
          startDate: startDate,
          endDate: endDate,
          doctorName: doctorName,
          doctorEmail: doctorEmail,
          pharmacyName: pharmacyName,
          pharmacyEmail: pharmacyEmail,
          contains: contains,
          instructions: instructions,
          storage: storage,
          sideEffects: sideEffects,
          warning: warning
        }

        // update medication
        update(doc)
    }

    // add ingredients function
    const handleAdd = (e) => {
      e.preventDefault();

        if (typeof newIngredient === 'string') {
          const ing = newIngredient.trim()

          if (ing && !contains.includes(ing)) {
            setContains((prevIngredients) => [...prevIngredients, ing]);
          }
          setNewIngredient('');
          ingredientInput.current.focus();
        } else {
          return -1
        }
    };

    // remove ingredients function
    const handleRemove = (e) => {
      e.preventDefault()
      setContains(contains.filter((ingredient, index) => {
        return index !== contains.length -1;
      }))
    }

    return (
      <form className={`edit-form ${mode}`} onSubmit={handleSubmit}>
        <h1 className={`page-title ${mode}`}>Edit Medication</h1>
        {error && <p className={`error ${mode}`}>{error}</p>}
        {isPending && <p className={`loading ${mode}`}>please wait...</p>}
        <div className='form-control'>
          <label>
            <span>Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Dosage:</span>
            <input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Type:</span>
            <input
              type="text"
              value={dosageForm}
              onChange={(e) => setDosageForm(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Frequency:</span>
            <input
              type="text"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Admin Route:</span>
            <input
              type="text"
              value={adminRoute}
              onChange={(e) => setAdminRoute(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Start:</span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </label>
          <label>
            <span>End:</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Doctor Name:</span>
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="email"
              value={doctorEmail}
              onChange={(e) => setDoctorEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Pharmacy Name:</span>
            <input
              type="text"
              value={pharmacyName}
              onChange={(e) => setPharmacyName(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="email"
              value={pharmacyEmail}
              onChange={(e) => setPharmacyEmail(e.target.value)}
              required
            />
          </label>
  
          <label>
            <span>Contains:</span>
            <div className='ingredients'>
              <input
                type="text"
                value={newIngredient}
                ref={ingredientInput}
                onChange={(e) => setNewIngredient(e.target.value)}
              />
              <button onClick={handleAdd} className='add-btn btn'>
                Add
              </button>
              <button onClick={handleRemove} className='delete-btn btn'>
                Delete
              </button>
            </div>
          </label>
  
          <p>
            Contains:{" "}
            {contains.map((ingredient) => (
              <em key={ingredient}>{ingredient}, </em>
            ))}
          </p>
  
          <label>
            <span>Instructions:</span>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Storage:</span>
            <input
              type="text"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Side Effects:</span>
            <input
              type="text"
              value={sideEffects}
              onChange={(e) => setSideEffects(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Advice:</span>
            <input
              type="text"
              value={warning}
              onChange={(e) => setWarning(e.target.value)}
              required
            />
          </label>
          <button className="add-btn btn">Add</button>
        </div>
      </form>
    )
  }
  
  export default Edit