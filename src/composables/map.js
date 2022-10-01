export function useMap() {
  function fullMap(franceCoordX, franceCoordY) {
    // const initialEnglandX = windowWidth === 1140 ? 334 : 448;
    // const initialEnglandX = 334;

    let mapArea = [];
    // const X_FIRST_LINE = windowWidth === 1140 ? 260 : 425;
    const X_FIRST_LINE = 260;
    const X_SECOND_LINE = 699;
    // kindom areas
    mapArea.push(area("england", "England", 334, X_FIRST_LINE, "kingdom"));
    mapArea.push(
      area("france", "France", franceCoordX, franceCoordY, "kingdom")
    );
    mapArea.push(
      area("roman-empire", "Holy Roman Empire", 668, X_FIRST_LINE, "kingdom")
    );
    mapArea.push(area("hungary", "Hungary", 834, X_FIRST_LINE, "kingdom"));
    mapArea.push(area("byzantium", "Byzantium", 1003, X_FIRST_LINE, "kingdom"));
    mapArea.push(area("portugal", "Portugal", 334, X_SECOND_LINE, "kingdom"));
    mapArea.push(area("aragon", "Aragon", 502, X_SECOND_LINE, "kingdom"));
    mapArea.push(
      area("papal-states", "Papal States", 668, X_SECOND_LINE, "kingdom")
    );
    mapArea.push(area("ottoman", "Ottoman", 834, X_SECOND_LINE, "kingdom"));
    mapArea.push(area("mamluk", "Mamluk", 1003, X_SECOND_LINE, "kingdom"));

    // victories
    mapArea.push(
      area("renaissance-victory", "RenaissanceVictory", 144, 124, "victory")
    );

    return mapArea;
  }

  function area(id, title, coordX, coordY, type, shape = "rect") {
    const coordEndX = type === "kingdom" ? coordX + 147 : coordX + 124;
    const coordEndY = type === "kingdom" ? coordY + 30 : coordY + 124;
    return {
      id,
      alt: title,
      title,
      coords: `${coordX},${coordY},${coordEndX},${coordEndY}`,
      shape,
    };
  }

  // expose managed state as return value
  return { fullMap, area };
}
