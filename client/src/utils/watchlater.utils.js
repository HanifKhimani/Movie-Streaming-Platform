const watchlaterUtils = {
    check: ({ listWatchlater, mediaId }) => listWatchlater && listWatchlater.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
  };
  
  export default watchlaterUtils;