import { Request, Response } from 'express';

import Link, { ILink } from '../models/link';

export const getLinks = async (req: Request, res: Response) => {
  try {
    const links = await Link.find();

    return res.status(200).json({ status: 200, links });
  } catch (error) {
    return res.status(400).json({ status: 400, error });
  }
};

export const addLink = async (req: Request, res: Response) => {
  try {
    const { links }: { links: ILink[] } = req.body;

    await Link.deleteMany({});
    await Link.insertMany(links);

    return res.status(200).json({ status: 200, results: 'success' });
  } catch (error) {
    return res.status(400).json({ status: 400, error });
  }
};
