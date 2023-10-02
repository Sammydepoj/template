/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TablePaginationConfig } from "antd";
import React, { useCallback } from "react";
import { setGlobalKey } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { PageProps } from "../../model/application/props";

export const PageTable: React.FC<PageProps.TableData> = ({
  column,
  dataSource,
  loading,
  pageSize,
  total,
  scrollX,
  emptyHeadingText,
  emptyParagraphText,
}) => {
  const dispatch = useAppDispatch();
  const onPaginate = useCallback(
    (pageNumber: number) => {
      dispatch(
        setGlobalKey({
          key: "page",
          value: pageNumber - 1,
        })
      );
    },
    [dispatch]
  );

  const pagination: TablePaginationConfig = {
    position: ["bottomRight"],
    onChange: onPaginate,
    showSizeChanger: false,
    total: total,
    pageSize: pageSize ? pageSize : 10,
    hideOnSinglePage: true,
    itemRender: (_, type, originalElement) => {
      if (type === "prev") {
        return (
          <button className="bg-[#F8F8F8] dark:bg-[#222] text-[#575F6E!important] border border-[#575F6E] dark:border-[#222!important] px-5  rounded-md">
            Previous
          </button>
        );
      }
      if (type === "next") {
        return (
          <button className="bg-[#0014cc] text-[#fff!important] px-5  rounded-md">
            Next
          </button>
        );
      }
      return originalElement;
    },
  };

  return (
    <div className="border dark:border-[#252525] rounded-md p-5">
      <Table
        columns={column}
        loading={loading}
        dataSource={dataSource}
        pagination={pagination as any}
        scroll={{ x: scrollX }}
        className="-mt-4"
        locale={{
          emptyText: (
            <div className="h-60 grid place-content-center">
              {" "}
              <h1 className="text-[#182A2C] text-[1.5rem] font-[poppins-medium] font-bold">
                {" "}
                {emptyHeadingText}{" "}
              </h1>
              <p className="text-[#182A2C] text-[1rem] font-[poppins-regular]">
                {emptyParagraphText}
              </p>
            </div>
          ),
        }}
      />
    </div>
  );
};
