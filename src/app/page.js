import React from "react";
import "./style.css";
import Footer from "@/components/Footer";

const planning = [
  {
    title: "Body Combat",
    desc: "A high-energy workout inspired by martial arts to improve strength, endurance, and agility.",
  },
  {
    title: "HIIT Training",
    desc: "Burn fat and build muscle with high-intensity interval training designed to maximize results in less time.",
  },
  {
    title: "Strength & Conditioning",
    desc: "Enhance muscle strength and endurance through structured weight training and functional exercises.",
  },
  {
    title: "Yoga Flow",
    desc: "Boost flexibility, balance, and mindfulness with a dynamic yoga session suitable for all levels.",
  },
  {
    title: "CrossFit",
    desc: "Challenge yourself with varied functional movements and intense training to build overall fitness.",
  },
  {
    title: "Pilates",
    desc: "Improve core strength, posture, and flexibility with a low-impact but highly effective workout.",
  },
];
const coaches = [
  {
    name: "Julio Ramirez",
    role: "MMA Fighter",
    img: "images/coach-01.jpg",
  },
  {
    name: "Emma Carter",
    role: "Strength & Conditioning Coach",
    img: "images/coach-02.jpg",
  },
  {
    name: "Daniel Lee",
    role: "Olympic Weightlifting Coach",
    img: "images/coach-03.jpg",
  },
];
const services = [
  {
    num: "01",
    title: "Fitness Training",
    desc: "Personalized workout plans to help you achieve your fitness goals, whether it's muscle building, weight loss, or endurance training.",
  },
  {
    num: "02",
    title: "Nutrition Guidance",
    desc: "Get expert meal plans and dietary advice tailored to your fitness journey, ensuring optimal performance and recovery.",
  },
  {
    num: "03",
    title: "Online Coaching",
    desc: "Access virtual coaching sessions with certified trainers to get real-time feedback and maximize your progress.",
  },
  {
    num: "04",
    title: "Progress Tracking",
    desc: "Monitor your fitness journey with smart tracking tools, helping you stay on top of your goals and see real improvements.",
  },
  {
    num: "05",
    title: "Community Challenges",
    desc: "Stay motivated by joining fitness challenges and competing with others in our community to push your limits.",
  },
  {
    num: "06",
    title: "Recovery & Wellness",
    desc: "Learn recovery techniques, mobility exercises, and stress management strategies to maintain overall health and well-being.",
  },
];
const Page = () => {
  return (
    <div>
      <header>
        <div className="section__container header__container" id="home">
          <div className="header__content">
            <h1>ACHIEVE YOUR DREAM PHYSIQUE WITH ZENOVA!</h1>
            <p>
              Personalized workouts, expert guidance, and real progress tracking
              — all in one!
            </p>
            <div className="header__btn">
              <button className="btn">Start Your Journey Now</button>
            </div>
          </div>
          <div className="header__image">
            <img src="images/header.png" alt="Zenova Hero" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <div className="section__container about__container">
          <div className="about__image">
            <img src="images/about.png" alt="About Zenova" />
          </div>
          <div className="about__content">
            <h2 className="section__header">WHY CHOOSE ZENOVA</h2>
            <p>
              Fitness isn’t just about lifting weights or running miles — it’s
              about consistency, knowledge, and fun! With Zenova, you don’t just
              work out; you transform your lifestyle with science-backed
              programs and a supportive community.
            </p>
            <p>
              Be part of a fitness revolution where technology meets training.
              Whether you want to build muscle, lose weight, or boost endurance,
              Zenova is here to guide you every step of the way.
            </p>
            <div className="about__btn">
              <button className="btn">Join The Movement</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service" id="service">
        <div className="section__container service__container">
          <h2 className="section__header">What We Do</h2>
          <div className="service__grid">
            {services.map((card, index) => (
              <div className="service__card" key={index}>
                <span>{card.num}</span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="planning" id="classes">
        <div className="section__container planning__container">
          <h2 className="section__header">Get Ready For Today's Sessions.</h2>
          <div className="planning__grid">
            {planning.map((session, index) => (
              <div className="planning__card" key={index}>
                <h4>{session.title}</h4>
                <p>{session.desc}</p>
                <span>
                  <i className="ri-arrow-right-s-line"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong Section */}
      <section className="strong__container">
        <div className="strong__image">
          <img src="images/strong.jpg" alt="Strong and Fit" />
        </div>
        <div className="strong__content">
          <h2 className="section__header">Are You Ready To Get Stronger?</h2>
          <p>
            Join Zenova and redefine your strength. Our programs are designed to
            build both physical and mental resilience, helping you crush your
            goals and feel empowered every day.
          </p>
          <p>
            Whether you're a beginner or an experienced lifter, you'll find
            tailored support and community-driven motivation.
          </p>
          <p>
            This is your chance to become your strongest self — let's make it
            happen together.
          </p>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section__container coaches__container">
        <h2 className="section__header">Meet The Team</h2>
        <div className="coaches__grid">
          {coaches.map((coach, index) => (
            <div className="coaches__card" key={index}>
              <img src={coach.img} alt={`Coach ${coach.name}`} />
              <h4>{coach.name}</h4>
              <p>{coach.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="banner" id="contact">
        <div className="banner__content">
          <h2>MEMBER OF THE MONTH</h2>
          <p>
            WANNA BE LIKE HIM? <a href="#">Join Us</a>
          </p>
        </div>
        <div className="banner__image">
          <img src="images/banner.jpg" alt="banner" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
