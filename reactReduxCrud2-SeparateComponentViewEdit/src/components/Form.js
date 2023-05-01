import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserData } from '../app/UserSlice';

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    unid: '',
    firstname: '',
    lastname: '',
    email: '',
    stateSelect:'',
    xender: '',
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
                  className='idInput form-control mt-2 '
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
            <div className='form-group name-section-main'>
              <div>
                <label
                  className='nameLabel mt-3'
                  htmlFor='formGroupExampleInput'
                >
                  First Name
                </label>
                <input
                  onChange={handleFormChange}
                  value={formData.firstname}
                  name='firstname'
                  type='text'
                  className='form-control mt-2  form-male-input'
                  id='formGroupExampleInput'
                  placeholder='First Name'
                />
              </div>
              <div>
                <label
                  className='nameLabel mt-3'
                  htmlFor='formGroupExampleInput'
                >
                  Last Name
                </label>
                <input
                  onChange={handleFormChange}
                  value={formData.lastname}
                  name='lastname'
                  type='text'
                  className='form-control mt-2   form-female-input'
                  id='formGroupExampleInput'
                  placeholder='Last Name'
                />
              </div>
            </div>
            <div className='form-group'>
              <label
                className='locationLabel mt-3'
                htmlFor='formGroupExampleInput2'
              >
                Email
              </label>
              <input
                onChange={handleFormChange}
                value={formData.email}
                name='email'
                type='text'
                className='form-control mt-2 '
                id='formGroupExampleInput2'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label className='col-md-4 stateLabel'>State</label>
              <select
                name='stateSelect'
                className='state-select'
                onChange={handleFormChange}
                value={formData.stateSelect}
              >
                <option className='select-your-state'>
                  ---Please select your state---
                </option>
                <option value='Gujarat'>Gujarat</option>
                <option value='Maharashtra'>Maharashtra</option>
                <option value='Rajasthan'>Rajasthan</option>
                <option value='Goa'>Goa</option>
                <option value='Kerala'>Kerala</option>
              </select>
            </div>
            <label className='statusLabel mt-2' htmlFor=''>
              Xender
            </label>
            <div className='RadioButtons' onChange={handleFormChange}>
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='xender'
                  className='form-check-input '
                  type='radio'
                  id='male'
                  value='Male'
                />
                <label className='form-check-label' htmlFor='male'>
                  Male
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  name='xender'
                  className='form-check-input'
                  type='radio'
                  id='female'
                  value='Female'
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
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
