import { createElement } from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="bg-dark_primary text-white" id="contact">

      <div className="md:container px-5 py-14 flex">
        <div className="flex-col">
        <h2 className="title !text-white">
          {Contact.title}
        </h2>
        <h4 className="subtitle">
          {Contact.subtitle}
        </h4>
        </div>
          <div className="flex-1 flex flex-row gap-5 justify-end">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                className="flex items-center"
              >
                <a className="text-white text-4xl" href={content.link} >{createElement(content.icon)}</a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
