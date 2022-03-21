import { Request, Response } from 'express';
import LoggerInstance from '../../loaders/logger';
import convertToPdf from './service';

const handleConverter = async (req: Request, res: Response) => {
  try {
    const filePath = req.body.filePath;
    await convertToPdf(filePath);
    res.status(200).json({ success: true, message: 'Converted to PDF' });
  } catch (err) {
    LoggerInstance.error(err.message);
    res.status(err.code || 500).json({
      success: false,
      message: err.message || 'Unable to convert to pdf.',
    });
  }
};
export default handleConverter;
