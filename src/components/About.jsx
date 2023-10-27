import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-4 text-justify min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row text-center md:text-left max-w-7xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        variants={textVariant()}
      >
        <motion.div
          className="relative h-60 md:h-auto md:w-80 mx-auto border-10 border-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={textVariant()}
        >
          <img src="without-admin.png" alt="img" className="bg-blue-900 h-full w-full object-cover" />
          <motion.div
            className="absolute  w-full h-full -z-10 border-8 border-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: -40, left: -40 }}
            transition={{ duration: 1, delay: 1 }


            }
          >
          </motion.div>
        </motion.div>


        <div className="md:order-1 md:w-2/3 md:pl-16">
          <motion.h2 className="text-3xl font-semibold mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Full Stack Web Developer
          </motion.h2>
          <motion.p className="mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            As a seasoned <strong>Full Stack Web Developer</strong>, I am dedicated to crafting exceptional web experiences. My passion for design and coding ignited in the early days of my computer journey, eventually leading me to embrace Full Stack development in 2019. I derive immense satisfaction from creating exquisitely designed, user-friendly, and functional websites.

            With a rich portfolio of experience in <strong>TypeScript</strong> and <strong>JavaScript</strong>, I specialize in prominent frameworks such as <strong>React</strong>, <strong>React Native</strong>, <strong>Node.js</strong>, and <strong>Three.js</strong>. My insatiable curiosity and aptitude for learning allow me to adapt swiftly and work closely with clients to engineer efficient, scalable, and user-centric solutions that tackle real-world challenges. Let's collaborate and transform your ideas into reality!
          </motion.p>
        </div>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
