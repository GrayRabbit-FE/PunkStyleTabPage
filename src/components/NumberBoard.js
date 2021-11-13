import './NumberBoard.css'
function NumberLine() {
    return <div className="number-line preserve translate"></div>;
  }
  function Char(props) {
    const char = props.char;
    if (char >= "0" && char <= "9") {
      return (
        <div data-digit={char} className="number preserve translate">
          {new Array(7).fill(0).map((e, i) => (
            <NumberLine key={i}></NumberLine>
          ))}
        </div>
      );
    } else if (char === ":") {
      return (
        <div className="char preserve translate" data-before={char}>
          {char}
        </div>
      );
    } else {
      return null;
    }
  }
  function NumberContainer(props) {
    return (
      <div className="container preserve">
        {[...props.str].map((c, i) => (
          <Char char={c} key={i}></Char>
        ))}
      </div>
    );
  }
  export default NumberContainer;