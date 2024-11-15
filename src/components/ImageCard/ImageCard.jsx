import css from "./ImageCard.module.css";

export const ImageCard = ({ src, alt, avgColor }) => {
  return (
    <div className={css.card}>
      <div
        className={css.item}
        style={{ backgroundColor: avgColor, borderColor: avgColor }} 
      >
        <img src={src} alt={alt} className={css.image} />
      </div>
    </div>
  );
};

export default ImageCard;