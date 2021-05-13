import React, { FC } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';

import { Tags, FilterItems } from '../../utils/enums';

import useStyles from './style';

interface TagItemsProps {
  selectedTag: string;
  sortData: (field: string, item: string) => void;
}

const TagItems: FC<TagItemsProps> = ({ selectedTag, sortData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className='tags_title'>Выберите стиль букета</h4>
      {Object.values(Tags).map((item, index) => (
        <div key={index} className='tag_item'>
          <Button
            className={classNames({
              'tag_item-selected':
                Object.keys(Tags)[Object.values(Tags).indexOf(item)] ===
                selectedTag,
            })}
            onClick={() =>
              sortData(
                FilterItems.tags,
                Object.keys(Tags)[Object.values(Tags).indexOf(item)]
              )
            }
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TagItems;
