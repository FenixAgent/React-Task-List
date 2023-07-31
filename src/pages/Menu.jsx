const Menu = () => {
  console.log();
  return (
    <>
      <div className="menuContainer">
        <h1>HELLO MENU</h1>
        <button
          className="menuButton"
          onClick={() => {
            window.location = "https://zn33yx.csb.app/";
          }}
        >
          GO BACK TO LIST
        </button>
      </div>
    </>
  );
};

export default Menu;
