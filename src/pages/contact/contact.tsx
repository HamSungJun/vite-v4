import { ChristmasImages, Paragraphs, SvgImages } from "@app/pages/home";

export default function Contact() {
  return (
    <article>
      <h1 className="font-bold text-[24px]">Contact</h1>
      <hr className="my-[20px]" />
      <div className="space-y-[20px]">
        <SvgImages />
        <Paragraphs />
        <Paragraphs />
        <ChristmasImages />
        <Paragraphs />
      </div>
    </article>
  );
}
