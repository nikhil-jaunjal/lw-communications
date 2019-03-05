/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_persistent_token', {
    series: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    ip_address: {
      type: DataTypes.STRING(39),
      allowNull: true
    },
    token_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    token_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_agent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'jhi_user',
        key: 'id'
      }
    }
  }, {
    tableName: 'jhi_persistent_token'
  });
};
