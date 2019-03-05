/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('survey', {
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
    addr_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addr_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addr_street_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addr_street_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addr_suburb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addr_unit_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agent_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agent_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    login_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postal_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    property_manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'property_manager',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'survey'
  });
};
