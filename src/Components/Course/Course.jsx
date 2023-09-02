import styles from "./Course.module.css";
import { courseImages } from "./Course-images";

function CourseCards() {
  return (
    <div className={styles.course_container}>
      <div className={styles.course_para_container}>
        <h1 className={styles.big_para}>
          <span className={styles.free_violet}>Free</span> Atlas Course
        </h1>
        <p className={styles.small_para}>
          Collected the expertise of Atlas scientists and experts into short
          email tutorials.
        </p>
        <p className={styles.small_para2}>
          Subscribe to find out how digestion works and where to start making
          dietary changes.
        </p>
      </div>
      <div className={styles.absolute_book}>
        <img
          src="violet-book.png"
          alt="Violet Book"
          className={styles.violet_book}
        />
      </div>
      <div className={styles.course_cards_container}>
        {courseImages.map((courseImage) => (
          <div className={styles.course_card} key={courseImage.id}>
            <img
              src={courseImage.img}
              alt={courseImage.alt}
              className={styles.course_card_img}
            />
            <div className={styles.course_card_details}>
              <p className={styles.course_detail}>{courseImage.info}</p>
            </div>
          </div>
        ))}
        <div className={styles.absolute_button_container}>
            <button className={styles.absolute_button}>All coursesgit</button>
        </div>
      </div>
    </div>
  );
}

export default function Course() {
  return (
    <>
      <CourseCards />
    </>
  );
}
