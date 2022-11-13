import "./Aboutme.css";
import me from "../assets/me.jpg";

const Aboutme = () => {
  return (
    <div className="aboutme min-vh-100 align-items-center py-lg-0 py-5">
      <div className="container">
        <div className="row align-items-center g-5 g-lg-0">
          <div className="col col-lg-7 order-lg-1 order-2">
            <p className="fw-semibold fs-4">Fardi Khalik Ramadhan</p>
            <p className="fw-semibold fs-4">20 Tahun</p>
            <p className="fw-semibold fs-4">Tangerang, Banten, Indonesia.</p>
            <p className="my-4">
              Mahasiswa semester 5 Teknik Informatika di Institut Teknologi Indonesia. <br />
              Saya memiliki minat di UIUX Design dan Front-end Development
            </p>
          </div>
          <div className="col col-lg-5 order-lg-2 order-1">
            <img src={me} alt="" className="poto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
