import LayoutFlow from "@flow/layoutFlow";

export const getStaticProps = async () => {
  const configuration = {
    layoutId: "36cad46e-ba8a-40ec-9f6e-e18d55cee04b",
    widgets: [
      {
        widgetId: "6ff99571-53b2-4413-a640-4a71ca68b007",
        data: {
          container: {
            style: { backgroundColor: "#E5E5E5" },
          },
          searchIcon: "/assets/icons/search.png",
          logo: "/assets/icons/logo.png",
          profileIcon: "/assets/icons/profile.png",
          profileText: "Account",
          shoppingIcon: "/assets/icons/bag.png",
          shoppingText: "Shopping",
        },
      },
      {
        widgetId: "a769f819-3eb1-4d0a-8663-6ff00c44fcfc",
        data: {
          container: {
            style: { backgroundColor: "#E5E5E5" },
          },
        },
      },
    ],
  };
  return { props: { configuration } };
};

export default function HomePage({ configuration }) {
  return <LayoutFlow {...configuration} />;
}
