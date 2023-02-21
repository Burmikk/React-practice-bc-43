import ImageItem from '../ImageItem/ImageItem';

const ImageList = ({ images }) => {
  const elements = images.map(item => <ImageItem key={item.id} {...item} />);
  console.log(elements);
  return <ul>{elements}</ul>;
};

export default ImageList;
