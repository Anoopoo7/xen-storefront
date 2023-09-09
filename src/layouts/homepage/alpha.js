import WidgetFlow from "@flow/widgetFlow";

export default function Alpha({ widgets }) {
  return (
    <>
      {widgets &&
        Array.isArray(widgets) &&
        widgets.map((widget) => (
          <WidgetFlow key={widget?.widgetId} {...widget} />
        ))}
    </>
  );
}
