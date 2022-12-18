import { ReactComponent as Drink } from "@public/assets/images/drink.svg";
import { ReactComponent as Santa } from "@public/assets/images/santa.svg";
import { ReactComponent as Yacht } from "@public/assets/images/yacht.svg";

export default function Home() {
  return (
    <article>
      <h1 className="font-bold text-[24px]">Home</h1>
      <hr className="my-[20px]" />
      <div className="space-y-[20px]">
        <Paragraphs />
        <ChristmasImages />
        <Paragraphs />
        <SvgImages />
        <Paragraphs />
      </div>
    </article>
  );
}

export function Paragraphs() {
  return (
    <section className="space-y-[20px]">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
        corrupti saepe eaque placeat facilis cumque eius tempore vitae voluptas
        architecto quod officia, quam, delectus, iste repellat. Sed mollitia
        doloremque nisi? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Officiis, accusamus voluptate cum ut culpa deserunt. Voluptate,
        dolor alias quae, dicta quasi vel doloribus distinctio debitis corporis
        illum labore at impedit.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
        corrupti saepe eaque placeat facilis cumque eius tempore vitae voluptas
        architecto quod officia, quam, delectus, iste repellat. Sed mollitia
        doloremque nisi? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Officiis, accusamus voluptate cum ut culpa deserunt. Voluptate,
        dolor alias quae, dicta quasi vel doloribus distinctio debitis corporis
        illum labore at impedit.
      </p>
    </section>
  );
}

export function ChristmasImages() {
  return (
    <section className="flex gap-x-[20px]">
      <div>
        <img src="/assets/images/christmas-1.webp" alt="christmas-1" />
      </div>
      <div>
        <img src="/assets/images/christmas-2.webp" alt="christmas-2" />
      </div>
      <div>
        <img src="/assets/images/christmas-3.jpeg" alt="christmas-3" />
      </div>
    </section>
  );
}

export function SvgImages() {
  return (
    <section className="flex flex-col gap-y-[20px]">
      <div>
        <Drink className="w-[500px] mx-auto" />
      </div>
      <div>
        <Santa className="w-[500px] mx-auto" />
      </div>
      <div>
        <Yacht className="w-[500px] mx-auto" />
      </div>
    </section>
  );
}
