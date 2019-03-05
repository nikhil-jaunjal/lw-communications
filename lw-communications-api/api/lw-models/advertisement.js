/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('advertisement', {
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
    from_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_bottom: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_left: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_right: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_top: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ui_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ui_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    server_file_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'server_file',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'advertisement'
  });
};
