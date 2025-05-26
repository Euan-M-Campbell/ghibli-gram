import { useState } from 'react';
import ghibli_pp from '../assets/ghibli_pp.png';
import ghibli_budapest from '../assets/ghibli_budapest.png';
import ghibli_usa from '../assets/ghibli_usa.png';
import ghibli_usa2 from '../assets/ghibli_usa2.png';
import ghibli_rus from '../assets/ghibli_rus.png';
import ghibli_rus2 from '../assets/ghibli_rus2.png';
import ghibli_rus3 from '../assets/ghibli_rus3.png';
import ghibli_london from '../assets/ghibli_london.png';
import ghibli_latvia from '../assets/ghibli_latvia.png';
import ghibli_cracow from '../assets/ghibli_cracow.png';
import ghibli_vilinus2 from '../assets/ghibli_vilinus2.png';
import '../styles/Profile.css';
import PostModal from '../components/PostModal';

const posts = [
    { images: [ghibli_latvia], location: "Riga, Latvia", year: 2023, flag: "LV" },
    { images: [ghibli_usa, ghibli_usa2], location: "MI, USA", year: 2024, flag: "US" },
    { images: [ghibli_london], location: "London, Great Britain", year: 2024, flag: "GB" },
    { images: [ghibli_rus, ghibli_rus2, ghibli_rus3], location: "Russia", year: 2023, flag: "RU" },
    { images: [ghibli_cracow], location: "Krakow, Poland", year: 2022, flag: "PL" },
    { images: [ghibli_vilinus2], location: "Vilnius, Lithuania", year: 2022, flag: "LT" },
    { images: [ghibli_budapest], location: "Budapest, Hungary", year: 2025, flag: "HU" },
];

function Profile() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openPost = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const showNext = () => {
        if (currentIndex < posts.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const showPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div id="profile-page">
            <div className="page-header">
                <div className='profile-pic-container'>
                    <img src={ghibli_pp} alt='Profile' className='profile-pic' />
                </div>
                <div className='profile-info'>
                    <b>euan__campbell</b>
                    <div className='profile-stats'>
                        <b>{posts.length}</b>
                        <p>posts</p>
                        <b>23</b>
                        <p>years</p>
                        <b>28</b>
                        <p>countries</p>
                    </div>
                    <b>Euan Campbell</b>
                </div>
            </div>
            <div className='profile-content'>
                <div className='profile-posts'>
                    {posts.map((post, index) => (
                        <div
                            className="profile-post"
                            key={index}
                            onClick={() => openPost(index)}
                        >
                            {/* Only show the first image of each post as preview */}
                            <img src={post.images[0]} alt={`Post ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {currentIndex !== null && (
                <PostModal
                    post={posts[currentIndex]}
                    onClose={closeModal}
                    onNext={showNext}
                    onPrev={showPrev}
                />
            )}
        </div>
    );
}

export default Profile;
