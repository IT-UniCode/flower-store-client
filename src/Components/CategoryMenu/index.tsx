import React, { FC } from 'react';
import { Button, Menu } from 'antd';
import classNames from 'classnames';

import { Type, FilterItems } from '../../utils/consts';
import TagItems from '../TagItems';

import useStyles from './style';

interface CategoryMenuProps {
  selectedItems: ISelectedItems;
  setSelectedItems: React.Dispatch<React.SetStateAction<ISelectedItems>>;
}

const CategoryMenu: FC<CategoryMenuProps> = ({
  selectedItems,
  setSelectedItems,
}) => {
  const classes = useStyles();

  const filterData = (field: string, item: string) => {
    const copySelectedItems: ISelectedItems = { ...selectedItems };

    if (field === FilterItems.type) {
      copySelectedItems.type = item;
    } else {
      copySelectedItems.tags = item;
    }

    setSelectedItems((prev) => ({ ...prev, [field]: item }));
  };

  const clearFilters = () => {
    setSelectedItems({ type: '', tags: '' });
  };

  return (
    <div className={classes.root}>
      <div className="category-menu">
        <h4 className="category-menu_title">Выберите свой идеальный букет</h4>
        <Menu>
          {Object.values(Type).map((item, index) => (
            <Menu.Item
              key={index}
              onClick={() =>
                filterData(
                  FilterItems.type,
                  Object.keys(Type)[Object.values(Type).indexOf(item)]
                )
              }
              className={classNames({
                selected_category:
                  Object.keys(Type)[Object.values(Type).indexOf(item)] ===
                  selectedItems.type,
              })}
            >
              <span className="category-menu_item">{item}</span>
            </Menu.Item>
          ))}
        </Menu>
        <TagItems selectedTag={selectedItems.tags} sortData={filterData} />
        <Button className="clearBtn" type="primary" onClick={clearFilters}>
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default CategoryMenu;
