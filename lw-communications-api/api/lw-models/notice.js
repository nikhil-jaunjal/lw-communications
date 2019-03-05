/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notice', {
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
    case_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    local_pdf_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_pdf_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'maintenance_request',
        key: 'id'
      },
      unique: true
    },
    tenant_property_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tenant_property',
        key: 'id'
      }
    }
  }, {
    tableName: 'notice'
  });
};
