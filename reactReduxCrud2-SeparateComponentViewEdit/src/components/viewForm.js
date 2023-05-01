import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ViewForm() {
  const param = useParams();

  const user = useSelector((state) =>
    state.data.find((user) => user.unid === param.id)
  );

  const navigate = useNavigate();
  function formBtnOpenTable() {
    navigate('/');
  }

  return (
    <>
      <div className='container main mt-5'>
        <div>
          <form className='container'>
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
                  value={user.firstname}
                  name='firstname'
                  type='text'
                  className='form-control mt-2 '
                  id='formGroupExampleInput'
                  placeholder='First Name'
                  readOnly
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
                  value={user.lastname}
                  name='lastname'
                  type='text'
                  className='form-control mt-2 '
                  id='formGroupExampleInput'
                  placeholder='LastName'
                  readOnly
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
                value={user.email}
                name='email'
                type='text'
                className='form-control mt-2 '
                id='formGroupExampleInput2'
                placeholder='email'
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='col-md-4 stateLabel'>State</label>
              <select
                name='stateSelect'
                className='state-select'
                value={user.stateSelect}
                disabled
                readOnly
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
            <div className='RadioButtons'>
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='xender'
                  className='form-check-input'
                  type='radio'
                  id='male'
                  value='Male'
                  defaultChecked={user.xender === 'Male'}
                  disabled
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
                  disabled
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
