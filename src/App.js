import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getNews } from './redux/action/actionCreator';

import News from './components/News';

import './App.css'


const App = () => {
  const latestNews = useSelector(store => store?.news?.latestNews || []);
  const popularNews = useSelector(store => store?.news?.popularNews || []);
  const { latestNewsError, popularNewsError } = useSelector(store => store?.errors || {});
  console.log(popularNewsError);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;