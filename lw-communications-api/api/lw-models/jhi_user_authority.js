/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_user_authority', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jhi_user',
        key: 'id'
      }
    },
    authority_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jhi_authority',
        key: 'name'
      }
    }
  }, {
    tableName: 'jhi_user_authority'
  });
};
