const CrudRequests = {
  insert:
    'INSERT INTO crud_db (user, userNumber, callNumber, timeCall, duration, operator, cost) VALUES (?, ?, ?, ?, ?, ?, ?)',
  get: 'SELECT * FROM crud_db',
  getOne: 'SELECT * FROM crud_db WHERE id = ?',
  update:
    'UPDATE crud_db SET user = ?, callNumber = ?, timeCall = ?, duration = ?, operator = ?, cost = ? WHERE id = ?',
  delete: 'DELETE FROM crud_db WHERE id=?',
};

export default CrudRequests;
