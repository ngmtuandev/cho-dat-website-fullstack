import useAppStore from "../../store/useAppStore";

const Login = () => {
  const { contentModel, setShowModel } = useAppStore() as any;
  return (
    <div
      onClick={() => setShowModel(false, null)}
      className="w-screen fixed h-screen flex justify-center items-center z-999999 bg-gray-600 bg-opacity-50"
    >
      {contentModel && contentModel}
    </div>
  );
};

export default Login;
