const Picture = ({ id, picture, styles }) => {
    return (
        <li key={id}>
            <img src={picture.path} alt={picture.alt} />
        </li>
    );
}

export default Picture
