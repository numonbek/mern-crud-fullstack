import db from '../modules/Crud.js';
import CrudRequests from '../sqprequests/CrudRequests.js';

class CrudController {
  /* Creacte */
  async create(req, res) {
    try {
      const { user, userNumber, callNumber, timeCall, duration, operator, cost } = req.body;
      await db.query(
        CrudRequests.insert,
        [user, userNumber, callNumber, timeCall, duration, operator, cost],
        (error, result) => {
          res.send(result);
        },
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }
  /* GetAll */
  async getAll(req, res) {
    try {
      await db.query(CrudRequests.get, (error, result) => {
        res.send(result);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  /* getOne */
  async getOne(req, res) {
    try {
      const { id } = req.params;
      await db.query(CrudRequests.getOne, id, (error, result) => {
        if (error) {
          throw new Error('не указан ID');
        }
        res.send(result);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  /* Update */
  async update(req, res) {
    try {
      const { id } = req.params;
      const { user, callNumber, timeCall, duration, operator, cost } = req.body;
      await db.query(
        CrudRequests.update,
        [user, callNumber, timeCall, duration, operator, cost, id],
        (error, result) => {
          if (error) {
            throw new Error('не указан ID');
          }
          res.send(result);
        },
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }
  /* Delete */
  async delete(req, res) {
    try {
      const { id } = req.params;
      await db.query(CrudRequests.delete, id, (error, result) => {
        if (error) {
          throw new Error('не указан ID');
        }
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CrudController();
