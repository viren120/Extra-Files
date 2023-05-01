import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserData } from '../app/UserSlice';

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    unid: '',
    name: '',
    location: '',
    status: '',
  });

  const handleFormChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserData(formData));
    navigate('/');
  };

  function formBtnOpenTable() {
    navigate('/');
  }

  return (
    <>
      <div className='container main mt-5'>
        <div>
          <form className='container' onSubmit={handleFormSubmit}>
            <button
              type='button'
              className='btnCloseForm'
              onClick={formBtnOpenTable}
            >
              X
            </button>
            <div className='form-group'>
              <label htmlFor='uid' className='idLabel mt-5 '>
                Id
              </label>
              <div className='col-sm-8'>
                <input
                  type='number'
                  className='idInput form-control mt-2 rounded-pill'
                  id='uid'
                  name='unid'
                  value={formData.uniq}
                  onChange={handleFormChange}
                  placeholder='Id'
                  required
                  autoFocus
                />
              </div>
            </div>
            <div className='form-group'>
              <label className='nameLabel mt-3' htmlFor='formGroupExampleInput'>
                Name
              </label>
              <input
                onChange={handleFormChange}
                value={formData.name}
                name='name'
                type='text'
                className='form-control mt-2 rounded-pill'
                id='formGroupExampleInput'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label
                className='locationLabel mt-3'
                htmlFor='formGroupExampleInput2'
              >
                Location
              </label>
              <input
                onChange={handleFormChange}
                value={formData.location}
                name='location'
                type='text'
                className='form-control mt-2 rounded-pill'
                id='formGroupExampleInput2'
                placeholder='Location'
              />
            </div>
            <label className='statusLabel mt-2' htmlFor=''>
              Status
            </label>
            <div className='RadioButtons' onChange={handleFormChange}>
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='status'
                  className='form-check-input'
                  type='radio'
                  id='active'
                  value='Active'
                />
                <label className='form-check-label' htmlFor='active'>
                  Active
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  name='status'
                  className='form-check-input'
                  type='radio'
                  id='inactive'
                  value='Inactive'
                />
                <label className='form-check-label' htmlFor='inactive'>
                  Inactive
                </label>
              </div>
            </div>
            <div className=' px-5 d-flex justify-content-end text-light'>
              <button className='submit text-light' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
