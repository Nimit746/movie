import React,{useEffect} from 'react'
import Display from '../components/Display';


const Shows = () => {

    useEffect(() => {
        document.title = "CineMatch - shows";
    }, []);
    
    return (
        <main className="w-[80%] mx-auto py-25">
            <Display heading="Drama" btn="More" />
            <Display heading="Action" btn="More"/>
            <Display heading="Comedy" btn="More"/>
            <Display heading="Romance" btn="More"/>
            <Display heading="Horror" btn="More"/>
            <Display heading="Thriller" btn="More"/>
            {/* <Display heading="Fiction" btn="More"/>
            <Display heading="Sci-Fi" btn="More"/>
            <Display heading="Infotainment" btn="More"/> */}
        </main>
    );
}

export default Shows
