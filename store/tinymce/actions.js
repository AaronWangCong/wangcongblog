import { addBlogApi } from "../../lib/api";

export default {
  // 新建博客
  async addBlog({ state, commit }, param) {
    let obj = await addBlogApi(param);
  },
}
