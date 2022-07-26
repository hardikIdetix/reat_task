import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllReact from './allreact/AllReact';
import img from './assets/images/Ikbal 3.png';
import CountLoop from './components/count/CountLoop';
import FormikUseField from './components/formik/fieldCustom/FormikUseField';
import FieldFormik from './components/formik/FieldFormik';
import FormikProps from './components/formik/FormikProps';
import YupFormik from './components/formik/YupFormik';
import GstCalculator from './components/gst/GstCalculator';
import Movie from './components/movie/Movie';
import CountOnclick from './components/numberIncrement/CountOnclick';
import ShopViewMore from './components/shopping/ShopViewMore';
import TodoList from './components/todo/TodoList';
import UserList from './components/userList/UserList';
import ViewMore from './components/view_more/ViewMore';
import NaveBar from './NaveBar';
import Redux from './Redux/Redux';
import Shopping from './shopping-cart/Shopping';
import SideBar from './SideBar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NaveBar />}>
        <Route path='/all-react/*' element={<AllReact />} />
        <Route path='/redux/*' element={<Redux />} />
        <Route path='/shopping/*' element={<Shopping />} />

        <Route path='/' element={<SideBar />}>
          <Route
            index
            element={
              <div className='text-center my-5'>
                <h1 className='text-center'>Hello world</h1>
                <img src={img} width='500' alt='' />
              </div>
            }
          />
          <Route path='movie-ticket/*' element={<Movie />} />
          <Route path='view-more' element={<ViewMore />} />
          <Route path='count' element={<CountLoop />} />
          <Route path='todoList' element={<TodoList />} />
          <Route path='yup' element={<YupFormik />} />
          <Route path='formik-props' element={<FormikProps />} />
          <Route path='formik-field' element={<FieldFormik />} />
          <Route path='formik-custom' element={<FormikUseField />} />
          <Route path='click-number-increment' element={<CountOnclick />} />
          <Route path='user-list' element={<UserList />} />
          <Route path='shopping-time-view_more' element={<ShopViewMore />} />

          {/* <Route path='GST/*' element={<GstCalculator />} /> */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
