import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SideBar = () => {
  const sidebarLinks = [
    { title: 'Home', to: '/' },
    { title: 'Movie ticket', to: '/movie-ticket/home' },
    { title: 'View more', to: '/view-more' },
    { title: 'Count', to: '/count' },
    { title: 'Todo', to: '/todoList' },
    { title: 'Formik simple', to: '/yup' },
    { title: 'Formik props', to: '/formik-props' },
    { title: 'Formik Field component', to: '/formik-field' },
    { title: 'Formik custom', to: '/formik-custom' },
    { title: 'Click Number Increment', to: 'click-number-increment' },
    { title: 'listing of users', to: 'user-list' },
    { title: 'Shopping', to: 'shopping-time-view_more' },
    // { title: 'GST calculator', to: 'GST' },
  ];
  return (
    <>
      <div className='row m-3'>
        <div
          className='col-2 p-0'
          style={{ height: '90.3vh', overflow: 'auto' }}
        >
          <div
            className='list-group list-group-light'
            id='list-tab'
            role='tablist'
          >
            {sidebarLinks.map(({ title, to }, id) => (
              <NavLink
                className='list-group-item list-group-item-action my-1 px-3 border rounded-7'
                id='list-home-list'
                to={to}
                key={id}
                role='tab'
                aria-controls='list-home'
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='col-10' style={{ height: '90.3vh', overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
