import React, { useState } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

import dynamic from 'next/dynamic';

import 'react-modal-video/css/modal-video.min.css';

const ModalVideo = dynamic(
    () => import('react-modal-video'),
    { ssr: false }
  );
  

const TrackTable: React.FC = () => {

    const [selectedMedia, setSelectedMedia] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    // Handlers
    const handleImageClick = (imageUrl) => {
        setSelectedMedia({ type: 'image', url: imageUrl });
        setIsOpen(true); // Open the lightbox/modal
    };

    const handleVideoClick = (videoUrl) => {
        setSelectedMedia({ type: 'video', url: videoUrl });
        setIsOpen(true); // Open the lightbox/modal
    };

    const handleCloseMedia = () => {
        setIsOpen(false);
    };
    const tracks = [
        { rank: 1, name: 'Glass74 Karting', type: 'Outdoor', date: '2022-12-15', content: {images: ['/pictures/gass1.jpg', '/pictures/gass2.jpg']}, opis: 'Najgorszy tor w Hiszpanii' },
        { rank: 2, name: 'Karting 932 Alicante', type: 'Indoor', date: '2022-12-17', content: {images: ['/pictures/alicante1.jpg', '/pictures/alicante2.jpg']} , opis: 'Fajne elektryczne gokarty'},
        { rank: 2, name: 'Indoor Karting Barcelona', type: 'Indoor', date: '2023-11-09',content: {videos: ['/movies/barcelona1.jpg']} , opis: 'Ciekawy, techniczny tor'},
    ];
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Nazwa</th>
                        <th>Typ</th>
                        <th>Data</th>
                        <th>Media</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map(track => (
                            <tr key={track.rank}>
                                <td>{track.rank}</td>
                                <td>{track.name}</td>
                                <td>{track.type}</td>
                                <td>{track.date}</td>
                                <td>
                                    {track.content.images && track.content.images.map((image, index) => (
                                        <img key={index} src={image} style={{ maxWidth: '100px' }} onClick={() => handleImageClick(image)} />
                                    ))}
                                    {track.content.videos && track.content.videos.map((video, index) => (
                                        <video key={index} width="160" height="90" controls onClick={() => handleVideoClick(video)}>
                                            <source src={video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ))}
                                </td>

                                <td>{track.opis}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            {selectedMedia && selectedMedia.type === 'image' && isOpen && (
                <Lightbox
                    mainSrc={selectedMedia.url}
                    onCloseRequest={handleCloseMedia}
                />
            )}
            {selectedMedia && selectedMedia.type === 'video' && isOpen && (
                <ModalVideo
                    channel='custom'
                    isOpen={isOpen}
                    url={selectedMedia.url}
                    onClose={handleCloseMedia}
                />
            )}
        </div>    
    );
};

export default TrackTable;
