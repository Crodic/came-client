// Example: const [useSelectorValue] = (state) => state.[name_reducer in store].<key in initialState>

export const StateDealProduct = (state) => state.products.deal;

export const StateProduct = (state) => state.products.product;

export const StateAuthUser = (state) => state.user.auth;

export const StateUser = (state) => state.user.user;

export const StateToken = (state) => state.user.accessToken;

export const StateGetBlogs = (state) => state.blog.blogs;

export const StateRefreshUser = (state) => state.user.refreshUser;

export const StateCartUser = (state) => state.cart.userCart;

export const StateCartLoading = (state) => state.cart.isLoading;
