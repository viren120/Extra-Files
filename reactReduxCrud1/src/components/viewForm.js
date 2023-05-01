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
                  className='idInput form-control mt-2 rounded-pill'
                  id='uid'
                  name='unid'
                  value={user.unid}
                  placeholder='Id'
                  readOnly
                />
              </div>
            </div>
            <div className='form-group'>
              <label className='nameLabel mt-3' htmlFor='formGroupExampleInput'>
                Name
              </label>
              <input
                value={user.name}
                name='name'
                type='text'
                className='form-control mt-2 rounded-pill'
                id='formGroupExampleInput'
                placeholder='Name'
                readOnly
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
                value={user.location}
                name='location'
                type='text'
                className='form-control mt-2 rounded-pill'
                id='formGroupExampleInput2'
                placeholder='Location'
                readOnly
              />
            </div>
            <label className='statusLabel mt-2' htmlFor=''>
              Status
            </label>
            <div className='RadioButtons'>
              <div className='form-check form-check-inline mt-2'>
                <input
                  name='status'
                  className='form-check-input'
                  type='radio'
                  id='active'
                  value='Active'
                  defaultChecked={user.status === 'Active'}
                  disabled
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
                  disabled
                />
                <label className='form-check-label' htmlFor='inactive'>
                  Inactive
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
