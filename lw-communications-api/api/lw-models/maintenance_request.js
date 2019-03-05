/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenance_request', {
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
    authorized_property_access: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_action_taken_by_property_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_maintenance_request_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_maintenance_request_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_maintenance_request_open: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_maintenance_request_urgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    local_pdf_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_closed_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_closed_by_authority: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_closing_request_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_closure_closed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    maintenance_request_closure_requested_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_closure_requested_by_pm_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    maintenance_request_closure_requested_by_tenant_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    maintenance_request_closure_requested_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    maintenance_request_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_pdf_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_reopen_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    maintenance_request_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maintenance_request_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    property_access_co_tenant_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    property_access_other_contact: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reminder_counter: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'maintenance_request'
  });
};
