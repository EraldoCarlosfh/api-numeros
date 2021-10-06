import { Request, Response } from "express";
import validatejs from "validate.js";
import Extenso from "./extenso";

export class Controller {
  private readonly validate: any;

  constructor () {
    this.validate = {
      valor: {
        numericality: {
          maiorOuIgual: -99999,
          menorOuIgual: 99999,
          somenteInteiros: true,
          maximo: "^O valor deve ser maior ou igual a %{count}",
          minino: "^O valor deve ser menor ou igual a %{count}",
          naoInteiro: "^Deve ser informado apenas números inteiros!",
          invalido: "^Apenas números serão aceitos!"
        }
      }
    };
  }

  extenso (req: Request, res: Response): Response {
    const errors = validatejs(req.params, this.validate, { format: "flat" });

    if (errors) return res.status(400).json({ errors: 'Digite apenas números inteiros' });
   
    return res.json({ extenso: Extenso(req.params.valor) });
  }
}

export default Controller;
