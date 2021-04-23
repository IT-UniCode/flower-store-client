import React, { FC, useState } from "react";
import { Button, Menu } from "antd";
import classNames from "classnames";

import { sortGoodsByAnd, sortGoodsByOr, getGoodsList } from "../../API/goods";
import TagItems from "../TagItems";

import useStyles from "./style";

interface CategoryMenuProps {
  sortItemsData: ISortItems | undefined;
  setGoodsData: React.Dispatch<React.SetStateAction<IGoods[]>>;
}

interface ISelectedItems {
  category: string;
  tag: string;
}

const CategoryMenu: FC<CategoryMenuProps> = ({
  sortItemsData,
  setGoodsData,
}) => {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState<ISelectedItems>({
    category: "",
    tag: "",
  });

  const sortData = (field: string, item: string) => {
    const copySelectedItems: ISelectedItems = { ...selectedItems };
    if (field === "category") {
      copySelectedItems.category = item;
    } else {
      copySelectedItems.tag = item;
    }

    setSelectedItems((prev) => ({ ...prev, [field]: item }));

    if (copySelectedItems.category === "" || copySelectedItems.tag === "") {
      sortGoodsByOr(copySelectedItems.category, copySelectedItems.tag).then(
        (goods) => {
          setGoodsData(goods.data);
        }
      );
    } else {
      sortGoodsByAnd(copySelectedItems.category, copySelectedItems.tag).then(
        (goods) => {
          setGoodsData(goods.data);
        }
      );
    }
  };

  const clearFilters = () => {
    setSelectedItems({ category: "", tag: "" });

    getGoodsList().then((res) => {
      setGoodsData(res.data);
    });
  };

  return (
    <div className={classes.root}>
      <div className="category-menu">
        <h4 className="category-menu_title">
          Выберите свой идеальный букет
        </h4>
        <Menu>
          {sortItemsData?.categories.map((item, index) => (
            <Menu.Item
              key={index}
              onClick={() => sortData("category", item)}
              className={classNames({
                selected_category: item === selectedItems.category,
              })}
            >
              <span className="category-menu_item">{item}</span>
            </Menu.Item>
          ))}
        </Menu>
        <TagItems
          selectedTag={selectedItems.tag}
          tagsData={sortItemsData?.tags}
          sortData={sortData}
          setGoodsData={setGoodsData}
        />
        <Button 
          className="clearBtn" 
          type="primary" 
          onClick={clearFilters}
        >
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default CategoryMenu;
