/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_file', {
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
    document_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_access_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_download_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_encoding: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_last_downloaded_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_last_downloaded_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file_local_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_mime_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_size: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    file_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_unique_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_uploaded_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_uploaded_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'server_file'
  });
};
