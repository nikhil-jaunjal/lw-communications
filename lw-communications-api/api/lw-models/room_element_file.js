/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room_element_file', {
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
    room_element_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'room_element',
        key: 'id'
      },
      unique: true
    },
    server_file_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'server_file',
        key: 'id'
      }
    }
  }, {
    tableName: 'room_element_file'
  });
};
