/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room_element_rules', {
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
    is_balcony: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_bathroom: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_bed_room: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_entrance_hall: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_general: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_hall: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_kitchen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_laundry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_living_room: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_lounge_room: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    room_element_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'room_element_rules'
  });
};
