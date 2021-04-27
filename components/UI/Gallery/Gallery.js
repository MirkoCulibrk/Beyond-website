import ImageGallery from 'react-image-gallery';
const Gallery = ({images}) => {
    return (
        <ImageGallery 
            items={images} 
            showNav={false} 
            showPlayButton={false}
            autoPlay={false}
            thumbnailClass="product-imgcontainer--thumbnail"
        ></ImageGallery>
    )
}

export default Gallery
