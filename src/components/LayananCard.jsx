const LayananCard = (props) => {
  return (
    <div className="col text-center">
      <h4 className="fw-semibold">{props.layanan}</h4>
      <p>{props.text}</p>
    </div>
  );
};
export default LayananCard;
