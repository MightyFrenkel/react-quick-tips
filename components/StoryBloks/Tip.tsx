/* eslint-disable jsx-a11y/alt-text */
import { Block } from "../../models/ContentBlocks";
import { CodeEditor } from "../CodeEditor";
import { Image } from "../Image";

export const Tip = ({ blok }: Block.Tip) => {
  console.log(blok.image);
  return (
    <>
      <h1 className="text-xl font-bold">{blok.title}</h1>
      <p>{blok.description}</p>
      <p>{blok.level.name}</p>
      <p>{blok.categories[0].name}</p>
      {blok.image && <Image image={blok.image} />}
      <CodeEditor src={blok.codeSrc} />
    </>
  );
};
