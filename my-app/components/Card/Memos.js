import { useState, useEffect } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

    useEffect(() => {
      const memosMessage = async () => {
        const memos = await contract.getMemos();
        setMemos(memos);
      };
      memosMessage();
    }, []);

  return (
    <>
      <p >Messages</p>
      {memos.map((memo) => {
        return (
          <div>
              <p>
                {memo.name}
                {memo.message}
              </p>
          </div>
        );
      })}
    </>
  );
};
export default Memos;
