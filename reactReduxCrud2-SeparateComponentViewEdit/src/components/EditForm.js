import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../app/UserSlice';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const user = useSelector((state) =>
    state.data.find((user) => user.unid === param.id)
  );

  function formBtnOpenTable() {
    navigate('/');
  }

  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [email, setemail] = useState(user.email);
  const[stateSelect, setStateSelect] = useState(user.stateSelect);
  const [xender, setXender] = useState(user.xender);

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUserData({
        unid: param.id,
        firstname,
        lastname,
        email,
        stateSelect,
        xender,
      })
    );
    navigate('/');
  };

  return (
    <>
      <div className='container main mt-5'>
        <div>
          <form className='container' onSubmit={handleEditFormSubmit}>
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
                  value={user.unid}
                  placeholder='Id'
                  disabled
                  readOnly
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
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  name='firstname'
                  type='text'
                  className='form-control mt-2 '
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
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  name='lastname'
                  type='text'
                  className='form-control mt-2 '
                  id='formGroupExampleInput'
                  placeholder='Last Name'
                />
              </div>
            </div>
            <div className='form-group'>
              <label
                className='emailLabel mt-3'
                htmlFor='formGroupExampleInput2'
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                name='email'
                type='text'
                className='form-control mt-2 '
                id='formGroupExampleInput2'
                placeholder='email'
              />
            </div>
            <div className='form-group'>
              <label className='col-md-4 stateLabel'>State</label>
              <select
                name='stateSelect'
                className='state-select'
                value={stateSelect}
                onChange={(e) => setStateSelect(e.target.value)}
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
            <div
              className='RadioButtons'
              onChange={(e) => setXender(e.target.value)}
            >
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='xender'
                  className='form-check-input'
                  type='radio'
                  id='male'
                  value='Male'
                  defaultChecked={user.xender === 'Male'}
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
                  defaultChecked={user.xender === 'Female'}
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
                </label>
              </div>
            </div>
            <div className=' px-5 d-flex justify-content-end text-light'>
              <button className='submit text-light' type='submit'>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
