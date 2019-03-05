/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property', {
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    google_map_lattitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    google_map_longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_condition_report_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nearest_transport: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number_of_bathrooms: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_bed_rooms: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_entrance_halls: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_halls: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_kitchens: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_laundries: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_of_parkings: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    number_ofbalconies: {
      type: DataTypes.INTEGER(11),
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
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
    tableName: 'property'
  });
};
