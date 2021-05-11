import React, { FC, useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import CategoryMenu from '../../Components/CategoryMenu';
import { getGoodsListPage, filterGoods } from '../../API/goods';
import { QUANTITY_OF_PAGE_ITEMS } from '../../utils/consts';

import GoodsList from '../../Components/GoodsList';

import useStyles from './style';

const Catalog: FC = () => {
  const classes = useStyles();

  const [goods, setGoods] = useState<IGoods[]>([]);
  const [selectedItems, setSelectedItems] = useState<ISelectedItems>({
    type: '',
    tags: '',
  });
  const [pageProps, setPageProps] = useState<IPage>({
    quantityOfItems: 0,
    currentPage: 1,
    startIndex: 0,
    endIndex: QUANTITY_OF_PAGE_ITEMS,
  });

  useEffect(() => {
    getGoodsListPage(
      selectedItems.type,
      selectedItems.tags,
      pageProps.startIndex,
      pageProps.endIndex
    ).then((res) => {
      setGoods(res.data);
    });
  }, [selectedItems, pageProps.startIndex, pageProps.endIndex]);

  useEffect(() => {
    filterGoods(selectedItems.type, selectedItems.tags).then((res) => {
      setPageProps((prev) => {
        const data = { ...prev };

        if (res.data.length <= QUANTITY_OF_PAGE_ITEMS) {
          data.currentPage = 1;
          data.startIndex = 0;
          data.endIndex = QUANTITY_OF_PAGE_ITEMS;
        }
        data.quantityOfItems = res.data.length;

        return data;
      });
    });
  }, [selectedItems, goods]);

  return (
    <div className={classes.root}>
      <h2 className="page_title">Каталог букетов</h2>
      <div className="catalogue_wrapper">
        <CategoryMenu
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <GoodsList
          goodsArray={goods}
          pageData={pageProps}
          setPageData={setPageProps}
        />
      </div>
    </div>
  );
};

export default withRouter(Catalog);
