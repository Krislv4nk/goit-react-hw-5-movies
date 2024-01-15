import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';     
import {Layout} from '../Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import {Cast} from '../Cast/Cast';
import{Reviews} from '../Reviews/Reviews';

export const App = () =>  {
    return (
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     </Layout>
         
  );
}


