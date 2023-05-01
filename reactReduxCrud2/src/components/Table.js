import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {showViewData ,editUserData, deleteUserData } from '../app/UserSlice';

export default function Table() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setgenderFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleAddDataClick = () => {
    navigate('/form');
  };
  // Delete Data-------------------------------------------------------------------------------------------------
  const handleDeleteData = (unid) => {
    dispatch(deleteUserData({ unid }));
  };
  // search Data-------------------------------------------------------------------------------------------------
  const inputRef = useRef(null);

  const searchUserData = () => {
    setSearchQuery(inputRef.current.value);
  };
  // Filter Data-------------------------------------------------------------------------------------------------
  const data = useSelector((state) => state.data);
  const filteredData = data
    .filter(
      (item) =>
        item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (item) =>
        genderFilter === null ||
        item.gender.toLowerCase() === genderFilter.toLowerCase()
    );
  const filterUser = (e) => {
    setgenderFilter(e.target.value);
  };
  // pagination functions ---------------------------------------------------------------------------------------
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className='mt-5 '>
        <div className='Wdt container'>
          <div className='add_btn mt-1 mb-2 d-flex justify-content-around'>
            <button
              className='btn btn-primary'
              onClick={handleAddDataClick}
              autoFocus
            >
              Add Data
            </button>
            <form className='form d-flex ' onSubmit={(e) => e.preventDefault()}>
              <input
                className='form-control'
                id='search'
                type='search'
                name='search'
                placeholder='Search data by Name and Location'
                aria-label='For Search Data'
                ref={inputRef}
                onChange={searchUserData}
              />
            </form>
            <div className='tablestatus'>
              <div className='form-check'>
                <input
                  className='form-check-input mt-2'
                  type='radio'
                  name='usergender'
                  id='malestatus'
                  value='Male'
                  onClick={(e) => filterUser(e)}
                />
                <label className='forn-check-label labelMale'>Male</label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input mt-2'
                  type='radio'
                  id='femalestatus'
                  name='usergender'
                  value='Female'
                  onClick={(e) => filterUser(e)}
                />
                <label className='forn-check-label labelFemale'>Female</label>
              </div>
            </div>
          </div>
          <table className='table'>
            <thead>
              <tr className='table-primary'>
                <th scope='col'>Sr.no</th>
                <th scope='col'>Id</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>State</th>
                <th scope='col'>Gender</th>
                <th scope='col' id=''>
                  <center>Action</center>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{item.unid}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.stateSelect}</td>
                  <td>{item.gender}</td>
                  <td className='headerStatus'>
                    <Link
                      to={`./viewForm/${item.unid}`}
                      onClick={() => showViewData()}
                      className='btn btn-primary'
                    >
                      <i className='fa-solid fa-eye fa-1x'></i>
                      View
                    </Link>
                    <Link
                      to={`./edit/${item.unid}`}
                      onClick={() => editUserData()}
                      className='btn btn-success'
                    >
                      <i className='fa-regular fa-pen-to-square'></i>
                      Edit
                    </Link>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDeleteData(item.unid)}
                    >
                      <i className='fa-solid fa-circle-xmark'></i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='pagination-btns'>
          <button
            disabled={currentPage === 1}
            onClick={prevPage}
            className='btn btn-primary me-2 previous-btn'
          >
            Previous Page
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={nextPage}
            className='btn btn-primary next-btn'
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}
