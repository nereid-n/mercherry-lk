import Vue from 'vue';

export default {
  'RESPONSE_LIST': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/responses`, {params: params})
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
  'RESPONSE_EMAIL': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/responses/email`, params)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
  'RESPONSE': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/responses/${params.id}`)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
  'RESPONSE_STATUS': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/responses/status`, params)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
  'RESPONSE_COUNT': async () => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/responses/count`)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
};
