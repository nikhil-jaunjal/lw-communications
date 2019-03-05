/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenance_request_category', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'maintenance_request_category'
  });
};
