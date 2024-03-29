import { useState, memo, useContext } from "react";

import "./index.css";
import { ThemeContext } from "../../App";

function Component({ placeholder, button, onSubmit }) {
  const [value, setValues] = useState("");

  const handleChange = (e) => setValues(e.target.value);

  const handleSubmit = () => {
    if (value.length === 0) return null;

    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefinded");
    }

    setValues("");
  };

  const isDisabled = value.length === 0;

  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="field-form">
      <textarea
        onChange={handleChange}
        value={value}
        rows={2}
        placeholder={placeholder}
        className="field-form__field"
      ></textarea>

      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className={`field-form__button`}
      >
        {button}
      </button>

      <button
        // onClick={() =>
        //   theme.toggle(
        //     theme.currentTheme === theme.THEME_TYPE.DARK
        //       ? theme.THEME_TYPE.LIGHT
        //       : theme.THEME_TYPE.DARK
        //   )
        // }
        onClick={theme.toggle}
        className={`field-form__button`}
      >
        Change theme
      </button>
    </div>
  );
}

export default memo(Component);
