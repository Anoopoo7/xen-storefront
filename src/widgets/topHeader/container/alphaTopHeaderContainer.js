import AlphaTopHeaderComponent from "@widgets/topHeader/component/alphaTopHeaderComponent";

export default function AlphaTopHeaderContainer({
  container,
  searchIcon,
  logo,
  profileIcon,
  profileText,
  shoppingIcon,
  shoppingText,
}) {
  return (
    <AlphaTopHeaderComponent
      container={container}
      searchIcon={searchIcon}
      logo={logo}
      profileIcon={profileIcon}
      profileText={profileText}
      shoppingIcon={shoppingIcon}
      shoppingText={shoppingText}
    />
  );
}
