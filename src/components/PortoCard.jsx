const PortoCard = (props) => {
  return (
    <div className="col">
      <img src={props.image} alt="" className="w-100 mb-3" />
      <h4 className="fw-semibold">{props.title}</h4>
      <p>{props.description}</p>
      <a href={props.look} className="btn btn-lg btn-primary">
        Lihat Project
      </a>
    </div>
  );
};
export default PortoCard;
