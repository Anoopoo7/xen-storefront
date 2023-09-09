import AlphaNavigationHeader from "@widgets/navigationHeader/alpha";
import AlphaTopHeader from "@widgets/topHeader/alpha";

export default function WidgetFlow({ widgetId, data }) {
  switch (widgetId) {
    case "6ff99571-53b2-4413-a640-4a71ca68b007":
      return <AlphaTopHeader {...data} />;
    case "a769f819-3eb1-4d0a-8663-6ff00c44fcfc":
      return <AlphaNavigationHeader {...data} />;
    default:
      break;
  }
}
