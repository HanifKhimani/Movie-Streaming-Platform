import responseHandler from "../handlers/response.handler.js";
import watchLaterModel from "../models/watchlater.model.js";

const addToWatchLater = async (req, res) => {
  try {
    const isWatchLater = await watchLaterModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });
    if (isWatchLater) return responseHandler.ok(res, isWatchLater);

    const watchLaterItem = new watchLaterModel({
      ...req.body,
      user: req.user.id
    });

    await watchLaterItem.save();

    responseHandler.created(res, watchLaterItem);
  } catch (error) {
    responseHandler.error(res);
  }
};

const removeFromWatchLater = async (req, res) => {
  try {
    const { watchlaterId } = req.params;

    const watchLaterItem = await watchLaterModel.findOne({
      user: req.user.id,
      _id: watchlaterId
    });

    if (!watchLaterItem) return responseHandler.notfound(res);

    await watchLaterItem.deleteOne();
    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

const getWatchLaterList = async (req, res) => {
  try {
    const watchLaterList = await watchLaterModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, watchLaterList);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { addToWatchLater, removeFromWatchLater, getWatchLaterList };