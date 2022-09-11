import { Block } from "../../models/ContentBlocks";

export const Tip = ({ blok }: Block.Tip) => {
  console.log("tip is rendered");
  return (
    <>
      <h1 className="text-xl font-bold">{blok.title}</h1>
      {/* <p>{blok.description}</p> */}
      <p>{blok.level.name}</p>
      <p>{blok.categories[0].name}</p>
    </>
  );
};
