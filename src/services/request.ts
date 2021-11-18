import API from "./api";

export const getCategoryList = async () => (
  await API.GET('/api/category-list')
);

export const getSearchResult = async (query: String) => (
  await API.GET('/api/search')
)
