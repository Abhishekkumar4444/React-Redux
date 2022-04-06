import { useSelector } from "react-redux";
//?useSelector  hook is used to read state.
const Coin = () => {
  const coin = useSelector((state) => state.counter.count);
  return <div className="value"> Coin : {coin} </div>;
};

export default Coin;
