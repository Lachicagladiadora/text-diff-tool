import { COLORS } from "./constants";

function App() {
  const handleSubmit = () => {
    console.log("share");
  };

  return (
    <main
      style={{
        display: "flex",
        gap: "40px",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        height: "98vh",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
        }}
      >
        String Differentiator
      </h1>
      <form
        action=""
        style={{
          display: "flex",
          gap: "40px",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          maxWidth: "100%",
        }}
        onSubmit={() => handleSubmit()}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            maxWidth: "1000px",
          }}
        >
          <label htmlFor="first-string">First string:</label>
          <textarea
            name="first-string"
            id="first-string"
            cols={30}
            rows={10}
            style={{
              background: COLORS.pink,
              border: `solid 1px ${COLORS.black}`,
              borderRadius: "4px",
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            maxWidth: "1000px",
          }}
        >
          <label htmlFor="second-string">Second string</label>
          <textarea
            name="second-string"
            id="second-string"
            cols={30}
            rows={10}
            style={{
              background: COLORS.pink,
              border: `solid 1px ${COLORS.black}`,
              borderRadius: "4px",
            }}
          ></textarea>
        </div>
      </form>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          maxWidth: "1000px",
        }}
      >
        <label htmlFor="first-string">Diff string:</label>
        <textarea
          name="first-string"
          id="first-string"
          cols={30}
          rows={10}
          style={{
            background: COLORS.pink,
            border: `solid 1px ${COLORS.black}`,
            borderRadius: "4px",
          }}
        ></textarea>
      </div>
    </main>
  );
}

export default App;
