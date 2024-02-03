import { useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit" id="skills">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      <div className="lg:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <h4>{skill.name}</h4>
                  {skill.para.map((s, i) => (
                    <p key={i} className="italic">{s}</p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
