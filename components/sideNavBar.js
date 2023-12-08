import classes from "./sideNavBat.module.css";

const SideNavBar = (props) => {
  return (
    <div className={classes.sideNavBar}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "15px",
          margin: "5px",
        }}
        onClick={() => {
          props.close();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <ul style={{ width: "100%" }}>
        <li className={classes.listItem}>Pitch Deck</li>
        <li className={classes.listItem}>SEIS</li>
      </ul>
    </div>
  );
};

export default SideNavBar;
