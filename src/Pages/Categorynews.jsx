import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const Categorynews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [categoryNews, setcategoryNews] = useState([])

    // console.log(id,data)
    useEffect(() => {
        if (id == '0') {
            setcategoryNews(data)
            return
        }
        else if (id == "1") {
            const filtereNews = data.filter(news => news.others.is_today_pick == true)
            setcategoryNews(filtereNews)


        }
        else {
            const filtereNews = data.filter(news => news.category_id == id)

            // console.log(filtereNews)
            setcategoryNews(filtereNews)
        }


    }, [data, id])
    return (
        <div>

          <h2 className='font-bold mb-5'>  Total- <span className='text-secondary'>{categoryNews.length} </span> news Found</h2>
          <div className='grid grid-cols-1 gap-5'>
            {
                categoryNews.map((news)=>( 
                <NewsCard key={news.id} news={news}></NewsCard>

                ) )}
          </div>
        </div>
    );
};

export default Categorynews;