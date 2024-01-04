import React from 'react';
// Import your custom components
import TrackTable from './components/TrackTable';
// import GalleryModal from '../components/GalleryModal';
// import DescriptionPopup from '../components/DescriptionPopup';

const HomePage: React.FC = () => {
    return (
        <div className="page-container"> 
            <header>
                <h1>Karting Track Rankings</h1>
            </header>
            <main>
                <p style={{ marginBottom: '100px' }}>Welcome to the karting track ranking website!</p>
                <TrackTable />
                
                {/* Placeholders for modals/popups */}
                {/* <GalleryModal isOpen={galleryOpen} onClose={handleGalleryClose} /> */}
                {/* <DescriptionPopup isOpen={descriptionOpen} onClose={handleDescriptionClose} /> */}
            </main>
            <footer>
                <p>r</p>
            </footer>
        </div>
    );
};

export default HomePage;
