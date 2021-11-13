import API from "./api";

export const getCategoryList: any = async () => {
  return await API.GET('/api/category-list')
}
