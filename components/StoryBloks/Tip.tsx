import { Block } from "../../models/ContentBlocks";
import { CodeEditor } from "../CodeEditor";

export const Tip = ({ blok }: Block.Tip) => {
  return (
    <>
      <h1 className="text-xl font-bold">{blok.title}</h1>
      <p>{blok.description}</p>
      <p>{blok.level.name}</p>
      <p>{blok.categories[0].name}</p>
      <CodeEditor src={blok.codeSrc} />
    </>
  );
};
