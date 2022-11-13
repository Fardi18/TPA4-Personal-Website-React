import LayananCard from "./LayananCard";
import Layananlist from "./Layananlist";

const Layanan = () => {
  return (
    <div className="cardlayanan">
      <div className="container mt-5 mb-5 pb-5">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {Layananlist.map((item, index) => {
            return <LayananCard key={index} layanan={item.layanan} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
