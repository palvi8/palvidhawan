import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Services = () => {
  return (
    <section  className="bg-bg_light_primary" id="projects">
    <div className="md:container px-5 py-14 bg-bg_light_primary">
      <h2 className="title" data-aos="fade-down">
        {"Projects"}
      </h2>
      <h4 className="subtitle" data-aos="fade-down">
        {"My Experience"}
      </h4>
      <br />
      <div className="flex gap-5 justify-between flex-wrap group">
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
    date="Aug 2023 - present"
  >
    <h6>ThoughtWorks</h6>
    <h4 className="vertical-timeline-element-title">Banking Domain</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - UI Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
      Tech - React Native, React JS, React-Styleguide, Jest
    </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Web and mobile product design, working with Core Design System Team
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Design and Developed multiple components consumed by Web and mobile Apps.</li>
      <li>Handling the different version of common components.</li>
      <li>Migrate consumers app with the latest version of components.
</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="July 2022 - July 2023"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
  >
    <h6>ThoughtWorks</h6>
    <h4 className="vertical-timeline-element-title">Web & Mobile Product Design & Delivery</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - UI Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
    Tech - ReactJS, Storybook, material-ui, TypeScript, Jest, Springboot, Docker, Kubernetes
      </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Mobile and Web Product Design and Delivery  platform for school district to provide safe transport  to and form school for Disabled Children
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Mainly developed features in ReactJS.</li>
      <li>Created new design in storybooks with template Typescript.</li>
      <li>Took initiatives to increase the code coverage and create tech debt card for the cleanup.</li>
      <li>Cultivated other backend devs in UI.</li>
      <li>Showcased multiple featues owned by me to the clients.</li>
    </ul>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 2021 - May 2022"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
    
  >
    <h6>ThoughtWorks</h6>
    <h4 className="vertical-timeline-element-title">Finance & Bank Domain</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - UI Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
    Tech - Angular JS, SCSS, Jasmine
      </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Worked in Customer engagement software which tracks all investment accounts under one platform
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
    <li>Worked mainly in legacy tech stack, onboarded quickly.</li>
      <li>Provided multiple KT session on Web Performance to the team.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Dec 2019 - Oct 2021"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
    
  >
    <h6>ThoughtWorks</h6>
    <h4 className="vertical-timeline-element-title">Health Analytics Domain</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - UI Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>Tech - Angular 8, Jasmine, Springboot, Azure log analytics</h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>Reporting and CRM for Value based care management </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Developed and owned multiple features.</li>
      <li>Provide multiple KT’s in the team as well as to the clients.</li>
      <li>Point of Contact from UI.</li>
      <li>Followed TDD.</li>
      <li>Not only in UI but also worked on multiple task in springboot.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Feb 2018- July 2019"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
   
  >
    <h4 className="vertical-timeline-element-title">Mark Software Systems, Chandigarh</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Web Designer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>Tech - Angular 2+, Javascript, HTML5, CSS3</h5>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Designed and developed responsive websites with a focus on client requirements.</li>
      <li>Successfully managed projects in Angular 2+. </li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Aug 2017- Feb 2018"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
  >
    <h6>Next57, Chandigarh</h6>
    <h4 className="vertical-timeline-element-title">Review Toolbar</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Frontend Devloper (Internship)</h6>
    <h5 style={{marginTop: '0.5rem'}}>Tech - ReactJS, Javascript, HTML5, CSS3</h5>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Designed, developed, and maintained a responsive website using React JS.</li>
      <li>Created and implemented a Review Toolbar, consolidating ratings and reviews from various platforms into a single, streamlined toolbar.</li>
    </ul>
  </VerticalTimelineElement>

</VerticalTimeline>
      </div>
    </div>

</section>
  );
};

export default Services;
