import { FunctionComponent } from "react";
import styles from "./UnitsTesting.module.css";

const UnitsTesting: FunctionComponent = () => {
  return (
    <div className={styles.unitsTesting}>
      <div className={styles.px10px10pxContainer}>
        <span className={styles.px30pxTxtContainer}>
          <p className={styles.px}>10px</p>
          <p className={styles.px}>10px</p>
          <p className={styles.px2}>10px</p>
        </span>
      </div>
      <div className={styles.px20px20pxContainer}>
        <span className={styles.px30pxTxtContainer}>
          <p className={styles.px}>20px</p>
          <p className={styles.px}>20px</p>
          <p className={styles.px2}>20px</p>
        </span>
      </div>
      <div className={styles.px30px}>
        <span className={styles.px30pxTxtContainer}>
          <p className={styles.px}>30px</p>
          <p className={styles.px2}>30px</p>
        </span>
      </div>
      <div className={styles.px40px}>
        <span className={styles.px30pxTxtContainer}>
          <p className={styles.px}>40px</p>
          <p className={styles.px2}>40px</p>
        </span>
      </div>
      <div className={styles.px50px}>
        <span className={styles.px30pxTxtContainer}>
          <p className={styles.px}>50px</p>
          <p className={styles.px2}>50px</p>
        </span>
      </div>
      <div className={styles.px100px}>
        <span className={styles.px30pxTxtContainer}>
          <p className={styles.px}>100px</p>
          <p className={styles.px2}>100px</p>
        </span>
      </div>
      <div className={styles.unitsTestingChild} />
      <div className={styles.unitsTestingItem} />
      <div className={styles.unitsTestingInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.unitsTestingChild1} />
      <div className={styles.unitsTestingChild2} />
      <div className={styles.unitsTestingChild3} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </div>
    </div>
  );
};

export default UnitsTesting;
