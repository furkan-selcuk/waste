import React from 'react';
import Header from './components/sections/Header/Header';
import Hero from './components/sections/Hero/Hero';
import './index.css';

export default function App() {
  return (
    <div className=" bg-secondary h-screen">
      <Header />
      <Hero />
    </div>
  );
}
