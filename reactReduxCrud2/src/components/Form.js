import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUserData, editUserData } from '../app/UserSlice';

export default function Form(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const [formData, setFormData] = useState({
    unid: '',
    firstname: '',
    lastname: '',
    email: '',
    stateSelect: '',
    gender: '',
  });
  const { isForView, isForEdit } = props;
  
  const handleFormChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  
  const handleSubmit = () => {
    dispatch(addUserData(formData));
    navigate('/');
  };
  // View the Data-----------------------------------------------------------------------------------------------
  const user = useSelector((state) =>
    state.data.find((user) => user.unid === param.id)
  );
  
  useEffect(() => {
    if (param.id && user) {
      setFormData(user);
    }
  }, [param.id, user]);
  // Edit the Data-----------------------------------------------------------------------------------------------
  const handleUpdate = () => {
    dispatch(editUserData(formData));
    navigate('/');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isForEdit && !isForView) handleSubmit();
    else if (isForEdit) handleUpdate();
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
                  value={formData.unid}
                  onChange={handleFormChange}
                  disabled={isForEdit || isForView}
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
                  disabled={isForView}
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
                  disabled={isForView}
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
                disabled={isForView}
                name='email'
                type='text'
                className='form-control mt-2 '
                id='formGroupExampleInput2'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label className='col-md-4 stateLabel mt-3'>State</label>
              <select
                name='stateSelect'
                className='state-select'
                onChange={handleFormChange}
                value={formData.stateSelect}
                disabled={isForView}
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
            <label className='statusLabel mt-3' htmlFor=''>
              Gender
            </label>
            <div className='RadioButtons' onChange={handleFormChange}>
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='gender'
                  className='form-check-input '
                  type='radio'
                  id='male'
                  value='Male'
                  disabled={isForView}
                  readOnly
                  checked={formData.gender === 'Male'}
                />
                <label className='form-check-label' htmlFor='male'>
                  Male
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  name='gender'
                  className='form-check-input'
                  type='radio'
                  id='female'
                  value='Female'
                  disabled={isForView}
                  readOnly
                  checked={formData.gender === 'Female'}
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
                </label>
              </div>
            </div>
            <div className='d-flex  text-light '>
              {!isForView && (
                <div className='mt-3 col-lg-12 col-md-12 col-12'>
                  <button className='btn btn-primary submit-btn-form'>
                    {isForEdit && !isForView ? 'Update' : 'Submit'}
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
