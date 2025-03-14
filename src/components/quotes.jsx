import { useEffect, useState } from 'react';
import gif from '../assets/gif.gif';

export const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const categories = ['success', 'motivation', 'hardwork', 'design', 'education', 'dreams'];

    const API_KEY = import.meta.env.VITE_API_KEY;


    const fetchQuote = async () => {
        setLoading(true);
        setError(null);
        try {
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + randomCategory, {
                headers: {
                    'X-Api-Key': API_KEY,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch quote: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);
            const { quote, author } = data[0]; // Access the first quote
            setQuote(quote);
            setAuthor(author);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className=" flex flex-col font-medium bg-black max-w-[272px] w-full  text-white p-2 shadow-2xl shadow-orange-400 mx-auto rounded-3xl justify-center">
            <div className="flex flex-col p-4 break-words items-center ">
                {loading ? (
                    <img src={gif} alt="Loading..." className="w-16 h-16" />
                ) : error ? (
                    <p className="text-orange-400 font-thin text-sm">try again / quota finished</p>
                ) : (
                    <div className='flex-col justify-center items-center'>
                        <h4 className="text-sm mb-4">{quote}</h4>
                        <p className="text-orange-400 font-thin text-sm italic">- {author}</p>
                    </div>
                )}
            </div>
            <button
                onClick={fetchQuote}
                className="mt-4 hover:bg-gray-300  bg-white text-black text-sm py-2 px-4 rounded-2xl"
            >
                Get Another Quote
            </button>
        </div>
    );
};
