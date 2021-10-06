import { Request, Response } from "express";
import validatejs from "validate.js";
import Extenso from "./extenso";

export class Controller {
  private readonly validate: any;

  constructor () {
    this.validate = {
      valor: {
        numericality: 'Valor inválido, digite apenas números inteiros.'
      }
    };
  }

  extenso (req: Request, res: Response): Response {
    const errors = validatejs(req.params, this.validate, { format: "flat" });

    if (errors) return res.status(400).json({ errors: this.validate.valor.numericality });
   
    return res.json({ extenso: Extenso(req.params.valor) });
  }
}

export default Controller;
