import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import styles from "@/styles/hero.module.css"; // Import the CSS module

const Slider = () => {
  const items = [
    {
      title: "Explore Paintings",
      description:
        "Discover a world of artists. Immerse yourself in the vibrant art scene where modernity meets tradition. Explore neon-lit skyscrapers and historic temples that have inspired artists for centuries.",
      image:
        "https://images.unsplash.com/photo-1532479255663-1ded0438a701?auto=format&fit=crop&q=80&w=2018&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Discover Sculptures",
      description:
        "Explore the heart of classical art in Japan. Discover the intricate beauty of Buddhist temples, lush gardens, and imperial palaces. Marvel at Shinto shrines and the charm of traditional wooden houses.",
      image:
        "https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Explore Collectibles",
      description:
        "Uncover treasures with a modern twist. Dive into architectural marvels, experience vibrant nightlife, and savor hearty street food that makes Osaka a collector's paradise.",
      image:
        "https://images.unsplash.com/photo-1698177077434-7a94a56afcb2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  ];

  const [activeItem, setActiveItem] = useState(0);

  const showNextItem = () => {
    setActiveItem((activeItem + 1) % items.length);
  };

  const showPreviousItem = () => {
    setActiveItem((activeItem - 1 + items.length) % items.length);
  };

  const keyPress = (e) => {
    if (e.keyCode === 37) {
      showPreviousItem();
    } else if (e.keyCode === 39) {
      showNextItem();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className={styles.Main}>
        <main className="relative">
          <div className={styles.container}>
            <ul className={styles.ul}>
              <li>
                <div className={styles.gridVertical}>
                  <div className="w-[80%] mx-auto absolute max-w-[250px] left-[12%] bottom-[200px]">
                    <div className={styles.intro}>
                      <a href="#" className={styles.link}>
                        <h1 className={styles.title}>
                          <span className={styles.underline}>
                            {items[activeItem].title}
                          </span>
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div className={styles.columnMd10}>
                    <div className="w-[60%] mx-auto">
                      <img
                        src={items[activeItem].image}
                        alt={items[activeItem].title}
                        className={styles.img}
                      />
                    </div>
                    <div className="w-[60%] mx-auto">
                      <div className={styles.columnMd9}>
                        <div className={styles.introShowMobile}>
                          <a href="#" className={styles.link}>
                            <h1 className={styles.title}>
                              <span className={styles.underline}>
                                {items[activeItem].title}
                              </span>
                            </h1>
                          </a>
                        </div>
                        <p className={styles.description}>
                          {items[activeItem].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="w-fit ml-[72%]">
              <button className={styles.button} onClick={showNextItem}>
                &larr;
              </button>
              <button className={styles.button} onClick={showPreviousItem}>
                &rarr;
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Slider;
