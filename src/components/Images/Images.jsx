import { Component } from 'react';
import { getImages } from '../../sevices/imagesAPI';
import ImageList from './ImageList/ImageList';

class Images extends Component {
  state = {
    images: [],
  };

  async fetch() {
    try {
      const {data} = await getImages()
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
      }))
    } catch (error) {}
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return <>{images.length > 0 && <ImageList images={images} />}</>;
  }
}

export default Images;
