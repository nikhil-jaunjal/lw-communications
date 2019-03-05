/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('au_postcode_state_lat_long', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    accuracy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    place_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    postcode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    state_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    state_name: {
      type: DataTypes.STRING(28),
      allowNull: true
    }
  }, {
    tableName: 'au_postcode_state_lat_long'
  });
};
