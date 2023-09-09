import style from "@styles/TopHeader.module.css";
import Image from "next/image";

export default function AlphaTopHeaderComponent({
  container,
  searchIcon,
  logo,
  profileIcon,
  profileText,
  shoppingIcon,
  shoppingText,
}) {
  return (
    <div className={style.top_header_outer} style={container?.style}>
      <div className="container d-flex justify-content-between">
        <div className="pointer">
          <Image
            className={style.icons}
            src={searchIcon}
            alt="search icon"
            width={18}
            height={18}
          />
        </div>

        <div className="pointer">
          <Image
            className={style.site_logo}
            src={logo}
            alt="logo"
            width={80}
            height={18}
          />
        </div>
        <div className={style.user_icons}>
          <div className="ms-3 pointer">
            <Image
              className={style.icons}
              src={profileIcon}
              alt="profile icon"
              width={18}
              height={18}
            />
            <small className="ms-2">{profileText}</small>
          </div>
          <div className="ms-5 pointer">
            <Image
              className={style.icons}
              src={shoppingIcon}
              alt="shopping icon"
              width={18}
              height={18}
            />
            <small className="ms-2">{shoppingText}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
