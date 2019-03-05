/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_social_user_connection', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    access_token: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expire_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provider_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider_user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rank: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'jhi_social_user_connection'
  });
};
