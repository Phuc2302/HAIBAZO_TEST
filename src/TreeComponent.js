const TreeComponent = ({ item, level = 0 }) => {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <div
      style={{
        paddingLeft: 10,
      }}
    >
      <div
        style={{
          paddingLeft: level * 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>{item.value}</span>
      </div>

      {hasChildren &&
        item.children.map((child) => (
          <TreeComponent key={child.key} item={child} level={level + 1} />
        ))}
    </div>
  );
};
export default TreeComponent;
