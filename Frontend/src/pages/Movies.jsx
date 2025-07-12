// import React, {useEffect} from 'react'
// import Display from '../components/DIsplay'


// const Movies = () => {

//   useEffect(() => {
//     document.title = "CineMatch - movies";
//   },[]);




//     return (
//       <div className="w-[80%] mx-auto my-25">
//         <Display heading="Action" btn="More" />

//         <Display heading="Thriller" btn="More"/>

//         <Display heading="Fiction" btn="More" />

//         <Display heading="Sci-Fi" btn="More" />

//         <Display heading="Romance" btn="More" />

//         <Display heading="Kids" btn="More" />

//         <Display heading="Horror" btn="More" />

//         <Display heading="Comedy" btn="More" />

//         <Display heading="Drama" btn="More" />

//       </div>
//     );
// }

// export default Movies



import React, { useEffect } from 'react';
import Display from '../components/DIsplay';

const Movies = () => {
  useEffect(() => {
    document.title = "CineMatch - Movies";
  }, []);

  return (
    <div className="w-[80%] mx-auto my-25 space-y-10">
      <Display heading="Action" btn="More" />
      <Display heading="Thriller" btn="More" />
      <Display heading="Romance" btn="More" />
      <Display heading="Horror" btn="More" />
      <Display heading="Comedy" btn="More" />
      <Display heading="Drama" btn="More" />
      
      {/* <Display heading="Sci-Fi" btn="More" />
      <Display heading="Kids" btn="More" />
      <Display heading="Fiction" btn="More" /> */}
      </div>
  );
};

export default Movies;
