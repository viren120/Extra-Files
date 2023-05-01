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

  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(user.location);
  const [status, setStatus] = useState(user.status);

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUserData({
        unid: param.id,
        name,
        location,
        status,
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
                  className='idInput form-control mt-2 rounded-pill'
                  id='uid'
                  name='unid'
                  value={user.unid}
                  placeholder='Id'
                  disabled
                  readOnly
                />
              </div>
            </div>
            <div className='form-group'>
              <label className='nameLabel mt-3' htmlFor='formGroupExampleInput'>
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
            <div
              className='RadioButtons'
              onChange={(e) => setStatus(e.target.value)}
            >
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='status'
                  className='form-check-input'
                  type='radio'
                  id='active'
                  value='Active'
                  defaultChecked={user.status === 'Active'}
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
                  defaultChecked={user.status === 'Inactive'}
                />
                <label className='form-check-label' htmlFor='inactive'>
                  Inactive
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
