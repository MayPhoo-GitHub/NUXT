import { SET_POST_LIST } from './mutation-types'

export default {
    /**
     * Fetch Post List API
     * @param {Object} storeContext
     * @param {Object} nuxtContext
     * @returns
     */
data() {
      return {
        posts: []
      }
    },

        fetchPostList({ commit }, { $axios }) {
        return $axios.get("http://localhost:3000/posts") 
        .then(response => {
            commit(SET_POST_LIST, response.data)
            console.warn(response.data)
        })
        .catch(e => {
            this.error.push(e)
        })
},
}
