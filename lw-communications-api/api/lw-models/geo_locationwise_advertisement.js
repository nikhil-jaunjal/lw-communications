/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_locationwise_advertisement', {
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
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suburb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'geo_locationwise_advertisement'
  });
};
