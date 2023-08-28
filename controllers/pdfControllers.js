import PDF from "../models/pdfModel";

// post pdf
const createPdf = async (req, res, next) => {
  try {
    const {
      name,
      post,
      summary,
      education,
      projects,
      skills,
      tools,
      langaugeSkills,
      contactUs,
    } = req.body;
    if (
      !name ||
      !post ||
      !summary ||
      !projects ||
      !skills ||
      !tools ||
      !langaugeSkills 
    ) {
      res.status(400).json({ message: "All fields are required" });
    } else {
      // create the pdf
      const doc = new PDF({
        name,
        post,
        summary,
        education,
        projects,
        skills,
        tools,
        langaugeSkills,
        contactUs,
      });
      // save the pdfdetails
      const pdfsave = await doc.save();
      if (pdfsave?._id) {
        return res.status(200).json({
          id: doc._id,
          name,
          post,
          summary,
          education,
          projects,
          skills,
          tools,
          langaugeSkills,
          contactUs,
        });
      } else {
        res.status(400).json({ error: error });
      }
    }
  } catch (error) {
    next(error);
  }
};

const getPdf = async (req, res, next) => {
  try {
    let data = await PDF.findOne({ _id: req.params.pdfId });
    return res.json({ data });
  } catch (error) {
    next(error);
  }
};

const updatePdf = async (req, res, next) => {
  try {
    const pdfUpdate = await PDF.findOneAndUpdate(req.param.pdfId, req.body, {
      new: true,
    });
    if (!pdfUpdate) {
      return res.status(400).json({ error: { message: "pdf not update" } });
    } else {
      return res.status(200).json({ message: "pdf update", pdf: pdfUpdate });
    }
  } catch (error) {
    next(error);
  }
};

const deletPdf = async (req, res, next) => {
  try {
    const pdfdelete = await PDF.findOneAndDelete(req.param.pdfId);
    if (!pdfdelete) {
      return res.status(400).json({ error: { message: "pdf not deleted" } });
    } else {
      return res.status(200).json({ message: "pdf deleted" });
    }
  } catch (error) {
    next(error);
  }
};


module.exports = { createPdf, getPdf, updatePdf, deletPdf };