import Alpha from "@widgets/topHeader/alpha";

export default function WidgetFlow({ widgetId, data }) {
  switch (widgetId) {
    case "6ff99571-53b2-4413-a640-4a71ca68b007":
      return <Alpha {...data} />;
    default:
      break;
  }
}
