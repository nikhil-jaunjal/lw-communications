/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_support', {
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
    closed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    priority: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    support_rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ticket_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issue_and_updated_fields_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'issue_and_updated_fields',
        key: 'id'
      },
      unique: true
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
    tableName: 'customer_support'
  });
};
