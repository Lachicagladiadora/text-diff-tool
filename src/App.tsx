import { useState } from "react";
import { TextArea } from "./components/TextArea";
import { COLORS } from "./constants";
import * as diff from "diff";

type ChartDiffState = 'added' | 'removed' | 'same'

const COLOR_DIFF: { [key in ChartDiffState]: string } = {
  added: 'green',
  removed: "red",
  same: "gray"
}

type ChartResult = {
  chart: string,
  result: ChartDiffState
}

function App() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [result, setResult] = useState<ChartResult[]>([])

  const onChangeFirst = (newFirstValue: string) => {
    setFirstValue(newFirstValue);
    const difference = diff.diffChars(newFirstValue, secondValue);
    const newResult = difference.map((chart): ChartResult => ({
      chart: chart.value,
      result: chart.added ? "added" : chart.removed ? "removed" : "same"
    }));
    setResult(newResult)
  };

  const onChangeSecond = (newSecondValue: string) => {
    setSecondValue(newSecondValue);
    const difference = diff.diffChars(firstValue, newSecondValue);
    const newResult = difference.map((chart): ChartResult => ({
      chart: chart.value,
      result: chart.added ? "added" : chart.removed ? "removed" : "same"
    }));
    setResult(newResult)
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
        setValue={onChangeFirst}
      />
      <TextArea
        id="second"
        label="Second string:"
        value={secondValue}
        setValue={onChangeSecond}
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
        {result.map((cur, idx) => <span key={idx} style={{ color: COLOR_DIFF[cur.result] }}>{cur.chart}</span>)}
      </section>
    </main>
  );
}

export default App;
