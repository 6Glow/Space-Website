export default function SideBar(props) {
  const { handleToggleModal } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
      <h2>The Brutal Martian Landscape</h2>
      <div>
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptatum nesciunt distinctio enim autem earum officia labore odit
          rem modi eos, dolorum, porro necessitatibus explicabo pariatur cum
          veniam doloribus. Officiis!
        </p>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      </div>
    </div>
  );
}
