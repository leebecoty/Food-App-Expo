import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FilterParams, ProductListProps} from '@app-schemas/Product/product-list';
import allData from '../../data/all.json';
import drinksData from '../../data/drinks.json';
import fastFoodData from '../../data/fast_food.json';
import snacksData from '../../data/snacks.json';

type ProductItem = {
  id?: string | number;
  name?: string;
  category?: string;
  image?: string;
  price?: string;
  description?: string;
};

const PAGE_SIZE = 10;

const initialState: ProductListProps = {
  paginationProductTypeAll: [],
  paginationProductTypeFastFood: [],
  paginationProductTypeDrinks: [],
  paginationProductTypeSnacks: [],
  hasFetchedPaginationProductTypeAll: false,
  hasFetchedPaginationProductTypeFastFood: false,
  hasFetchedPaginationProductTypeDrinks: false,
  hasFetchedPaginationProductTypeSnacks: false,
  hasMorePaginationProductTypeAll: false,
  hasMorePaginationProductTypeFastFood: false,
  hasMorePaginationProductTypeDrinks: false,
  hasMorePaginationProductTypeSnacks: false,
  currentPagePaginationProductTypeAll: 1,
  currentPagePaginationProductTypeFastFood: 1,
  currentPagePaginationProductTypeDrinks: 1,
  currentPagePaginationProductTypeSnacks: 1,
  productListError: null,
  productListLoading: false,
};

const getSourceData = (type?: FilterParams['type']): ProductItem[] => {
  switch (type) {
    case 'drinks':
      return drinksData as ProductItem[];
    case 'fast_food':
      return fastFoodData as ProductItem[];
    case 'snacks':
      return snacksData as ProductItem[];
    case 'all':
    default:
      return allData as ProductItem[];
  }
};

export const getProductData = createAsyncThunk(
  'productList/getProductData',
  async (params: FilterParams) => {
    const page = params.page || 1;
    const limit = params.limit || PAGE_SIZE;
    const source = getSourceData(params.type);
    const startIndex = (page - 1) * limit;
    const items = source.slice(startIndex, startIndex + limit);

    return {
      type: params.type || 'all',
      items,
      page,
      hasMore: startIndex + limit < source.length,
    };
  },
);

const assignProductState = (
  state: ProductListProps,
  type: FilterParams['type'],
  items: ProductItem[],
  page: number,
  hasMore: boolean,
) => {
  if (type === 'fast_food') {
    state.paginationProductTypeFastFood =
      page === 1
        ? items
        : [...(state.paginationProductTypeFastFood || []), ...items];
    state.hasFetchedPaginationProductTypeFastFood = true;
    state.hasMorePaginationProductTypeFastFood = hasMore;
    state.currentPagePaginationProductTypeFastFood = hasMore ? page + 1 : page;
    return;
  }

  if (type === 'snacks') {
    state.paginationProductTypeSnacks =
      page === 1 ? items : [...(state.paginationProductTypeSnacks || []), ...items];
    state.hasFetchedPaginationProductTypeSnacks = true;
    state.hasMorePaginationProductTypeSnacks = hasMore;
    state.currentPagePaginationProductTypeSnacks = hasMore ? page + 1 : page;
    return;
  }

  if (type === 'drinks') {
    state.paginationProductTypeDrinks =
      page === 1 ? items : [...(state.paginationProductTypeDrinks || []), ...items];
    state.hasFetchedPaginationProductTypeDrinks = true;
    state.hasMorePaginationProductTypeDrinks = hasMore;
    state.currentPagePaginationProductTypeDrinks = hasMore ? page + 1 : page;
    return;
  }

  state.paginationProductTypeAll =
    page === 1 ? items : [...(state.paginationProductTypeAll || []), ...items];
  state.hasFetchedPaginationProductTypeAll = true;
  state.hasMorePaginationProductTypeAll = hasMore;
  state.currentPagePaginationProductTypeAll = hasMore ? page + 1 : page;
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    resetProductTypeAll: state => {
      state.paginationProductTypeAll = [];
      state.hasFetchedPaginationProductTypeAll = false;
      state.hasMorePaginationProductTypeAll = false;
      state.currentPagePaginationProductTypeAll = 1;
    },
    resetProductTypeFastFood: state => {
      state.paginationProductTypeFastFood = [];
      state.hasFetchedPaginationProductTypeFastFood = false;
      state.hasMorePaginationProductTypeFastFood = false;
      state.currentPagePaginationProductTypeFastFood = 1;
    },
    resetProductTypeSnacks: state => {
      state.paginationProductTypeSnacks = [];
      state.hasFetchedPaginationProductTypeSnacks = false;
      state.hasMorePaginationProductTypeSnacks = false;
      state.currentPagePaginationProductTypeSnacks = 1;
    },
    resetProductTypeDrinks: state => {
      state.paginationProductTypeDrinks = [];
      state.hasFetchedPaginationProductTypeDrinks = false;
      state.hasMorePaginationProductTypeDrinks = false;
      state.currentPagePaginationProductTypeDrinks = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductData.pending, state => {
        state.productListLoading = true;
        state.productListError = null;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.productListLoading = false;
        assignProductState(
          state,
          action.payload.type,
          action.payload.items,
          action.payload.page,
          action.payload.hasMore,
        );
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.productListLoading = false;
        state.productListError = action.error.message || 'Load product failed';
      });
  },
});

export const {
  resetProductTypeAll,
  resetProductTypeFastFood,
  resetProductTypeSnacks,
  resetProductTypeDrinks,
} = productListSlice.actions;

export default productListSlice.reducer;
