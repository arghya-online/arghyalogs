import React from 'react';
import AboutSection from '../components/Home/AboutSection';
import LatestNotesSection from '../components/Home/LatestNotesSection';
import posts from '../blogs';

const Home = ({ selectedCategory }) => {
    return (
        <div className="animate-fade-in">
            <AboutSection />
            <LatestNotesSection posts={posts} selectedCategory={selectedCategory} />
        </div>
    );
};

export default Home;
