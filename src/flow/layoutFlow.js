import Alpha from "@layouts/homepage/alpha";

export default function LayoutFlow({ layoutId, widgets }) {
  switch (layoutId) {
    case "36cad46e-ba8a-40ec-9f6e-e18d55cee04b":
      return <Alpha widgets={widgets} />;
    default:
      return null;
  }
}
