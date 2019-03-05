/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condition_report_room_element', {
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
    is_room_damaged: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_room_uncleaned: {
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
    text_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    condition_report_room_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'condition_report_room',
        key: 'id'
      }
    }
  }, {
    tableName: 'condition_report_room_element'
  });
};
