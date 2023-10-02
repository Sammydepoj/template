/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace PageProps {
  export class AuthLayoutProps {
    children?: any;
    padding?: string;
  }
  export class ModalProps {
    openModal?: boolean;
    handleCancel?: any;
    modalTitle?: any;
    modalFooter?: any;
    onOk?: any;
    children?: any;
    cancelText?: string;
    okText?: any;
    modalWith?: string;
    centered?: boolean;
    maskClosable?: boolean;
    closable?: boolean;
    className?: string;
  }
  export class TableData {
    dataSource?: any[];
    column?: any[];
    loading?: boolean;
    total?: number;
    pageSize?: number;
    onPagination?: () => void;
    shouldExpand?: boolean;
    scrollX?: number;
    emptyHeadingText?: string;
    emptyParagraphText?: string;
  }

  export class SuccessModal {
    openModal?: boolean;
    onClick?: () => void;
    children?: any;
    onCancel?: () => any;
  }
  export class PageLayoutProps {
    children?: any;
    pageTitle?: string;
    defaultSelectedKeys?: string;
    defaultOpenKeys?: string;
    breadcrumb?: any;
  }

  export class SelectOptionValues {
    key?: any;
    value?: any;
  }
  export class PageViewProps {
    pageTitle?: string;
    showPageFilter?: boolean;
    showFilterBtn?: boolean;
    otherHeaderContents?: React.ReactNode | undefined;
    children?: React.ReactNode;
    selectedKey: string = "";
    btnName?: string | React.ReactNode;
    filterBtnClickAction?: () => void;
    searchPlaceHolder?: string;
    dropDownData?: React.ReactNode;
    aboveFilterChildren?: React.ReactNode;
    downloadLoading?: boolean;
    pageLoading?: boolean;
  }
}
