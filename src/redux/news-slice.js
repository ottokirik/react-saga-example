import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  news: [],
  popularNews: [],
  searchString: 'react',
  isLoading: false,
  newsError: null,
  popularNewsError: null,
}

const newsSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    getLatestNewsFetch: (state, action) => {
      state.searchString = action.payload
      state.isLoading = true
    },

    getLatestNewsSuccess: (state, action) => {
      state.news = action.payload
      state.isLoading = false
    },

    getLatestNewsFailure: (state, action) => {
      state.newsError = action.payload
      state.isLoading = false
    },

    getPopularNewsFetch: (state) => {
      state.isLoading = true
    },

    getPopularNewsSuccess: (state, action) => {
      state.popularNews = action.payload
      state.isLoading = false
    },

    getPopularNewsFailure: (state, action) => {
      state.popularNewsError = action.payload
      state.isLoading = false
    },
  },
})

export const { actions, reducer } = newsSlice
export const {
  getLatestNewsFetch,
  getLatestNewsSuccess,
  getLatestNewsFailure,
  getPopularNewsFetch,
  getPopularNewsSuccess,
  getPopularNewsFailure,
} = actions
