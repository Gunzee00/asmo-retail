const BackgroundShapes = ({ customPosition = {} }) => {
  return (
    <>
      <img
        src="assets/images/shapes/shape1.png"
        alt=""
        className="shape one animation-rotation d-md-block d-none"
        style={customPosition.one}
      />
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation d-md-block d-none"
        style={customPosition.two}
      />
      <img
        src="assets/images/shapes/shape3.png"
        alt=""
        className="shape eight animation-walking d-md-block d-none"
        style={customPosition.eight}
      />
      <img
        src="assets/images/shapes/shape5.png"
        alt=""
        className="shape six animation-walking d-md-block d-none"
        style={customPosition.six}
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape four animation-scalation"
        style={customPosition.four}
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape nine animation-scalation"
        style={customPosition.nine}
      />
    </>
  );
};

export default BackgroundShapes;
