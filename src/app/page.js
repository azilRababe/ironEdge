import React from "react";
import "./style.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import { planning, coaches, services } from "@/utils/data";

const Page = () => {
  return (
    <div>
      <header>
        <div className="section__container header__container" id="home">
          <div className="header__content">
            <h1>ACHIEVE YOUR DREAM PHYSIQUE</h1>
            <p>
              Personalized workouts, expert guidance, and real progress tracking
              — all in one!
            </p>
            <div className="header__btn">
              <button className="btn">Start Your Journey Now</button>
            </div>
          </div>
          <div className="header__image">
            <Image
              src="/images/header.png"
              alt="Zenova Hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <div className="section__container about__container">
          <div className="about__image">
            <Image
              src="/images/about.png"
              alt="About Zenova"
              height={433}
              width={576}
            />
          </div>
          <div className="about__content">
            <h2 className="section__header">WHY CHOOSE ZENOVA</h2>
            <p>
              Fitness isn&apos;t just about lifting weights or running miles —
              it&apos;s about consistency&lsquo; knowledge&lsquo; and fun! With
              Zenova, you don&apos;t just work out; you transform your lifestyle
              with science-backed programs and a supportive community.
            </p>
            <p>
              Be part of a fitness revolution where technology meets training.
              Whether you want to build muscle&lsquo; lose weight&lsquo; or
              boost endurance&lsquo; Zenova is here to guide you every step of
              the way.
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
          <h2 className="section__header">
            Get Ready For Today&apos;s Sessions.
          </h2>
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
          <Image
            src="/images/strong.jpg"
            alt="Strong and Fit"
            height={4288}
            width={2848}
          />
        </div>
        <div className="strong__content">
          <h2 className="section__header">Are You Ready To Get Stronger?</h2>
          <p>
            Join Zenova and redefine your strength. Our programs are designed to
            build both physical and mental resilience, helping you crush your
            goals and feel empowered every day.
          </p>
          <p>
            Whether you&apos;re a beginner or an experienced lifter, you&apos;ll
            find tailored support and community-driven motivation.
          </p>
          <p>
            This is your chance to become your strongest self — let&apos;s make
            it happen together.
          </p>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section__container coaches__container">
        <h2 className="section__header">Meet The Team</h2>
        <div className="coaches__grid">
          {coaches.map((coach, index) => (
            <div className="coaches__card" key={index}>
              <Image
                src={coach.img}
                alt={`Coach ${coach.name}`}
                height={4240}
                width={2832}
              />
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
          <Image
            src="/images/banner.jpg"
            alt="banner"
            height={4650}
            width={3102}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
