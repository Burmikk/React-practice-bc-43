const ImageItem = ({ thumbnailUrl, title, url }) => {
  return (
    <li>
      <img src={thumbnailUrl} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default ImageItem;
