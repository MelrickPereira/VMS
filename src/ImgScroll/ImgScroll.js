import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Sweet-Car-Image-Download.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.43e8b3f43bee93ca546ea23ed5de31d0?rik=vbkaxAU0YOFlIg&riu=http%3a%2f%2fdigestcars.com%2fwp-content%2fuploads%2f2019%2f12%2fcar.jpg&ehk=uNkRziqFcSJ7hZVsbSXF%2fyjZ4PxACrY0itqNHeupve8%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Sweet-Car-Backgrounds.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;