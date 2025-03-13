import { useEffect, useState } from "react";

import styles from "./Page.module.css";

const WIDGETS_AMOUNT = 7;
export const Page = () => {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const updateThemeColor = () => {
      console.log("updateThemeColor");
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      const appleStatusBarMeta = document.querySelector(
        'meta[name="apple-mobile-web-app-status-bar-style"]'
      );

      if (themeColorMeta) {
        themeColorMeta.setAttribute("content", color);
      }

      if (appleStatusBarMeta) {
        appleStatusBarMeta.setAttribute("content", color);
      }
    };

    updateThemeColor();

    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, [color]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.configuration}>
        <label htmlFor="input">Theme color: {color}</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className={styles.widgets}>
        {[...Array(WIDGETS_AMOUNT)].map((_, index) => (
          <div key={index} className={styles.widget}>
            Widget {index + 1}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <h3>Footer</h3>
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          nesciunt quidem illum quae dolore amet, distinctio tempore
          necessitatibus ad nobis. Cupiditate debitis alias minus repellendus
          numquam voluptatum quas enim incidunt, perspiciatis sequi quaerat
          itaque odit nulla sint necessitatibus iusto similique aliquid, dolores
          eaque ipsam quisquam veniam soluta officiis pariatur. Unde
          perspiciatis accusantium repellendus perferendis odit vitae eius totam
          iure amet veritatis, saepe dolor nostrum illum placeat excepturi?
          Ipsum odit nemo deserunt quae sint libero unde deleniti cumque?
          Distinctio illum iste accusantium ab aliquid, beatae tempora! Sapiente
          ad odio perspiciatis deleniti sint saepe libero, aliquam veniam omnis
          soluta sed culpa, error aperiam laudantium totam porro quasi officiis?
          Delectus veritatis obcaecati commodi, quae doloribus esse explicabo
          error eveniet nostrum nulla qui fuga, accusantium tempore hic debitis,
          ex harum autem maxime non perspiciatis? Rerum atque maiores labore
          temporibus qui iste quibusdam itaque laborum, incidunt quas neque ad
          at deserunt, perferendis earum. Hic, a quo culpa voluptate officia ut
          porro, corrupti velit delectus eligendi doloribus cumque sequi,
          consequuntur voluptatum harum atque voluptatem natus dolore similique
          recusandae ab totam laborum. Quas optio soluta inventore officiis,
          suscipit nesciunt provident veritatis facere animi reiciendis ipsam
          cupiditate, voluptate tempore, ipsa velit minima magni consequatur
          assumenda! Alias explicabo consectetur nemo pariatur, vero nam id
          optio cum rem perspiciatis sit delectus? Dolorem possimus nulla libero
          quod, eos unde rerum nesciunt, voluptate quam aliquam expedita
          molestiae aspernatur! Suscipit voluptate enim, accusamus distinctio
          repellendus reprehenderit perspiciatis ipsa eaque at velit autem
          adipisci illo iste delectus iusto, sint, ex architecto nulla nihil?
          Sed distinctio ut possimus sit dolores sapiente soluta voluptatem
          obcaecati, magni aut nulla praesentium eligendi quidem tempore at cum,
          nam facere delectus unde!
        </div>
      </div>
    </div>
  );
};
