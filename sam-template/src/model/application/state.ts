/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace State {
  export interface Auth {}
  export interface Global {
    menuCollapsed: boolean;
    selectedKey: string;
    openKey?: string;
    pageTitle: string;
    breadcrumb: string;
    record: any;
    openMenuDrawer: boolean;
    request: any;
    response: any;
    searchTerm?: string;
    postUrl: string;
    getUrl: string;
    updateUrl: string;
    getPostUrl?: string;
    selectUrl: string;
    deleteUrl: string;
    showFormModal: boolean;
    loading?: boolean;
    isPageData?: boolean;
    showMore?: boolean;
    selectField?: string;
    page?: any;
  }
}
