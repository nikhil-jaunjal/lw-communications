/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    abn_accuracy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abn_not_verified: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abn_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abn_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abn_verified: {
      type: DataTypes.STRING(255),
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
    agency_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_person_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    established: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
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
    staff: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toll_free: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency'
  });
};
