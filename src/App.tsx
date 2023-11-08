import { useState } from "react";
import { TextArea } from "./components/TextArea";
import { COLORS } from "./constants";
import diff from "diff";

function App() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");

  const onChangeFirst = (newFirstValue: string) => {
    // 1. actualizar el firstValue state
    setFirstValue(newFirstValue);
    // 2. llamar a la funcion diff y obtengo la respuesta
    const difference = diff.diffChars(firstValue, secondValue);
    difference.forEach((chart) => {
      console.log(chart);
      // const color = chart.added ? "green" : chart.removed ? "red" : "gray";
    });
    // 3. itero las diferencias y pinto en el tercer panel
  };

  return (
    <main
      style={{
        border: "solid 2px orange",
        display: "flex",
        gap: "40px",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h1 style={{ fontSize: "20px" }}>String Differentiator</h1>
      <TextArea
        id="first"
        label="First string:"
        value={firstValue}
        setValue={setFirstValue}
      />
      <TextArea
        id="second"
        label="Second string:"
        value={secondValue}
        setValue={setSecondValue}
      />
      Diff string
      <section
        style={{
          background: COLORS.pink,
          border: `solid 1px ${COLORS.black}`,
          borderRadius: "4px",
          padding: "5px",
        }}
      >
        kdfngkdjsgfllo
      </section>
    </main>
  );
}

export default App;
