import { MouseEvent } from "react";
import { Button } from "../components";

export default function ButtonsPage() {
  function handleBtnClick(e: MouseEvent<HTMLButtonElement>) {
    console.log("handleBtnClick ->", e.currentTarget.textContent);
  }

  return (
    <div>
      <h2>Buttons examples</h2>
      <p>
        <Button onClick={handleBtnClick}>Default button</Button>
      </p>
      <p>
        <Button primary onClick={handleBtnClick}>
          Default primary button
        </Button>
      </p>
      <p>
        <Button primary variant="contained" onClick={handleBtnClick}>
          Contained primary button
        </Button>
      </p>
      <p>
        <Button primary variant="outlined" onClick={handleBtnClick}>
          Outlined primary button
        </Button>
      </p>
    </div>
  );
}
