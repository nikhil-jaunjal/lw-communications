/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_authority', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'jhi_authority'
  });
};
