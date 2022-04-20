Vue.createApp({
    data() {
      return {
        header: {},
        articles: [],
      };
    },
    methods: {
      getHeaderData() {
        axios
          .get('https://raw.githubusercontent.com/hanisftryaa/coba/main/contents/header.json')
          .then((res) => {
            console.log(res.data);
            this.header = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getArticles() {
        axios
          .get('https://raw.githubusercontent.com/hanisftryaa/coba/main/contents/articles.json')
          .then((res) => {
            console.log(res.data);
            this.articles = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    beforeMount() {
      this.getHeaderData();
      this.getArticles();
    },
  }).mount('#app');
  