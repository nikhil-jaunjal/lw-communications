/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tenant_property', {
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
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bond_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    bond_reference_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_condition_report_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_parent_tenant: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    last_reminder_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lease_term: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    monthly_reminder_day: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    monthly_rent: {
      type: "DOUBLE",
      allowNull: true
    },
    moving_in_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    moving_out_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    next_reminder_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    number_of_occupants: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_tenants: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    p_m_verified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payments_reminder_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    property_address_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    property_info_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    property_manager_email_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    property_manager_info_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    remider_frequency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remind_me_to_pay_rent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tenancy_info_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tenant_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tenants_and_occupants_info_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    verified_by_pm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    weekly_reminder_day: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'agent',
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
    }
  }, {
    tableName: 'tenant_property'
  });
};
