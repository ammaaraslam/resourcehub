export default async function handler(req, res) {
  const websiteURL = req.query.url;
  const ogs = require("open-graph-scraper");
  const options = { url: websiteURL };
  ogs(options).then((data) => {
    const { error, result } = data;
    if (error) {
      return res.status(400).json({
        message: "URL NOT FOUND",
      });
    } else {
      return res.status(200).json(result);
    }
  });
}
