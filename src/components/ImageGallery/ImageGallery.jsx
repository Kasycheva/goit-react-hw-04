import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard'; 

const ImageGallery = ({ images, openModal }) => {
    const imageList = Array.isArray(images) ? images : [];

    return (
        <ul className={css.gallery}>
            {imageList.map(({ alt_description, urls, id, user, likes }) => (
                <li 
                    key={id} 
                    className={css.galleryItem} 
                    onClick={() => openModal({ alt_description, urls, user, likes })}
                >
                    <ImageCard 
                        src={urls.regular} 
                        alt={alt_description} 
                        avgColor={urls.regular}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;