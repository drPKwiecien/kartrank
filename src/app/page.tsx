import React from 'react';
// Import your custom components
// import TrackTable from '../components/TrackTable';
// import GalleryModal from '../components/GalleryModal';
// import DescriptionPopup from '../components/DescriptionPopup';

const HomePage: React.FC = () => {
    return (
        <div className="page-container"> {/* Add this wrapper */}
            <header>
                <h1>Karting Track Rankings</h1>
            </header>
            <main>
                <p>Welcome to the karting track ranking website!</p>
                {/* Placeholder for track table component */}
                {/* <TrackTable tracks={mockTracks} /> */}
                
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
