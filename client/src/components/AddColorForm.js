import React, { useState } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

const AddNewColor = ({ updateColors, colorToEdit }) => {
  const [createColor, setCreateColor] = useState({
    code: { hex: "" },
    color: "",
    id: Date.now()
  });

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/colors", createColor)
      .then(res => {
        updateColors(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChanges = e => {
    e.preventDefault();
    setCreateColor({ ...createColor, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="addColor" onSubmit={handleSubmit}>
        <label>
          Color
          <input
            type="text"
            name="color"
            value={createColor.color}
            onChange={handleChanges}
            placeholder="Color Name"
          />
        </label>
        <label>
          Hex Code
          <input
            type="text"
            name="code"
            value={createColor.code.hex}
            onChange={e =>
              setCreateColor({ ...colorToEdit, code: { hex: e.target.value } })
            }
            placeholder="hex code"
          />
        </label>
        <button type="submit">Create A Color</button>
      </form>
    </div>
  );
};

export default AddNewColor;
