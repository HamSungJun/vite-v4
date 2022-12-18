import { ChristmasImages, Paragraphs, SvgImages } from "@app/pages/home";

export default function Todo() {
  return (
    <article>
      <h1 className="font-bold text-[24px]">Todo</h1>
      <hr className="my-[20px]" />
      <div className="space-y-[20px]">
        <ChristmasImages />
        <Paragraphs />
        <Paragraphs />
        <Paragraphs />
        <SvgImages />
      </div>
    </article>
  );
}
