import React, { FC } from "react";
import { Pagination } from "antd";

import { QUANTITY_OF_PAGE_ITEMS } from "../../utils/consts";

import useStyles from "./style";

interface PaginationProps {
  data: IGoods[];
  pageData: IPage;
  setPageData: React.Dispatch<React.SetStateAction<IPage>>;
}

const CustomPagination: FC<PaginationProps> = ({ data, pageData, setPageData }) => {
  const classes = useStyles();

  const changePage = (pageNumber: number) => {
    const copyPageProps = { ...pageData };

    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(data.length / QUANTITY_OF_PAGE_ITEMS)
    ) {
      copyPageProps.currentPage = pageNumber;
      copyPageProps.startIndex =
        pageNumber * QUANTITY_OF_PAGE_ITEMS - QUANTITY_OF_PAGE_ITEMS;
      copyPageProps.endIndex = pageNumber * QUANTITY_OF_PAGE_ITEMS;
    }

    setPageData(copyPageProps);
  };

  // useEffect(() => {
  //   const copyPageProps = { ...pageData };
  //   copyPageProps.quantityOfItems = data.length;

  //   if (data.length <= QUANTITY_OF_PAGE_ITEMS) {
  //     copyPageProps.currentPage = 1;
  //     copyPageProps.startIndex = 0;
  //     copyPageProps.endIndex = QUANTITY_OF_PAGE_ITEMS;
  //   }

  //   setPageData(copyPageProps);
  // }, [data]);

  return (
    <Pagination
      className={classes.root}
      showTitle={false}
      current={pageData.currentPage}
      total={pageData.quantityOfItems}
      pageSize={QUANTITY_OF_PAGE_ITEMS}
      onChange={(num) => changePage(num)}
    />
  );
};

export default CustomPagination;
