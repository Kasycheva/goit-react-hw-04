import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getPhotos } from './ApiService/Photos';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';
import ImageModal from './ImageModal/Modal';

function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const fetchImages = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getPhotos(query, page);
            if (data && data.results.length > 0) {
                setImages((prevImages) => [...prevImages, ...data.results]);
                setHasMore(data.results.length > 0);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            setError('Failed to load images. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query && page > 0) {
            fetchImages();
        }
    }, [query, page]);

    const handleLoadMore = () => {
        if (hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    const getNewQuery = (newQuery) => {
        setQuery(newQuery);
        setImages([]);
        setPage(1);
        setHasMore(true);
    };

    return (
        <div className="appContainer">
            <SearchBar setQuery={getNewQuery} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} openModal={openModal} />
            {loading && <Loader />}
            {!loading && hasMore && images.length > 0 && (
                <LoadMoreBtn loadMore={handleLoadMore} />
            )}
            {!hasMore && !loading && <p>No more images to load</p>}
            {isModalOpen && modalImage && (
                <ImageModal image={modalImage} isOpen={isModalOpen} closeModal={closeModal} />
            )}
        </div>
    );
}

export default App;
