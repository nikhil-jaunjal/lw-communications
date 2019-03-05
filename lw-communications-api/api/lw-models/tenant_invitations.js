/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tenant_invitations', {
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
    invitation_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invitation_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invited_email: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'tenant_invitations'
  });
};
