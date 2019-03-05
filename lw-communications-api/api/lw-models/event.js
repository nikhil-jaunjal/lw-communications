/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', {
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
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cr_pdf_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    event_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bond_dispute_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'bond_dispute',
        key: 'id'
      }
    },
    condition_report_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'condition_report',
        key: 'id'
      }
    },
    maintenance_request_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'maintenance_request',
        key: 'id'
      }
    },
    notice_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'notice',
        key: 'id'
      }
    },
    property_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'property',
        key: 'id'
      }
    },
    property_manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'property_manager',
        key: 'id'
      }
    },
    tenant_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tenant',
        key: 'id'
      }
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
    tableName: 'event'
  });
};
