import { ChristmasImages, Paragraphs, SvgImages } from "@app/pages";

export default function About() {
  return (
    <article>
      <h1 className="font-bold text-[24px]">About</h1>
      <hr className="my-[20px]" />
      <div className="space-y-[20px]">
        <Paragraphs />
        <Paragraphs />
        <ChristmasImages />
        <SvgImages />
        <Paragraphs />
      </div>
    </article>
  );
}
