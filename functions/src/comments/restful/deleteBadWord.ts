import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";

const deleteBadWord = createRestuflFunction({
  method: MethodEnum.DELETE,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];

      const query = db.collection("badwords").doc(docId);
      await query.delete();

      res.status(200).json({
        message: "Bad word deleted",
        data: {
          id: docId,
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default deleteBadWord;