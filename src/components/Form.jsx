import { useState } from "react";
import {
  hadleWordType,
  handleCharacterType,
  handleParagraphType,
} from "../utils/helpers";
import CopyBtn from "./CopyBtn";

const Form = () => {
  const [number, setNumber] = useState(1);
  const [type, setType] = useState("paragraphs");
  const [result, setResult] = useState("");

  const hadleFormSubmition = (e) => {
    e.preventDefault();
    let length = parseInt(number);

    if (length > 0) {
      switch (type) {
        case "paragraphs": {
          let text = handleParagraphType(length);
          setResult(text.join("\n\n"));
          break;
        }
        case "words": {
          let text = hadleWordType(length);
          setResult(text.join(" "));
          break;
        }
        case "characters": {
          let text = handleCharacterType(length);
          setResult(text.substring(0, length));
          break;
        }
        default:
          break;
      }
    }
  };

  return (
    <section className="box">
      <form
        action=""
        className="form"
        onSubmit={hadleFormSubmition}
      >
        <h2 className="form-title">Generate Lorem Ipsum</h2>
        <div className="row">
          <input
            type="number"
            id="number"
            name="number"
            min={1}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <select
            name="type"
            id="type"
            defaultValue={"paragraphs"}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="characters">Characters</option>
            <option value="words">Words</option>
            <option value="paragraphs">Paragraphs</option>
          </select>
          <button
            type="submit"
            className="btn"
          >
            Generate
          </button>
        </div>
        <textarea
          name="result"
          id="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        ></textarea>
        <CopyBtn text={result} />
      </form>
    </section>
  );
};

export default Form;
