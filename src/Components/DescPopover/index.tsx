import React, { FC, useState } from "react";
import { Popover } from "antd";

import useStyles from "./style";

interface DescPopoverProps {
  title: string;
  desc: string;
  checkId: string;
}

const DescPopover: FC<DescPopoverProps> = ({ title, desc, checkId }) => {
  const classes = useStyles();

  const [showMore, setShowMore] = useState({
    goodsId: "",
    show: false,
  });

  return (
    <Popover
      trigger="click"
      visible={showMore.show && showMore.goodsId === checkId}
      content={
        <div className={classes.root}>
          <h4 className='popover_title'>{title}</h4>
          <p>{desc}</p>
        </div>
      }
      onVisibleChange={() =>
        setShowMore((prev) => ({
          show: !prev.show,
          goodsId: checkId,
        }))
      }
    >
      <h3 className="goods_card-title">{title}</h3>
      <p className="goods_card-desc">{desc}</p>
    </Popover>
  );
};

export default DescPopover;
