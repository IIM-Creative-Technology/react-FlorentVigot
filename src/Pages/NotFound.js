import '../Sass/components/_notfound.scss';

const NotFound = ({title, image404, alt, message }) => {

    return (
        <div className="Notfound">
          <h2>{title}</h2>
          <img src= {image404} alt={alt} />
          <p>{message}</p>
        </div >
    );
}

export default NotFound;