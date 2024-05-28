import Nh from "./Nh";

const App = () => {
  return (
    <div className="border border-black p-5">
      <h1 className=" text-2xl font-bold mb-3">Hello React</h1>
      <Nh />
      <p className=" mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi eum
        modi in vitae ad blanditiis placeat aut ab laboriosam hic eveniet totam
        ipsam officiis veniam maiores, quod quidem ratione.
      </p>
      <button className=" border border-black p-2 bg-zinc-700 text-white rounded mb-3">
        Click Me
      </button>
      <Nh />
    </div>
  );
};

export default App;
