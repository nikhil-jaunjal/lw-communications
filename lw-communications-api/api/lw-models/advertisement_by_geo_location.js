/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('advertisement_by_geo_location', {
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
    advertisement_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'advertisement',
        key: 'id'
      }
    },
    geo_locationwise_advertisement_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'geo_locationwise_advertisement',
        key: 'id'
      }
    }
  }, {
    tableName: 'advertisement_by_geo_location'
  });
};
