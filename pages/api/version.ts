import { NextApiRequest, NextApiResponse } from "next";
import { CONTRACTS_VERSION, WEB_VERSION } from "../../constants";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ web: WEB_VERSION, contracts: CONTRACTS_VERSION })
}