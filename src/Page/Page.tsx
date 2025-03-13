import { useEffect, useState } from "react";

import styles from "./Page.module.css";

export const Page = () => {
  const [widgetsAmount, setWidgetsAmount] = useState(5);
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
        <label htmlFor="input">Amount of widgets: </label>
        <input
          min="0"
          max="10"
          id="input"
          type="range"
          value={widgetsAmount}
          onChange={(e) => setWidgetsAmount(Number(e.target.value))}
        />
      </div>

      <div className={styles.configuration}>
        <label htmlFor="input">Theme color: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {widgetsAmount > 0 && (
        <div className={styles.widgets}>
          {[...Array(widgetsAmount)].map((_, index) => (
            <div key={index} className={styles.widget}>
              Widget {index + 1}
            </div>
          ))}
        </div>
      )}

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
          nam facere delectus unde! Vel quidem animi, repudiandae explicabo eos
          ipsa qui natus accusamus saepe laborum commodi quia nesciunt culpa
          iure dolor et assumenda tempore nemo quo? Consequatur eveniet nihil
          inventore, a officiis ratione dolores expedita deleniti optio adipisci
          eligendi error quibusdam voluptates. Commodi delectus iure voluptate
          consectetur est harum? Sit vero quas nulla reprehenderit cupiditate
          repudiandae dolorum. Enim aperiam harum architecto ipsa reiciendis,
          quas corrupti molestias nostrum nobis voluptatibus, eveniet, provident
          sequi voluptate! Veritatis incidunt dignissimos commodi quidem
          delectus accusamus odio modi temporibus beatae nesciunt voluptate
          autem tenetur, fuga quas maxime neque doloribus suscipit. Veniam nisi
          commodi, ad, necessitatibus repellat eligendi asperiores atque quasi
          consectetur culpa voluptatem fuga voluptates laudantium perspiciatis
          nam laborum, repellendus beatae unde recusandae delectus soluta!
          Facilis vero libero porro nobis suscipit nemo laboriosam fuga,
          voluptatibus cum neque corporis, magni repellat tempore laborum, quia
          alias eos et dolor ipsam a dolore eum reiciendis. Velit aliquid
          facilis, molestias accusantium aperiam odio soluta quaerat minus dicta
          alias quis ratione. Quae quam tempore dignissimos facilis. Corrupti,
          odio, inventore quo accusantium ducimus voluptates quidem laboriosam
          velit quae vel alias quasi omnis, enim voluptatibus exercitationem
          eaque libero illo eius aspernatur delectus. Facilis repudiandae atque
          excepturi error unde, aliquid blanditiis similique aperiam tempora
          eius explicabo minima inventore veritatis voluptatum molestias aliquam
          quibusdam, voluptates nulla nemo dicta. Velit nihil consequatur
          voluptatem sapiente consequuntur incidunt nostrum minima provident
          quisquam, accusamus alias sequi accusantium eum totam temporibus.
        </div>
      </div>
    </div>
  );
};
