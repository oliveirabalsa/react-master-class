import { useModal } from "../../hooks/useModal";

const Home = () => {
  const { openModal } = useModal();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg">
        This is the home page of our React application. Feel free to explore!
      </p>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default Home;
