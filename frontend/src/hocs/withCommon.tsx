import { useLocation, useNavigate } from "react-router-dom";

const withCommon =
  (Component: any) =>
  ({ props }: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <Component navigate={navigate} {...props} location={location}></Component>
    );
  };

export default withCommon;
