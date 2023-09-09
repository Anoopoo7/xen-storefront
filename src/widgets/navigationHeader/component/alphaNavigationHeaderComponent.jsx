import style from "@styles/NavHeader.module.css";

export default function AlphaNavigationHeaderComponent({ container }) {
  return (
    <div className={style.nav_header_outer} style={container?.style}>
      <div className="container">
        <div className="py-3 d-flex justify-content-between pointer">
          <small className={style.nav_link}>Jewelry & Accessories</small>
          <small className={style.nav_link}>Clothing & Shoes</small>
          <small className={style.nav_link}>Home & Living</small>
          <small className={style.nav_link}>Wedding & Party</small>
          <small className={style.nav_link}>Toys & Entertainment</small>
          <small className={style.nav_link}>Art & Collectibles</small>
          <small className={style.nav_link}>Craft Supplies & Tools</small>
        </div>
      </div>
    </div>
  );
}
