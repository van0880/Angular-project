
export const host = 'http://localhost:3000';
export const environment = {
  production: false,
  ourList: {
    get: host + '/OurList'
  },
  authorList: {
    get: host + "/authorList"
  },
  socialList: {
    get: host + "/socialFoto"
  },
  categorys: {
    get: host + "/categoryBlock"
  },
  posts: {
    get: host + "/allPosts"
  }
};

