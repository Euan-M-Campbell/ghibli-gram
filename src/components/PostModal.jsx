import { useEffect, useCallback, useState } from 'react';
import Flag from 'react-world-flags';
import '../styles/PostModal.css';
import ghibli_pp from '../assets/ghibli_pp.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PostModal({ post, onClose, onNext, onPrev }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        setCurrentImageIndex(0); // Reset image index when a new post is opened
    }, [post]);

    if (!post) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>

            {/* Modal Post Navigation (between posts) */}
            <button className="nav-button left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
                <FaChevronLeft />
            </button>
            <button className="nav-button right" onClick={(e) => { e.stopPropagation(); onNext(); }}>
                <FaChevronRight />
            </button>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left-panel">

                    {/* Image Slider */}
                    <div className="modal-image-slider">
                        {post.images.length > 1 && (
                            <>
                                <button className="image-nav-left" onClick={prevImage}><FaChevronLeft /></button>
                                <button className="image-nav-right" onClick={nextImage}><FaChevronRight /></button>
                            </>
                        )}
                        <img src={post.images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                    </div>

                </div>

                <div className="modal-right-panel">
                    <div className="modal-right-panel-header">
                        <div className='model-profile-pic-container'>
                            <img src={ghibli_pp} alt='Profile' className='modal-post-profile-pic' />
                        </div>
                        <div>
                            <div className="modal-right-panel-header-user">
                                <p>euan__campbell</p>
                            </div>
                            <div className="modal-right-panel-header-details">
                                <div className="flag-container">
                                    <Flag code={post.flag} />
                                </div>                                
                                <p>{post.location},</p>
                                <p>{post.year}</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-right-panel-body">
                        {/* Add optional post text here */}
                    </div>   
                    <div className="modal-right-panel-footer">
                        <div className='modal-right-panel-footer-left-icons'>
                            <span className="material-symbols-outlined">favorite</span>
                            <span className="material-symbols-outlined">comment</span>
                            <span className="material-symbols-outlined">send</span>
                        </div>
                        <div className='modal-right-panel-footer-right-icons'>
                            <span className="material-symbols-outlined">bookmark</span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default PostModal;
