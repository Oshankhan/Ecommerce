import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  products: [],
  error: "",
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productCount: action.payload.productCount,
        error: "",
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productCount: action.payload.productCount,
        error: "",
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};
