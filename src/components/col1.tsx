import * as React from "react";
import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import * as styles from "./col1.module.css";

type Col1Type = {
  parisImage?: string;
  paris?: string;
  prop?: string;

  /** Style props */
  detailsWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth?: Property.Width;
  fromLeft?: Property.Left;
  parisColor?: Property.Color;
  propColor?: Property.Color;

  /** Action props */
  onCol1Click?: () => void;
};

const Col1: FunctionComponent<Col1Type> = ({
  onCol1Click,
  parisImage,
  paris,
  detailsWidth,
  prop,
  propDisplay,
  propWidth,
  fromLeft,
  parisColor,
  propColor,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth,
      color: propColor,
    };
  }, [propDisplay, propWidth, propColor]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: fromLeft,
    };
  }, [fromLeft]);

  const parisStyle: CSS.Properties = useMemo(() => {
    return {
      color: parisColor,
    };
  }, [parisColor]);

  return (
    <button className={styles.col1} onClick={onCol1Click}>
      <div className={styles.pariscard}>
        <img className={styles.parisimageIcon} alt="" src={parisImage} />
        <div className={styles.destinationDetails}>
          <b className={styles.paris} style={parisStyle}>
            {paris}
          </b>
          <div className={styles.details} style={detailsStyle}>
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Col1;
