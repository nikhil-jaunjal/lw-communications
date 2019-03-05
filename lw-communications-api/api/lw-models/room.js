/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room', {
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
    area: {
      type: "DOUBLE",
      allowNull: true
    },
    given_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_condition_report_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sequence_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    property_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'property',
        key: 'id'
      }
    }
  }, {
    tableName: 'room'
  });
};
