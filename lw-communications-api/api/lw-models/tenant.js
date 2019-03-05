/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tenant', {
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
    condition_report_tour_view: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_of_rent_month: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    date_of_rent_year: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    driving_licence_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_time_tour_view: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_marketing_offers_view_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_pet_present: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_pre_registration_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_property_details_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_registration_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_renter: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_tenant_details_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lease_wallet_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    maintenance_request_tour_view: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    mobile_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile_number_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    need_assistance: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    notify_me: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    passport_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    renter_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    renting_place: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_of_pets_breed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assistance_country_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assistance_country_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tenant'
  });
};
