import Buttons from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommendé</h2>
        <div className="recommended-flex">
          <Buttons
            onClickHandler={handleClick}
            value=""
            title="Tous les produits"
          />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
