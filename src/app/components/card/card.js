import Image from 'next/image';
import styles from './card.module.sass'

const Card = () => (
  <div className={styles.card}>
    <div className={styles.card_imageWrap}>
      <div className={styles.card_image}>
        <Image src="/clatite-cu-branza-la-cuptor.jpg" alt="thumbnail" fill={true} />
      </div>
    </div>

    <div className={styles.card_content}>
      <div className={`${styles.card_label} h6 mb-10 c-orange`}>Product Reviews</div>
      <div className={`${styles.card_title} h3`}>Clatite cu branza dulce la cuptor</div>
      <div className={styles.card_summary}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam labore architecto recusandae blanditiis saepe, velit voluptates officia ut animi veniam. Eaque nam praesentium modi nostrum. Labore adipisci nemo aspernatur.</div>
    </div>
  </div>
);

export default Card;