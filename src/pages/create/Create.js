// styles
import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

import './Create.css';

const Create = () => {
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
  const history = useHistory()
  const { mode } = useTheme()

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {      
      name,
      dosage,
      dosageForm,
      frequency,
      adminRoute,
      startDate,
      endDate,
      doctorName,
      doctorEmail,
      pharmacyName,
      pharmacyEmail,
      contains,
      instructions,
      storage,
      sideEffects,
      warning
    }

    try {
      setIsPending(true)
      await projectFirestore.collection("medications").addc(doc)
      history.push("/")
    } catch(err) {
        setIsPending(false)
        setError("Sorry 😞 We can't add your medication right now...")
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !contains.includes(ing)) {
      setContains((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <form className={`medication-form ${mode}`} onSubmit={handleSubmit}>
      <h1 className={`page-title ${mode}`}>Add a new Medication</h1>
      {isPending && <p className={`loading ${mode}`}>please wait...</p>}
      {error && <p className={`error ${mode}`}>{error}</p>}
      <div className='form-control'>
        <label>
          <span>Name:</span>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Dosage:</span>
          <input
            type='text'
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Type:</span>
          <input
            type='text'
            value={dosageForm}
            onChange={(e) => setDosageForm(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Frequency:</span>
          <input
            type='text'
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Admin Route:</span>
          <input
            type='text'
            value={adminRoute}
            onChange={(e) => setAdminRoute(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Start:</span>
          <input
            type='date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>End:</span>
          <input
            type='date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Doctor Name:</span>
          <input
            type='text'
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type='email'
            value={doctorEmail}
            onChange={(e) => setDoctorEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Pharmacy Name:</span>
          <input
            type='text'
            value={pharmacyName}
            onChange={(e) => setPharmacyName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type='email'
            value={pharmacyEmail}
            onChange={(e) => setPharmacyEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              value={newIngredient}
              ref={ingredientInput}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button onClick={handleAdd} className='form-btn'>
              Add
            </button>
          </div>
        </label>

        <p>
          Current ingredients:{' '}
          {contains.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>
        <label>
          <span>Instructions:</span>
          <input
            type='text'
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Storage:</span>
          <input
            type='text'
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Side Effects:</span>
          <input
            type='text'
            value={sideEffects}
            onChange={(e) => setSideEffects(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Advice:</span>
          <input
            type='text'
            value={warning}
            onChange={(e) => setWarning(e.target.value)}
            required
          />
        </label>
        <button className='form-btn'>Add</button>
      </div>
    </form>
  );
};

export default Create;
