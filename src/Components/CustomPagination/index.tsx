import React, { FC, useState, useEffect } from "react";
import { Pagination } from "antd";

import { QUANTITY_OF_PAGE_ITEMS } from "../../utils/consts";

import useStyles from "./style";

interface PaginationProps {
  data: IGoods[];
  pageProps: IPage;
  setPageProps: React.Dispatch<React.SetStateAction<IPage>>;
}

const CustomPagination: FC<PaginationProps> = ({ data, pageProps, setPageProps }) => {
  const classes = useStyles();

  const changePage = (pageNumber: number) => {
    const copyPageProps = { ...pageProps };

    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(data.length / QUANTITY_OF_PAGE_ITEMS)
    ) {
      copyPageProps.currentPage = pageNumber;
      copyPageProps.startIndex =
        pageNumber * QUANTITY_OF_PAGE_ITEMS - QUANTITY_OF_PAGE_ITEMS;
      copyPageProps.endIndex = pageNumber * QUANTITY_OF_PAGE_ITEMS;
      console.log(copyPageProps);
    }

    setPageProps(copyPageProps);
  };

  useEffect(() => {
    const copyPageProps = { ...pageProps };
    copyPageProps.quantityOfItems = data.length;

    if (data.length <= QUANTITY_OF_PAGE_ITEMS) {
      copyPageProps.currentPage = 1;
      copyPageProps.startIndex = 0;
      copyPageProps.endIndex = QUANTITY_OF_PAGE_ITEMS;
    }

    setPageProps(copyPageProps);
  }, [data]);

  return (
    <Pagination
      className={classes.root}
      showTitle={false}
      current={pageProps.currentPage}
      total={pageProps.quantityOfItems}
      pageSize={QUANTITY_OF_PAGE_ITEMS}
      onChange={(num) => changePage(num)}
    />
  );
};

export default CustomPagination;
