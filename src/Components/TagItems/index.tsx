import React, { FC } from "react";
import { Button } from "antd";
import classNames from "classnames";

import useStyles from "./style";

interface TagItemsProps {
  tagsData: string[] | undefined;
  selectedTag: string;
  sortData: (field: string, item: string) => void;
  setGoodsData: React.Dispatch<React.SetStateAction<IGoods[]>>;
}

const TagItems: FC<TagItemsProps> = ({
  selectedTag,
  tagsData,
  sortData,
  setGoodsData,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className="tags_title">Выберите стиль букета</h4>
      {tagsData?.map((item, index) => (
        <div key={index} className="tag_item">
          <Button
            className={classNames({
              "tag_item-selected": item === selectedTag,
            })}
            onClick={() => sortData("tag", item)}
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TagItems;
