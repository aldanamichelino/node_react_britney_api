import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getQuote } from '../../services/api';

export const Main = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setLoading(true);

    const requestGetQuote = async () => {
      setLoading(true);
      try {
        const data = await getQuote();
        setQuote(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };


    void requestGetQuote();
  }, []);

  const handleGetNewQuote = useCallback(
    async () => {
      const data = await getQuote();
      setQuote(data);
    },[]
  )
  

  return (
    <div className="w-full items-center flex justify-center">
      <div className="w-full relative">
        <div className='items-center flex flex-col justify-center'>
          <h3 className="my-2 text-gray-800 font-bold text-2xl">
              Get your Britney phrase of the day!
          </h3>
          <p className="my-2 text-gray-800 bg-emerald-100 py-4 rounded-md">"{quote}"</p>
          <button className="mb-2 my-1 border rounded md px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50" onClick={handleGetNewQuote}>Get another one!</button>
        </div>
        <div>
            <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2016/12/30/14831018014363.jpg" />
        </div>
      </div>
    </div>
  )
}
