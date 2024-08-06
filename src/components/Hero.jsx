import React from "react";


const Hero = () => {
  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex items-center justify-between w-full mb-10 pt-3'>
      <button
          type='button'
          onClick={handleRefresh}
          className='maroon_btn'
        >
          Refresh
        </button>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/afrahshah/", "_blank")
          }
          className='maroon_btn'
        >
          GitHub
        </button>
        
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='red_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Don't have time for reading full length articles? Don't worry, I've got you! Reading made concise with this open-source article summarizer that transforms lengthy articles into short summaries.
      </h2>
    </header>
  );
};

export default Hero;