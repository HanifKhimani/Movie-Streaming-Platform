import privateClient from "../client/private.client";

const watchlaterEndpoints = {
  list: "user/watchlater",
  add: "user/watchlater",
  remove: ({ watchlaterId }) => `user/watchlater/${watchlaterId}`
};

const watchlaterApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(watchlaterEndpoints.list);

      return { response };
    } catch (err) { return { err }; }
  },
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate
  }) => {
    try {
      const response = await privateClient.post(
        watchlaterEndpoints.add,
        {
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          mediaRate
        }
      );

      return { response };
    } catch (err) { return { err }; }
  },
  remove: async ({ watchlaterId }) => {
    try {
      const response = await privateClient.delete(watchlaterEndpoints.remove({ watchlaterId }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default watchlaterApi;