import "./App.css";
import TreeComponent from "./TreeComponent";

function App() {
  const root = [
    { key: "f1", value: "f1" },
    {
      key: "f2",
      value: "f2",
      children: [
        { key: "f3", value: "f3" },
        {
          key: "f4",
          value: "f4",
          children: [
            { key: "t2", value: "t2.txt" },
            {
              key: "f5",
              value: "f5",
              children: [
                {
                  key: "f6",
                  value: "f6",
                  children: [{ key: "f7", value: "f7" }],
                },
              ],
            },
          ],
        },
        { key: "t1", value: "t1.txt" },
      ],
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <span>Output</span>
      {root.map((item) => (
        <TreeComponent key={item.key} item={item} />
      ))}
    </div>
  );
}

export default App;
