import { Component } from 'react';
import { getImages } from '../../sevices/imagesAPI';
import { Dna } from 'react-loader-spinner';
import ImageList from './ImageList/ImageList';
import Button from '../Button/Button';

class Images extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  async fetch() {
    const { page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { data } = await getImages(page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
      }));
    } catch (error) {
      this.setState({ error: error.message || 'Something wrong! Try later!' });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetch();
    }
  }

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    console.log(images);
    return (
      <>
        {isLoading && (
          <Dna
            visible={true}
            height="480"
            width="480"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
        {error && <p>{error}</p>}
        {images.length > 0 && (
          <>
            <ImageList images={images} />
            <Button onBtnClick={this.handleLoadMoreClick}>Load more</Button>
          </>
        )}
      </>
    );
  }
}

export default Images;
